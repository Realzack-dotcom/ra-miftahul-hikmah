/* =====================================================
   FORCE PAGE TO START AT TOP
   ===================================================== */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);


/* =====================================================
   MAIN SCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FORCE TOP
    ========================== */

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });


    /* =========================
       ACTIVE NAVBAR
    ========================== */

    const path =
        location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".rainbow-nav a").forEach(function (a) {

        const href = a.getAttribute("href");

        if (href === path) {
            a.classList.add("active");
        }

    });


    /* =========================
       ANIMATION REVEAL
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }

                });

            }, {
                threshold: 0.12
            });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    /* =========================
       PAGE NAVIGATION
       LANGSUNG PINDAH
    ========================== */

    document.querySelectorAll("a[href]").forEach(function (a) {

        const href = a.getAttribute("href");

        if (
            href &&
            href.endsWith(".html") &&
            !href.startsWith("http") &&
            !href.startsWith("#")
        ) {

            a.addEventListener("click", function () {

                /*
                   Simpan posisi scroll ke paling atas
                   sebelum pindah halaman.
                */

                window.scrollTo(0, 0);

                window.location.href = href;

            });

        }

    });


    /* =========================
       READ MORE MODAL
    ========================== */

    const modal =
        document.querySelector("#modal");

    const modalTitle =
        document.querySelector("#mt");

    const modalText =
        document.querySelector("#mx");


    document.querySelectorAll(".more").forEach(function (button) {

        button.addEventListener("click", function () {

            if (!modal) return;

            if (modalTitle) {
                modalTitle.textContent =
                    button.dataset.title || "";
            }

            if (modalText) {
                modalText.textContent =
                    button.dataset.text || "";
            }

            modal.classList.add("show");

        });

    });


    /* =========================
       GALLERY / OTHER MODAL
    ========================== */

    document.querySelectorAll(".g").forEach(function (item) {

        item.addEventListener("click", function () {

            if (!modal) return;

            if (modalTitle) {
                modalTitle.textContent =
                    item.dataset.title || "";
            }

            if (modalText) {
                modalText.textContent =
                    item.dataset.text || "";
            }

            modal.classList.add("show");

        });

    });


    /* =========================
       CLOSE MODAL
    ========================== */

    const closeButton =
        document.querySelector(".close");

    if (closeButton && modal) {

        closeButton.addEventListener("click", function () {

            modal.classList.remove("show");

        });

    }


    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                modal.classList.remove("show");
            }

        });

    }


    /* =========================
       FAQ
    ========================== */

    document.querySelectorAll(".q button")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const parent =
                    button.parentElement;

                parent.classList.toggle("open");

                const span =
                    button.querySelector("span");

                if (span) {

                    span.textContent =
                        parent.classList.contains("open")
                            ? "−"
                            : "+";

                }

            });

        });


    /* =========================
       CONTACT FORM
    ========================== */

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            contactForm.reset();

            const toast =
                document.querySelector(".toast");

            if (toast) {

                toast.classList.add("show");

                setTimeout(function () {

                    toast.classList.remove("show");

                }, 3000);

            }

        });

    }


    /* =========================
       CLOSE MODAL WITH ESC
    ========================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && modal) {
            modal.classList.remove("show");
        }

    });

});


/* =====================================================
   FORCE TOP AFTER PAGE LOAD
   ===================================================== */

window.addEventListener("load", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });

});


/* =====================================================
   FORCE TOP WHEN BROWSER RESTORES PAGE
   ===================================================== */

window.addEventListener("pageshow", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });

    /*
       Timeout kecil untuk mengalahkan
       browser scroll restoration.
    */

    setTimeout(function () {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

    }, 50);

    setTimeout(function () {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });

    }, 300);

});