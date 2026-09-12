document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       SUPABASE
    ========================================================== */

    const SUPABASE_URL =
        "https://ervhwjrlqcsobawwhkpf.supabase.co";

    /*
     * PENTING:
     * Masukkan publishable key Supabase kamu yang sekarang
     * pada bagian ini.
     */
    const SUPABASE_KEY =
        "sb_publishable_u48E-Q-RjdFRFLC_Cv3rmg_gD0Z3y2K";


    const supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_KEY
        );


    /* =========================================================
       MENENTUKAN HALAMAN / MENU
    ========================================================== */

    /*
     * Prioritas:
     * 1. <body data-page="...">
     * 2. Nama file HTML
     *
     * Jadi:
     *
     * about.html    -> about
     * programs.html -> programs
     * classes.html  -> classes
     * blog.html     -> blog
     * gallery.html  -> gallery
     * parents.html  -> parents
     */

    const allowedPages = [
        "about",
        "programs",
        "classes",
        "blog",
        "gallery",
        "parents"
    ];


    const fileName =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase()
            .replace(".html", "");


    let pageName =
        document.body.dataset.page || fileName;


    /*
     * Kalau halaman tidak termasuk menu posting,
     * tidak perlu mengambil postingan.
     */

    if (!allowedPages.includes(pageName)) {
        pageName = "";
    }


    /* =========================================================
       ELEMENT
    ========================================================== */

    const postsContainer =
        document.getElementById("postsContainer");


    const lightbox =
        document.getElementById("galleryLightbox");


    const lightboxImage =
        document.getElementById("galleryLightboxImage");


    const lightboxTitle =
        document.getElementById("galleryLightboxTitle");


    const lightboxDate =
        document.getElementById("galleryLightboxDate");


    const closeButton =
        document.getElementById("galleryClose");


    const prevButton =
        document.getElementById("galleryPrev");


    const nextButton =
        document.getElementById("galleryNext");


    let galleryPhotos = [];

    let currentIndex = 0;


    /* =========================================================
       FORMAT DATE
    ========================================================== */

    function formatDate(dateString) {

        if (!dateString) {
            return "";
        }


        const date =
            new Date(dateString);


        if (Number.isNaN(date.getTime())) {
            return "";
        }


        return date.toLocaleDateString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    }


    /* =========================================================
       ESCAPE HTML
    ========================================================== */

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================================
       LOAD POSTS SESUAI MENU
    ========================================================== */

    async function loadPosts() {

        if (!postsContainer) {
            return;
        }


        /*
         * Kalau halaman bukan halaman posting,
         * hentikan script.
         */

        if (!pageName) {
            return;
        }


        postsContainer.innerHTML = `
            <div class="cloud-loading">

                <div class="cloud-loading-icon">
                    ☁️
                </div>

                <strong>
                    Sedang mengambil postingan...
                </strong>

            </div>
        `;


        /*
         * INI BAGIAN PALING PENTING
         *
         * Sebelumnya:
         *
         * .eq("page_name", "gallery")
         *
         * Akibatnya semua halaman mengambil
         * postingan Gallery.
         *
         * Sekarang:
         *
         * .eq("page_name", pageName)
         *
         * Jadi setiap halaman hanya mengambil
         * postingan miliknya sendiri.
         */

        let query =
            supabaseClient
                .from("posts")
                .select(`
                    id,
                    title,
                    content,
                    image_url,
                    page_name,
                    created_at
                `)
                .eq(
                    "page_name",
                    pageName
                )
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );


        /*
         * KHUSUS GALLERY
         *
         * Gallery hanya menampilkan postingan
         * yang mempunyai gambar.
         */

        if (pageName === "gallery") {

            query =
                query.not(
                    "image_url",
                    "is",
                    null
                );

        }


        const {
            data,
            error
        } = await query;


        /* =====================================================
           ERROR
        ====================================================== */

        if (error) {

            console.error(
                "Gagal mengambil postingan:",
                error
            );


            postsContainer.innerHTML = `
                <div class="cloud-empty">

                    <div class="cloud-empty-icon">
                        ☁️
                    </div>

                    <h3>
                        Postingan belum dapat dimuat
                    </h3>

                    <p>
                        Silakan refresh halaman.
                    </p>

                </div>
            `;

            return;
        }


        /* =====================================================
           DATA
        ====================================================== */

        const posts =
            data || [];


        /*
         * Khusus Gallery:
         * simpan data untuk lightbox.
         */

        if (pageName === "gallery") {

            galleryPhotos =
                posts;

        }


        /* =====================================================
           TIDAK ADA POSTINGAN
        ====================================================== */

        if (!posts.length) {

            if (pageName === "gallery") {

                postsContainer.innerHTML = `
                    <div class="cloud-empty">

                        <div class="cloud-empty-icon">
                            📸
                        </div>

                        <h3>
                            Belum ada kenangan
                        </h3>

                        <p>
                            Foto kegiatan sekolah akan muncul di sini.
                        </p>

                    </div>
                `;

            } else {

                postsContainer.innerHTML = `
                    <div class="cloud-empty">

                        <div class="cloud-empty-icon">
                            ☁️
                        </div>

                        <h3>
                            Belum ada postingan
                        </h3>

                        <p>
                            Postingan untuk menu ini akan muncul di sini.
                        </p>

                    </div>
                `;

            }

            return;
        }


        /* =====================================================
           RENDER
        ====================================================== */

        if (pageName === "gallery") {

            renderGallery();

        } else {

            renderPosts(posts);

        }

    }


    /* =========================================================
       RENDER POSTINGAN
    ========================================================== */

    function renderPosts(posts) {

        postsContainer.innerHTML = "";


        const grid =
            document.createElement("div");


        /*
         * Gunakan class yang fleksibel.
         * Kalau CSS project kamu sudah memiliki
         * style card postingan, class ini bisa
         * dipakai tanpa mengganggu navbar.
         */

        grid.className =
            "posts-grid";


        posts.forEach(
            (post) => {

                const card =
                    document.createElement("article");


                card.className =
                    "post-card";


                const imageHTML =
                    post.image_url
                        ? `
                            <div class="post-card-image">
                                <img
                                    src="${escapeHTML(post.image_url)}"
                                    alt="${escapeHTML(post.title)}"
                                    loading="lazy"
                                >
                            </div>
                          `
                        : "";


                card.innerHTML = `

                    ${imageHTML}

                    <div class="post-card-content">

                        <span class="post-card-date">
                            ${formatDate(post.created_at)}
                        </span>

                        <h3>
                            ${escapeHTML(
                                post.title ||
                                "Postingan"
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                post.content ||
                                ""
                            )}
                        </p>

                    </div>

                `;


                grid.appendChild(card);

            }
        );


        postsContainer.appendChild(grid);

    }


    /* =========================================================
       RENDER GALLERY
    ========================================================== */

    function renderGallery() {

        postsContainer.innerHTML = "";


        const grid =
            document.createElement("div");


        grid.className =
            "cloud-photo-grid";


        galleryPhotos.forEach(
            (photo, index) => {

                const card =
                    document.createElement("article");


                card.className =
                    "cloud-photo-card";


                card.innerHTML = `

                    <div class="cloud-photo-pin"></div>

                    <div class="cloud-photo-image">

                        <img
                            src="${escapeHTML(
                                photo.image_url
                            )}"
                            alt="${escapeHTML(
                                photo.title
                            )}"
                            loading="lazy"
                        >

                        <div class="cloud-photo-shine"></div>

                    </div>


                    <div class="cloud-photo-info">

                        <h3>
                            ${escapeHTML(
                                photo.title ||
                                "Momen Bahagia"
                            )}
                        </h3>

                        <span>
                            ${formatDate(
                                photo.created_at
                            )}
                        </span>

                    </div>

                `;


                card.addEventListener(
                    "click",
                    () => {

                        openLightbox(index);

                    }
                );


                grid.appendChild(card);

            }
        );


        postsContainer.appendChild(grid);

    }


    /* =========================================================
       OPEN LIGHTBOX
    ========================================================== */

    function openLightbox(index) {

        if (!galleryPhotos.length) {
            return;
        }


        if (!lightbox) {
            return;
        }


        currentIndex =
            index;


        updateLightbox();


        lightbox.classList.add(
            "active"
        );


        document.body.classList.add(
            "cloud-lightbox-open"
        );

    }


    /* =========================================================
       UPDATE LIGHTBOX
    ========================================================== */

    function updateLightbox() {

        const photo =
            galleryPhotos[currentIndex];


        if (!photo) {
            return;
        }


        if (lightboxImage) {

            lightboxImage.src =
                photo.image_url || "";


            lightboxImage.alt =
                photo.title ||
                "Foto gallery";

        }


        if (lightboxTitle) {

            lightboxTitle.textContent =
                photo.title ||
                "Momen Bahagia";

        }


        if (lightboxDate) {

            lightboxDate.textContent =
                formatDate(
                    photo.created_at
                );

        }

    }


    /* =========================================================
       CLOSE LIGHTBOX
    ========================================================== */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }


        lightbox.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "cloud-lightbox-open"
        );

    }


    /* =========================================================
       PREVIOUS
    ========================================================== */

    function showPrevious() {

        if (!galleryPhotos.length) {
            return;
        }


        currentIndex--;


        if (currentIndex < 0) {

            currentIndex =
                galleryPhotos.length - 1;

        }


        updateLightbox();

    }


    /* =========================================================
       NEXT
    ========================================================== */

    function showNext() {

        if (!galleryPhotos.length) {
            return;
        }


        currentIndex++;


        if (
            currentIndex >=
            galleryPhotos.length
        ) {

            currentIndex = 0;

        }


        updateLightbox();

    }


    /* =========================================================
       EVENTS
    ========================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            showPrevious
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            showNext
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =========================================================
       KEYBOARD
    ========================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (!lightbox) {
                return;
            }


            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key ===
                "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                showPrevious();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                showNext();

            }

        }
    );


    /* =========================================================
       REALTIME
    ========================================================== */

    if (pageName) {

        supabaseClient

            .channel(
                `posts-${pageName}`
            )

            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "posts"
                },
                (payload) => {

                    /*
                     * Ambil page_name dari data
                     * yang berubah.
                     */

                    const changedPage =
                        payload.new?.page_name ||
                        payload.old?.page_name;


                    /*
                     * Hanya refresh halaman ini
                     * kalau postingan yang berubah
                     * memang milik menu ini.
                     */

                    if (
                        !changedPage ||
                        changedPage === pageName
                    ) {

                        loadPosts();

                    }

                }
            )

            .subscribe();

    }


    /* =========================================================
       START
    ========================================================== */

    loadPosts();

});