document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================================================
           SUPABASE CONFIG
        ========================================================== */

        const SUPABASE_URL =
            "https://ervhwjrlqcsobawwhkpf.supabase.co";


        const SUPABASE_KEY =
            "sb_publishable_u48E-Q-RjdFRFLC_Cv3rmg_gD0Z3y2K";


        const supabaseClient =
            window.supabase.createClient(
                SUPABASE_URL,
                SUPABASE_KEY
            );


        /* =========================================================
           DETEKSI HALAMAN
        ========================================================== */

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
                .replace(
                    ".html",
                    ""
                );


        let pageName =
            document.body.dataset.page ||
            fileName;


        if (
            !allowedPages.includes(
                pageName
            )
        ) {

            pageName = "";

        }


        /* =========================================================
           ELEMENT UTAMA
        ========================================================== */

        const postsContainer =
            document.getElementById(
                "postsContainer"
            );


        /* =========================================================
           LIGHTBOX ELEMENT
        ========================================================== */

        const lightbox =
            document.getElementById(
                "galleryLightbox"
            );


        const lightboxImage =
            document.getElementById(
                "galleryLightboxImage"
            );


        const lightboxTitle =
            document.getElementById(
                "galleryLightboxTitle"
            );


        const lightboxDate =
            document.getElementById(
                "galleryLightboxDate"
            );


        const closeButton =
            document.getElementById(
                "galleryClose"
            );


        const prevButton =
            document.getElementById(
                "galleryPrev"
            );


        const nextButton =
            document.getElementById(
                "galleryNext"
            );


        /* =========================================================
           DATA GALLERY
        ========================================================== */

        let galleryPhotos = [];


        let currentIndex = 0;


        /* =========================================================
           FORMAT TANGGAL
        ========================================================== */

        function formatDate(
            dateString
        ) {

            if (
                !dateString
            ) {

                return "";

            }


            const date =
                new Date(
                    dateString
                );


            if (
                Number.isNaN(
                    date.getTime()
                )
            ) {

                return "";

            }


            return date.toLocaleDateString(

                "id-ID",

                {

                    day:
                        "numeric",

                    month:
                        "long",

                    year:
                        "numeric"

                }

            );

        }


        /* =========================================================
           ESCAPE HTML
        ========================================================== */

        function escapeHTML(
            value
        ) {

            return String(
                value || ""
            )

                .replace(
                    /&/g,
                    "&amp;"
                )

                .replace(
                    /</g,
                    "&lt;"
                )

                .replace(
                    />/g,
                    "&gt;"
                )

                .replace(
                    /"/g,
                    "&quot;"
                )

                .replace(
                    /'/g,
                    "&#039;"
                );

        }


        /* =========================================================
           LOADING
        ========================================================== */

        function showLoading() {

            if (
                !postsContainer
            ) {

                return;

            }


            if (
                pageName ===
                "gallery"
            ) {

                postsContainer.innerHTML = `

                    <div class="cloud-loading">

                        <div class="cloud-loading-icon">
                            ☁️
                        </div>

                        <strong>
                            Sedang mengambil kenangan...
                        </strong>

                    </div>

                `;

            }

            else {

                postsContainer.innerHTML = `

                    <div class="cloud-loading">

                        <div class="cloud-loading-icon">
                            ✨
                        </div>

                        <strong>
                            Sedang mengambil postingan...
                        </strong>

                    </div>

                `;

            }

        }


        /* =========================================================
           EMPTY GALLERY
        ========================================================== */

        function showEmptyGallery() {

            postsContainer.innerHTML = `

                <div class="cloud-empty">

                    <div class="cloud-empty-icon">
                        📸
                    </div>

                    <h3>
                        Belum ada kenangan
                    </h3>

                    <p>
                        Foto kegiatan sekolah
                        akan segera muncul di sini 💕
                    </p>

                </div>

            `;

        }


        /* =========================================================
           EMPTY POSTS
        ========================================================== */

        function showEmptyPosts() {

            postsContainer.innerHTML = `

                <div class="cloud-empty">

                    <div class="cloud-empty-icon">
                        ✨
                    </div>

                    <h3>
                        Belum ada postingan
                    </h3>

                    <p>
                        Postingan untuk halaman ini
                        akan segera muncul.
                    </p>

                </div>

            `;

        }


        /* =========================================================
           ERROR
        ========================================================== */

        function showError() {

            postsContainer.innerHTML = `

                <div class="cloud-empty">

                    <div class="cloud-empty-icon">
                        ☁️
                    </div>

                    <h3>
                        Postingan belum dapat dimuat
                    </h3>

                    <p>
                        Silakan refresh halaman
                        dan coba lagi.
                    </p>

                </div>

            `;

        }


        /* =========================================================
           LOAD POSTS
        ========================================================== */

        async function loadPosts() {

            if (
                !postsContainer
            ) {

                return;

            }


            if (
                !pageName
            ) {

                return;

            }


            showLoading();


            let query =
                supabaseClient

                    .from(
                        "posts"
                    )

                    .select(

                        `
                        id,
                        title,
                        content,
                        image_url,
                        page_name,
                        created_at
                        `

                    )

                    .eq(

                        "page_name",

                        pageName

                    )

                    .order(

                        "created_at",

                        {

                            ascending:
                                false

                        }

                    );


            /* =====================================================
               KHUSUS GALLERY

               Hanya ambil postingan
               yang mempunyai gambar
            ===================================================== */

            if (
                pageName ===
                "gallery"
            ) {

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

            } =
                await query;


            /* =====================================================
               ERROR
            ===================================================== */

            if (
                error
            ) {

                console.error(

                    "Gagal mengambil postingan:",

                    error

                );


                showError();


                return;

            }


            const posts =
                data || [];


            /* =====================================================
               GALLERY DATA
            ===================================================== */

            if (
                pageName ===
                "gallery"
            ) {

                galleryPhotos =
                    posts;

            }


            /* =====================================================
               EMPTY
            ===================================================== */

            if (
                !posts.length
            ) {

                if (
                    pageName ===
                    "gallery"
                ) {

                    showEmptyGallery();

                }

                else {

                    showEmptyPosts();

                }


                return;

            }


            /* =====================================================
               RENDER
            ===================================================== */

            if (
                pageName ===
                "gallery"
            ) {

                renderGallery();

            }

            else {

                renderPosts(
                    posts
                );

            }

        }


        /* =========================================================
           RENDER NORMAL POSTS
        ========================================================== */

        function renderPosts(
            posts
        ) {

            postsContainer.innerHTML =
                "";


            const grid =
                document.createElement(
                    "div"
                );


            grid.className =
                "posts-grid";


            posts.forEach(

                function (
                    post,
                    index
                ) {


                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "post-card";


                    /*
                     * Animation tambahan.
                     *
                     * Tidak mengganggu CSS lama.
                     */

                    card.style.opacity =
                        "0";


                    card.style.transform =
                        "translateY(35px)";


                    card.style.transition =
                        `
                        opacity .7s ease,
                        transform .7s ease
                        `;


                    card.style.transitionDelay =
                        (
                            index % 6
                        ) * 100
                        + "ms";


                    /* =============================================
                       IMAGE
                    ============================================== */

                    const imageHTML =

                        post.image_url

                            ?

                            `

                            <div
                                class="post-card-image"
                            >

                                <img

                                    src="${escapeHTML(
                                        post.image_url
                                    )}"

                                    alt="${escapeHTML(
                                        post.title ||
                                        "Postingan"
                                    )}"

                                    loading="lazy"

                                >

                            </div>

                            `

                            :

                            "";


                    /* =============================================
                       CONTENT
                    ============================================== */

                    card.innerHTML = `

                        ${imageHTML}


                        <div
                            class="post-card-content"
                        >


                            <span
                                class="post-card-date"
                            >

                                ${formatDate(
                                    post.created_at
                                )}

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


                    grid.appendChild(
                        card
                    );


                    /* =============================================
                       REVEAL
                    ============================================== */

                    requestAnimationFrame(
                        function () {

                            requestAnimationFrame(
                                function () {

                                    card.style.opacity =
                                        "1";


                                    card.style.transform =
                                        "translateY(0)";

                                }
                            );

                        }
                    );


                }

            );


            postsContainer.appendChild(
                grid
            );

        }


        /* =========================================================
           RENDER GALLERY
        ========================================================== */

        function renderGallery() {

            postsContainer.innerHTML =
                "";


            const grid =
                document.createElement(
                    "div"
                );


            grid.className =
                "cloud-photo-grid";


            galleryPhotos.forEach(

                function (
                    photo,
                    index
                ) {


                    const card =
                        document.createElement(
                            "article"
                        );


                    card.className =
                        "cloud-photo-card";


                    /* =============================================
                       POLAROID
                    ============================================== */

                    card.innerHTML = `


                        <!-- PIN -->

                        <div
                            class="cloud-photo-pin"
                        ></div>


                        <!-- IMAGE -->

                        <div
                            class="cloud-photo-image"
                        >


                            <img

                                src="${escapeHTML(
                                    photo.image_url
                                )}"

                                alt="${escapeHTML(

                                    photo.title ||

                                    "Momen Bahagia"

                                )}"

                                loading="lazy"

                            >


                            <div
                                class="cloud-photo-shine"
                            ></div>


                        </div>


                        <!-- INFO -->

                        <div
                            class="cloud-photo-info"
                        >


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


                    /* =============================================
                       CLICK PHOTO
                    ============================================== */

                    card.addEventListener(

                        "click",

                        function () {

                            openLightbox(
                                index
                            );

                        }

                    );


                    grid.appendChild(
                        card
                    );


                }

            );


            postsContainer.appendChild(
                grid
            );

        }


        /* =========================================================
           OPEN LIGHTBOX
        ========================================================== */

        function openLightbox(
            index
        ) {

            if (
                !galleryPhotos.length
            ) {

                return;

            }


            if (
                !lightbox
            ) {

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
                galleryPhotos[
                    currentIndex
                ];


            if (
                !photo
            ) {

                return;

            }


            if (
                lightboxImage
            ) {

                /*
                 * Reset animasi
                 */

                lightboxImage.style.opacity =
                    "0";


                lightboxImage.style.transform =
                    "scale(.96)";


                lightboxImage.src =
                    photo.image_url ||
                    "";


                lightboxImage.alt =

                    photo.title ||

                    "Foto Gallery";


                lightboxImage.onload =
                    function () {

                        lightboxImage.style.transition =
                            `
                            opacity .35s ease,
                            transform .35s ease
                            `;


                        lightboxImage.style.opacity =
                            "1";


                        lightboxImage.style.transform =
                            "scale(1)";

                    };

            }


            if (
                lightboxTitle
            ) {

                lightboxTitle.textContent =

                    photo.title ||

                    "Momen Bahagia";

            }


            if (
                lightboxDate
            ) {

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

            if (
                !lightbox
            ) {

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
           PREVIOUS PHOTO
        ========================================================== */

        function showPrevious() {

            if (
                !galleryPhotos.length
            ) {

                return;

            }


            currentIndex--;


            if (
                currentIndex < 0
            ) {

                currentIndex =
                    galleryPhotos.length - 1;

            }


            updateLightbox();

        }


        /* =========================================================
           NEXT PHOTO
        ========================================================== */

        function showNext() {

            if (
                !galleryPhotos.length
            ) {

                return;

            }


            currentIndex++;


            if (
                currentIndex >=
                galleryPhotos.length
            ) {

                currentIndex =
                    0;

            }


            updateLightbox();

        }


        /* =========================================================
           CLOSE BUTTON
        ========================================================== */

        if (
            closeButton
        ) {

            closeButton.addEventListener(

                "click",

                closeLightbox

            );

        }


        /* =========================================================
           PREVIOUS BUTTON
        ========================================================== */

        if (
            prevButton
        ) {

            prevButton.addEventListener(

                "click",

                showPrevious

            );

        }


        /* =========================================================
           NEXT BUTTON
        ========================================================== */

        if (
            nextButton
        ) {

            nextButton.addEventListener(

                "click",

                showNext

            );

        }


        /* =========================================================
           CLICK BACKGROUND CLOSE
        ========================================================== */

        if (
            lightbox
        ) {

            lightbox.addEventListener(

                "click",

                function (
                    event
                ) {

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
           SWIPE SUPPORT MOBILE
        ========================================================== */

        let touchStartX = 0;

        let touchEndX = 0;


        if (
            lightbox
        ) {

            lightbox.addEventListener(

                "touchstart",

                function (
                    event
                ) {

                    touchStartX =
                        event.changedTouches[0]
                            .screenX;

                },

                {
                    passive:
                        true
                }

            );


            lightbox.addEventListener(

                "touchend",

                function (
                    event
                ) {

                    touchEndX =
                        event.changedTouches[0]
                            .screenX;


                    handleSwipe();

                },

                {
                    passive:
                        true
                }

            );

        }


        function handleSwipe() {

            const distance =
                touchEndX -
                touchStartX;


            if (
                Math.abs(
                    distance
                ) < 50
            ) {

                return;

            }


            if (
                distance > 0
            ) {

                showPrevious();

            }

            else {

                showNext();

            }

        }


        /* =========================================================
           KEYBOARD
        ========================================================== */

        document.addEventListener(

            "keydown",

            function (
                event
            ) {


                if (
                    !lightbox
                ) {

                    return;

                }


                if (
                    !lightbox.classList.contains(
                        "active"
                    )
                ) {

                    return;

                }


                /* ESC */

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeLightbox();

                }


                /* LEFT */

                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    showPrevious();

                }


                /* RIGHT */

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    showNext();

                }


            }

        );


        /* =========================================================
           REALTIME SUPABASE
        ========================================================== */

        if (
            pageName
        ) {

            supabaseClient

                .channel(

                    `posts-realtime-${pageName}`

                )

                .on(

                    "postgres_changes",

                    {

                        event:
                            "*",

                        schema:
                            "public",

                        table:
                            "posts"

                    },

                    function (
                        payload
                    ) {


                        const changedPage =

                            payload.new?.page_name ||

                            payload.old?.page_name;


                        /*
                         * Refresh hanya jika
                         * postingan milik halaman ini.
                         */

                        if (

                            changedPage ===
                            pageName

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


    }
);
