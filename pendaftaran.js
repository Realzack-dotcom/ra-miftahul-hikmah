<!DOCTYPE html>
<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Pendaftaran Online RA Miftahul Hikmah"
    >

    <title>
        Pendaftaran Online | RA Miftahul Hikmah
    </title>


    <!-- GOOGLE FONT -->

    <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
    >

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
    >


<style>


/* =====================================================
   RESET
===================================================== */

* {

    box-sizing:
        border-box;

}


html {

    scroll-behavior:
        smooth;

}


body {

    margin:
        0;

    overflow-x:
        hidden;

    font-family:
        "Nunito",
        sans-serif;

    color:
        #342d4c;

    background:
        #f7f7fb;

}


button,
input,
select,
textarea {

    font-family:
        inherit;

}


a {

    -webkit-tap-highlight-color:
        transparent;

}


/* =====================================================
   CONTAINER
===================================================== */

.container {

    width:
        min(
            1180px,
            calc(100% - 32px)
        );

    margin:
        auto;

}


/* =====================================================
   BACKGROUND
===================================================== */

.page-bg {

    position:
        fixed;

    inset:
        0;

    z-index:
        -2;

    pointer-events:
        none;

    overflow:
        hidden;

}


.page-bg::before {

    content:
        "";

    position:
        absolute;

    width:
        450px;

    height:
        450px;

    top:
        -150px;

    left:
        -150px;

    border-radius:
        50%;

    background:
        rgba(255,174,210,.25);

    filter:
        blur(80px);

}


.page-bg::after {

    content:
        "";

    position:
        absolute;

    width:
        500px;

    height:
        500px;

    right:
        -220px;

    bottom:
        -200px;

    border-radius:
        50%;

    background:
        rgba(150,200,255,.22);

    filter:
        blur(90px);

}


/* =====================================================
   HEADER
===================================================== */

.header {

    position:
        sticky;

    top:
        0;

    z-index:
        100;

    background:
        rgba(255,255,255,.88);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid rgba(100,80,140,.07);

}


.header-inner {

    min-height:
        74px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    gap:
        15px;

}


.brand {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    text-decoration:
        none;

    color:
        #342d4c;

}


.brand-logo {

    width:
        48px;

    height:
        48px;

    display:
        grid;

    place-items:
        center;

    flex:
        0 0 auto;

    border-radius:
        16px;

    font-size:
        24px;

    background:
        linear-gradient(
            135deg,
            #ffe29a,
            #ffc9dc,
            #cfefff
        );

    box-shadow:
        0 10px 25px rgba(239,79,130,.16);

}


.brand h1 {

    margin:
        0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        19px;

    line-height:
        1;

}


.brand h1 span {

    color:
        #ef4f82;

}


.brand p {

    margin:
        5px 0 0;

    color:
        #8a8294;

    font-size:
        9px;

}


.status-link {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    padding:
        11px 15px;

    border-radius:
        14px;

    text-decoration:
        none;

    color:
        white;

    font-size:
        11px;

    font-weight:
        900;

    background:
        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

    box-shadow:
        0 10px 22px rgba(123,108,255,.20);

}


/* =====================================================
   NAV
===================================================== */

.nav {

    position:
        sticky;

    top:
        74px;

    z-index:
        90;

    background:
        rgba(255,255,255,.94);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid #f0edf5;

}


.nav-inner {

    width:
        min(
            1180px,
            calc(100% - 20px)
        );

    margin:
        auto;

    display:
        flex;

    align-items:
        center;

    gap:
        8px;

    padding:
        8px 0;

    overflow-x:
        auto;

    scrollbar-width:
        none;

}


.nav-inner::-webkit-scrollbar {

    display:
        none;

}


.nav a {

    flex:
        0 0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        6px;

    padding:
        10px 14px;

    border-radius:
        13px;

    text-decoration:
        none;

    color:
        #766e80;

    font-size:
        11px;

    font-weight:
        900;

}


.nav a.active {

    color:
        white;

    background:
        linear-gradient(
            135deg,
            #ef4f82,
            #ff7ca6
        );

    box-shadow:
        0 8px 18px rgba(239,79,130,.20);

}


/* =====================================================
   MAIN
===================================================== */

.main {

    padding:
        28px 0 60px;

}


/* =====================================================
   BLOG HERO
===================================================== */

.blog-hero {

    position:
        relative;

    overflow:
        hidden;

    min-height:
        420px;

    display:
        flex;

    align-items:
        flex-end;

    padding:
        40px;

    border-radius:
        32px;

    background:

        linear-gradient(
            135deg,
            rgba(123,108,255,.95),
            rgba(239,79,130,.90),
            rgba(255,145,100,.85)
        );

    box-shadow:
        0 25px 60px rgba(100,60,120,.20);

}


.blog-hero::before {

    content:
        "🌈";

    position:
        absolute;

    top:
        -30px;

    right:
        5%;

    font-size:
        180px;

    opacity:
        .16;

    transform:
        rotate(-15deg);

}


.blog-hero::after {

    content:
        "🎒";

    position:
        absolute;

    left:
        5%;

    top:
        30px;

    font-size:
        70px;

    opacity:
        .18;

}


.hero-content {

    position:
        relative;

    z-index:
        2;

    max-width:
        700px;

    color:
        white;

}


.hero-category {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        7px;

    padding:
        9px 14px;

    border-radius:
        50px;

    background:
        rgba(255,255,255,.18);

    backdrop-filter:
        blur(10px);

    font-size:
        10px;

    font-weight:
        900;

}


.hero-content h2 {

    margin:
        17px 0 12px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        clamp(40px,7vw,68px);

    line-height:
        1;

}


.hero-content p {

    max-width:
        600px;

    margin:
        0;

    color:
        rgba(255,255,255,.90);

    font-size:
        14px;

    line-height:
        1.8;

}


.hero-meta {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        10px;

    margin-top:
        22px;

}


.hero-meta span {

    padding:
        8px 12px;

    border-radius:
        50px;

    background:
        rgba(255,255,255,.16);

    font-size:
        10px;

    font-weight:
        800;

}


/* =====================================================
   BLOG LAYOUT
===================================================== */

.blog-layout {

    display:
        grid;

    grid-template-columns:
        minmax(0,1.5fr)
        minmax(280px,.75fr);

    gap:
        25px;

    margin-top:
        25px;

}


/* =====================================================
   ARTICLE CARD
===================================================== */

.article-card {

    overflow:
        hidden;

    border-radius:
        26px;

    background:
        rgba(255,255,255,.90);

    border:
        1px solid rgba(255,255,255,.90);

    box-shadow:
        0 18px 45px rgba(60,40,90,.08);

}


.article-head {

    padding:
        25px 25px 0;

}


.article-tag {

    display:
        inline-flex;

    padding:
        7px 12px;

    border-radius:
        30px;

    background:
        #f1edff;

    color:
        #7b63bd;

    font-size:
        10px;

    font-weight:
        900;

}


.article-head h2 {

    margin:
        13px 0 8px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        31px;

    line-height:
        1.1;

}


.article-head p {

    margin:
        0;

    color:
        #837a8d;

    font-size:
        12px;

    line-height:
        1.8;

}


.article-body {

    padding:
        25px;

}


/* =====================================================
   FLOW BLOG
===================================================== */

.flow-grid {

    display:
        grid;

    grid-template-columns:
        repeat(4,1fr);

    gap:
        10px;

}


.flow-item {

    position:
        relative;

    min-height:
        130px;

    padding:
        15px 10px;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    text-align:
        center;

    border-radius:
        18px;

    background:
        #faf9ff;

}


.flow-icon {

    width:
        45px;

    height:
        45px;

    display:
        grid;

    place-items:
        center;

    margin-bottom:
        8px;

    border-radius:
        15px;

    font-size:
        22px;

    background:
        white;

    box-shadow:
        0 7px 17px rgba(60,40,90,.07);

}


.flow-item b {

    font-size:
        10px;

}


.flow-item small {

    margin-top:
        5px;

    color:
        #938a9b;

    font-size:
        8px;

}


/* =====================================================
   FORM
===================================================== */

.form-card {

    margin-top:
        25px;

    padding:
        25px;

    border-radius:
        26px;

    background:
        rgba(255,255,255,.92);

    box-shadow:
        0 18px 45px rgba(60,40,90,.08);

}


.form-card-header {

    display:
        flex;

    align-items:
        center;

    gap:
        13px;

    margin-bottom:
        20px;

}


.form-card-icon {

    width:
        55px;

    height:
        55px;

    display:
        grid;

    place-items:
        center;

    flex:
        0 0 auto;

    border-radius:
        18px;

    font-size:
        26px;

    background:
        linear-gradient(
            135deg,
            #fff0f6,
            #eeeaff
        );

}


.form-card-header h2 {

    margin:
        0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        25px;

}


.form-card-header p {

    margin:
        3px 0 0;

    color:
        #918898;

    font-size:
        10px;

}


/* =====================================================
   FORM SECTION
===================================================== */

.form-section {

    margin-bottom:
        16px;

    padding:
        18px;

    border-radius:
        20px;

    background:
        #fbfaff;

    border:
        1px solid #f0edf6;

}


.form-section-title {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    margin-bottom:
        17px;

}


.form-number {

    width:
        34px;

    height:
        34px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        11px;

    color:
        white;

    font-size:
        10px;

    font-weight:
        900;

    background:
        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

}


.form-section-title h3 {

    margin:
        0;

    font-size:
        13px;

}


/* =====================================================
   INPUT
===================================================== */

.form-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:
        14px;

}


.form-group {

    display:
        grid;

    gap:
        7px;

}


.form-group.full {

    grid-column:
        1 / -1;

}


.form-group label {

    font-size:
        10px;

    font-weight:
        900;

    color:
        #5f566c;

}


.required {

    color:
        #ef4f82;

}


.form-group input,
.form-group select,
.form-group textarea {

    width:
        100%;

    min-height:
        48px;

    padding:
        12px 13px;

    border:
        1px solid #e8e3ee;

    outline:
        none;

    border-radius:
        14px;

    background:
        white;

    color:
        #433b4d;

    font-size:
        11px;

    transition:
        .25s ease;

}


.form-group textarea {

    min-height:
        105px;

    resize:
        vertical;

}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    border-color:
        #a47fff;

    box-shadow:
        0 0 0 4px rgba(164,127,255,.10);

}


/* =====================================================
   GENDER
===================================================== */

.gender-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:
        10px;

}


.gender-option {

    cursor:
        pointer;

}


.gender-option input {

    display:
        none;

}


.gender-box {

    min-height:
        48px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    border:
        1px solid #e8e3ee;

    border-radius:
        14px;

    background:
        white;

    color:
        #756c7c;

    font-size:
        10px;

    font-weight:
        900;

    transition:
        .25s ease;

}


.gender-option input:checked
+
.gender-box {

    border-color:
        #a47fff;

    background:
        #f5f2ff;

    color:
        #7259bd;

}


/* =====================================================
   AGREEMENT
===================================================== */

.agreement {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        10px;

    margin-top:
        15px;

    padding:
        14px;

    border-radius:
        16px;

    background:
        #fff9ed;

    color:
        #776e64;

    font-size:
        10px;

    line-height:
        1.7;

}


.agreement input {

    width:
        18px;

    height:
        18px;

    flex:
        0 0 auto;

    accent-color:
        #ef4f82;

}


/* =====================================================
   BUTTON
===================================================== */

.submit-button {

    width:
        100%;

    min-height:
        55px;

    border:
        none;

    cursor:
        pointer;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    margin-top:
        16px;

    border-radius:
        16px;

    color:
        white;

    font-size:
        13px;

    font-weight:
        900;

    background:
        linear-gradient(
            135deg,
            #ef4f82,
            #ff7ca7
        );

    box-shadow:
        0 14px 28px rgba(239,79,130,.23);

    transition:
        .3s ease;

}


.submit-button:hover {

    transform:
        translateY(-3px);

}


.submit-button:disabled {

    opacity:
        .7;

    cursor:
        not-allowed;

}


/* =====================================================
   SUCCESS
===================================================== */

.success-box {

    display:
        none;

    margin-top:
        20px;

    padding:
        25px;

    text-align:
        center;

    border-radius:
        22px;

    background:
        linear-gradient(
            135deg,
            #effff5,
            #f3f0ff
        );

    border:
        1px solid #d8f3e1;

}


.success-box.show {

    display:
        block;

    animation:
        successPop .5s ease;

}


@keyframes successPop {

    from {

        opacity:
            0;

        transform:
            scale(.92);

    }

    to {

        opacity:
            1;

        transform:
            scale(1);

    }

}


.success-icon {

    font-size:
        50px;

}


.success-box h3 {

    margin:
        10px 0 5px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        25px;

}


.success-box p {

    margin:
        0;

    color:
        #687466;

    font-size:
        11px;

    line-height:
        1.7;

}


.registration-code {

    margin:
        18px auto;

    padding:
        18px;

    max-width:
        350px;

    border-radius:
        18px;

    background:
        white;

    box-shadow:
        0 10px 25px rgba(60,40,90,.08);

}


.registration-code small {

    display:
        block;

    margin-bottom:
        7px;

    color:
        #948a9c;

    font-size:
        9px;

}


.registration-code b {

    display:
        block;

    color:
        #7b63bd;

    font-size:
        23px;

    letter-spacing:
        2px;

}


.success-actions {

    display:
        grid;

    gap:
        10px;

    max-width:
        400px;

    margin:
        auto;

}


.whatsapp-button {

    min-height:
        52px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    border-radius:
        15px;

    text-decoration:
        none;

    color:
        white;

    font-size:
        11px;

    font-weight:
        900;

    background:
        linear-gradient(
            135deg,
            #25d366,
            #55e58c
        );

}


.check-button {

    min-height:
        52px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    border-radius:
        15px;

    text-decoration:
        none;

    color:
        #695a7a;

    font-size:
        11px;

    font-weight:
        900;

    background:
        white;

    border:
        1px solid #e9e4f0;

}


/* =====================================================
   SIDEBAR
===================================================== */

.sidebar {

    display:
        grid;

    gap:
        18px;

}


.side-card {

    padding:
        22px;

    border-radius:
        24px;

    background:
        rgba(255,255,255,.90);

    box-shadow:
        0 16px 38px rgba(60,40,90,.08);

}


.side-card h3 {

    margin:
        0 0 10px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        22px;

}


.side-card h3 span {

    color:
        #ef4f82;

}


.side-card p {

    margin:
        0;

    color:
        #817889;

    font-size:
        11px;

    line-height:
        1.8;

}


/* =====================================================
   BLOG STEPS
===================================================== */

.blog-steps {

    display:
        grid;

    gap:
        10px;

    margin-top:
        15px;

}


.blog-step {

    display:
        flex;

    align-items:
        center;

    gap:
        11px;

    padding:
        11px;

    border-radius:
        16px;

    background:
        #faf9ff;

}


.blog-step-icon {

    width:
        42px;

    height:
        42px;

    display:
        grid;

    place-items:
        center;

    flex:
        0 0 auto;

    border-radius:
        14px;

    background:
        white;

    font-size:
        19px;

    box-shadow:
        0 7px 17px rgba(60,40,90,.06);

}


.blog-step b {

    display:
        block;

    font-size:
        10px;

}


.blog-step small {

    display:
        block;

    margin-top:
        3px;

    color:
        #9a91a1;

    font-size:
        8px;

}


/* =====================================================
   STATUS CARD
===================================================== */

.status-card {

    background:
        linear-gradient(
            135deg,
            #f1edff,
            #fff0f6,
            #ecf8ff
        );

}


.status-card-icon {

    font-size:
        45px;

    margin-bottom:
        8px;

}


.status-button {

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    margin-top:
        15px;

    min-height:
        48px;

    border-radius:
        14px;

    text-decoration:
        none;

    color:
        white;

    font-size:
        10px;

    font-weight:
        900;

    background:
        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

}


/* =====================================================
   INFO LIST
===================================================== */

.info-list {

    display:
        grid;

    gap:
        10px;

    margin-top:
        15px;

}


.info-item {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        9px;

    padding:
        11px;

    border-radius:
        15px;

    background:
        #f9fcff;

}


.info-item span {

    font-size:
        18px;

}


.info-item b {

    display:
        block;

    font-size:
        10px;

}


.info-item small {

    display:
        block;

    margin-top:
        3px;

    color:
        #908797;

    font-size:
        8px;

    line-height:
        1.5;

}


/* =====================================================
   MOBILE BLOG NAV
===================================================== */

.mobile-blog-menu {

    display:
        none;

}


/* =====================================================
   FOOTER
===================================================== */

.footer {

    padding:
        40px 0 20px;

    background:
        linear-gradient(
            135deg,
            #302843,
            #433657
        );

    color:
        white;

}


.footer-grid {

    display:
        grid;

    grid-template-columns:
        repeat(3,1fr);

    gap:
        30px;

}


.footer h3 {

    margin:
        0 0 10px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        20px;

}


.footer h3 span {

    color:
        #ff91b7;

}


.footer p {

    margin:
        0 0 7px;

    color:
        #c8c0d4;

    font-size:
        11px;

    line-height:
        1.7;

}


.footer a {

    color:
        #c8c0d4;

    text-decoration:
        none;

}


.copyright {

    margin-top:
        30px;

    padding-top:
        18px;

    text-align:
        center;

    border-top:
        1px solid rgba(255,255,255,.08);

    color:
        #aaa0bb;

    font-size:
        10px;

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 768px) {


    /* CONTAINER */

    .container {

        width:
            calc(100% - 24px);

    }


    /* HEADER */

    .header-inner {

        min-height:
            66px;

    }


    .brand-logo {

        width:
            40px;

        height:
            40px;

        border-radius:
            13px;

        font-size:
            20px;

    }


    .brand h1 {

        font-size:
            15px;

    }


    .brand p {

        font-size:
            8px;

        white-space:
            nowrap;

    }


    .status-link {

        padding:
            9px 10px;

        border-radius:
            12px;

        font-size:
            9px;

    }


    /* NAV */

    .nav {

        top:
            66px;

    }


    .nav-inner {

        gap:
            5px;

        padding:
            7px 0;

    }


    .nav a {

        padding:
            9px 12px;

        font-size:
            9px;

    }


    /* MAIN */

    .main {

        padding:
            15px 0 40px;

    }


    /* HERO BLOG */

    .blog-hero {

        min-height:
            390px;

        padding:
            24px 20px;

        border-radius:
            25px;

        align-items:
            flex-end;

    }


    .blog-hero::before {

        top:
            -5px;

        right:
            -15px;

        font-size:
            125px;

    }


    .blog-hero::after {

        top:
            22px;

        left:
            20px;

        font-size:
            45px;

    }


    .hero-category {

        padding:
            7px 11px;

        font-size:
            8px;

    }


    .hero-content h2 {

        margin:
            13px 0 10px;

        font-size:
            42px;

        line-height:
            .95;

    }


    .hero-content p {

        font-size:
            11px;

        line-height:
            1.7;

    }


    .hero-meta {

        gap:
            6px;

        margin-top:
            16px;

    }


    .hero-meta span {

        padding:
            7px 9px;

        font-size:
            8px;

    }


    /* MOBILE BLOG MENU */

    .mobile-blog-menu {

        display:
            flex;

        gap:
            8px;

        margin-top:
            12px;

        overflow-x:
            auto;

        scrollbar-width:
            none;

    }


    .mobile-blog-menu::-webkit-scrollbar {

        display:
            none;

    }


    .mobile-blog-menu a {

        flex:
            0 0 auto;

        padding:
            10px 13px;

        border-radius:
            14px;

        background:
            white;

        box-shadow:
            0 8px 20px rgba(60,40,90,.07);

        text-decoration:
            none;

        color:
            #6d6478;

        font-size:
            9px;

        font-weight:
            900;

    }


    /* BLOG LAYOUT */

    .blog-layout {

        display:
            flex;

        flex-direction:
            column;

        gap:
            15px;

        margin-top:
            15px;

    }


    /* ARTICLE */

    .article-card {

        border-radius:
            21px;

    }


    .article-head {

        padding:
            20px 17px 0;

    }


    .article-tag {

        font-size:
            8px;

    }


    .article-head h2 {

        margin:
            10px 0 6px;

        font-size:
            25px;

    }


    .article-head p {

        font-size:
            10px;

        line-height:
            1.7;

    }


    .article-body {

        padding:
            17px;

    }


    /* FLOW MOBILE BLOG */

    .flow-grid {

        display:
            flex;

        overflow-x:
            auto;

        gap:
            10px;

        padding-bottom:
            5px;

        scrollbar-width:
            none;

    }


    .flow-grid::-webkit-scrollbar {

        display:
            none;

    }


    .flow-item {

        flex:
            0 0 145px;

        min-height:
            145px;

        border-radius:
            18px;

    }


    .flow-icon {

        width:
            43px;

        height:
            43px;

        font-size:
            20px;

    }


    .flow-item b {

        font-size:
            9px;

    }


    .flow-item small {

        font-size:
            8px;

    }


    /* FORM */

    .form-card {

        margin-top:
            15px;

        padding:
            13px;

        border-radius:
            21px;

    }


    .form-card-header {

        gap:
            10px;

        margin-bottom:
            15px;

        padding:
            4px;

    }


    .form-card-icon {

        width:
            45px;

        height:
            45px;

        border-radius:
            14px;

        font-size:
            21px;

    }


    .form-card-header h2 {

        font-size:
            19px;

    }


    .form-card-header p {

        font-size:
            8px;

    }


    /* FORM SECTION */

    .form-section {

        padding:
            13px;

        margin-bottom:
            11px;

        border-radius:
            17px;

    }


    .form-section-title {

        gap:
            8px;

        margin-bottom:
            13px;

    }


    .form-number {

        width:
            29px;

        height:
            29px;

        border-radius:
            9px;

        font-size:
            8px;

    }


    .form-section-title h3 {

        font-size:
            10px;

    }


    /* INPUT MOBILE */

    .form-grid {

        grid-template-columns:
            1fr;

        gap:
            11px;

    }


    .form-group {

        gap:
            5px;

    }


    .form-group label {

        font-size:
            9px;

    }


    .form-group input,
    .form-group select,
    .form-group textarea {

        min-height:
            46px;

        padding:
            11px;

        border-radius:
            12px;

        font-size:
            10px;

    }


    .form-group textarea {

        min-height:
            90px;

    }


    /* GENDER */

    .gender-grid {

        gap:
            7px;

    }


    .gender-box {

        min-height:
            45px;

        font-size:
            9px;

        border-radius:
            12px;

    }


    /* AGREEMENT */

    .agreement {

        gap:
            7px;

        padding:
            11px;

        margin-top:
            11px;

        border-radius:
            14px;

        font-size:
            8px;

    }


    .agreement input {

        width:
            16px;

        height:
            16px;

    }


    /* BUTTON */

    .submit-button {

        min-height:
            51px;

        margin-top:
            12px;

        border-radius:
            14px;

        font-size:
            11px;

    }


    /* SUCCESS */

    .success-box {

        padding:
            20px 13px;

        border-radius:
            18px;

    }


    .success-icon {

        font-size:
            40px;

    }


    .success-box h3 {

        font-size:
            21px;

    }


    .success-box p {

        font-size:
            9px;

    }


    .registration-code b {

        font-size:
            19px;

    }


    /* SIDEBAR */

    .sidebar {

        display:
            contents;

    }


    .side-card {

        padding:
            17px;

        border-radius:
            21px;

    }


    .side-card h3 {

        font-size:
            20px;

    }


    .side-card p {

        font-size:
            10px;

    }


    /* FOOTER */

    .footer {

        padding:
            30px 0 18px;

    }


    .footer-grid {

        grid-template-columns:
            1fr;

        gap:
            20px;

        text-align:
            center;

    }


}


/* =====================================================
   ANIMATION
===================================================== */

.reveal {

    opacity:
        0;

    transform:
        translateY(25px);

    transition:
        opacity .7s ease,
        transform .7s ease;

}


.reveal.show {

    opacity:
        1;

    transform:
        translateY(0);

}


</style>

</head>


<body>


<div class="page-bg"></div>


<!-- =====================================================
     HEADER
===================================================== -->

<header class="header">

    <div class="container header-inner">


        <a
            href="index.html"
            class="brand"
        >

            <div class="brand-logo">

                🌈

            </div>


            <div>

                <h1>

                    RA Miftahul

                    <span>
                        Hikmah
                    </span>

                </h1>


                <p>

                    Belajar • Bermain • Berprestasi

                </p>

            </div>

        </a>


        <a
            href="status-pendaftaran.html"
            class="status-link"
        >

            📊 Status

        </a>


    </div>

</header>


<!-- =====================================================
     NAVIGATION
===================================================== -->

<nav class="nav">

    <div class="nav-inner">


        <a href="index.html">

            🏠 Home

        </a>


        <a href="about.html">

            👥 About

        </a>


        <a href="programs.html">

            📚 Programs

        </a>


        <a href="blog.html">

            🖍️ Blog

        </a>


        <a
            href="pendaftaran.html"
            class="active"
        >

            📝 Pendaftaran

        </a>


    </div>

</nav>


<!-- =====================================================
     MAIN
===================================================== -->

<main class="main">

    <div class="container">


        <!-- HERO BLOG -->

        <section
            class="blog-hero reveal"
        >


            <div class="hero-content">


                <div class="hero-category">

                    ✨ PENDAFTARAN ONLINE

                </div>


                <h2>

                    Mulai Petualangan
                    Baru Bersama Kami 🌈

                </h2>


                <p>

                    Selamat datang di halaman
                    pendaftaran online RA Miftahul Hikmah.
                    Isi data calon peserta didik,
                    kirim formulir dan dapatkan
                    kode pendaftaran Anda.

                </p>


                <div class="hero-meta">

                    <span>

                        📝 Isi Data

                    </span>


                    <span>

                        🔑 Dapat Kode

                    </span>


                    <span>

                        💬 WhatsApp

                    </span>


                </div>


            </div>


        </section>


        <!-- MOBILE BLOG MENU -->

        <div class="mobile-blog-menu">

            <a href="#cara">

                📖 Cara Daftar

            </a>


            <a href="#formulir">

                📝 Formulir

            </a>


            <a href="#status">

                📊 Status

            </a>


        </div>


        <!-- BLOG LAYOUT -->

        <div class="blog-layout">


            <!-- CONTENT -->

            <div>


                <!-- ARTICLE CARA DAFTAR -->

                <article
                    class="article-card reveal"
                    id="cara"
                >


                    <div class="article-head">


                        <div class="article-tag">

                            📖 PANDUAN PENDAFTARAN

                        </div>


                        <h2>

                            Cara Mendaftar
                            Sangat Mudah ✨

                        </h2>


                        <p>

                            Pendaftaran dibuat sederhana
                            agar orang tua atau wali dapat
                            mendaftarkan buah hati dengan
                            cepat melalui website.

                        </p>


                    </div>


                    <div class="article-body">


                        <div class="flow-grid">


                            <div class="flow-item">

                                <div class="flow-icon">

                                    👶

                                </div>


                                <b>

                                    Isi Data

                                </b>


                                <small>

                                    Data calon siswa

                                </small>


                            </div>


                            <div class="flow-item">

                                <div class="flow-icon">

                                    📤

                                </div>


                                <b>

                                    Kirim

                                </b>


                                <small>

                                    Kirim formulir

                                </small>


                            </div>


                            <div class="flow-item">

                                <div class="flow-icon">

                                    🔑

                                </div>


                                <b>

                                    Kode Daftar

                                </b>


                                <small>

                                    Simpan kode

                                </small>


                            </div>


                            <div class="flow-item">

                                <div class="flow-icon">

                                    💬

                                </div>


                                <b>

                                    WhatsApp

                                </b>


                                <small>

                                    Konfirmasi admin

                                </small>


                            </div>


                        </div>


                    </div>


                </article>


                <!-- FORM -->

                <section
                    class="form-card reveal"
                    id="formulir"
                >


                    <div class="form-card-header">


                        <div class="form-card-icon">

                            🎒

                        </div>


                        <div>

                            <h2>

                                Formulir Pendaftaran

                            </h2>


                            <p>

                                Lengkapi data dengan benar

                            </p>

                        </div>


                    </div>


                    <form id="registrationForm">


                        <!-- DATA ANAK -->

                        <div class="form-section">


                            <div class="form-section-title">


                                <div class="form-number">

                                    01

                                </div>


                                <h3>

                                    👶 Data Calon Peserta Didik

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div class="form-group">

                                    <label>

                                        Nama Lengkap

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        id="namaAnak"
                                        placeholder="Nama lengkap anak"
                                        required
                                    >

                                </div>


                                <div class="form-group">

                                    <label>

                                        Nama Panggilan

                                    </label>


                                    <input
                                        type="text"
                                        placeholder="Contoh: Aisyah"
                                    >

                                </div>


                                <div class="form-group">

                                    <label>

                                        Tempat Lahir

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        placeholder="Contoh: Jakarta"
                                        required
                                    >

                                </div>


                                <div class="form-group">

                                    <label>

                                        Tanggal Lahir

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <input
                                        type="date"
                                        required
                                    >

                                </div>


                                <div class="form-group full">


                                    <label>

                                        Jenis Kelamin

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <div class="gender-grid">


                                        <label
                                            class="gender-option"
                                        >

                                            <input
                                                type="radio"
                                                name="gender"
                                                required
                                            >


                                            <div class="gender-box">

                                                👦 Laki-laki

                                            </div>

                                        </label>


                                        <label
                                            class="gender-option"
                                        >

                                            <input
                                                type="radio"
                                                name="gender"
                                            >


                                            <div class="gender-box">

                                                👧 Perempuan

                                            </div>

                                        </label>


                                    </div>


                                </div>


                            </div>


                        </div>


                        <!-- DATA WALI -->

                        <div class="form-section">


                            <div class="form-section-title">


                                <div class="form-number">

                                    02

                                </div>


                                <h3>

                                    👨‍👩‍👧 Data Orang Tua / Wali

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div class="form-group">

                                    <label>

                                        Nama Orang Tua / Wali

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        id="namaWali"
                                        placeholder="Nama wali"
                                        required
                                    >

                                </div>


                                <div class="form-group">

                                    <label>

                                        Hubungan dengan Anak

                                    </label>


                                    <select>

                                        <option>

                                            Pilih hubungan

                                        </option>


                                        <option>

                                            Ayah

                                        </option>


                                        <option>

                                            Ibu

                                        </option>


                                        <option>

                                            Wali

                                        </option>

                                    </select>

                                </div>


                                <div class="form-group">

                                    <label>

                                        Nomor WhatsApp

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        placeholder="081234567890"
                                        required
                                    >

                                </div>


                                <div class="form-group">

                                    <label>

                                        Email

                                    </label>


                                    <input
                                        type="email"
                                        placeholder="email@gmail.com"
                                    >

                                </div>


                            </div>


                        </div>


                        <!-- ALAMAT -->

                        <div class="form-section">


                            <div class="form-section-title">


                                <div class="form-number">

                                    03

                                </div>


                                <h3>

                                    🏠 Alamat & Informasi

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div class="form-group full">

                                    <label>

                                        Alamat Lengkap

                                        <span class="required">
                                            *
                                        </span>

                                    </label>


                                    <textarea
                                        placeholder="Masukkan alamat lengkap"
                                        required
                                    ></textarea>

                                </div>


                                <div class="form-group">

                                    <label>

                                        Program / Kelas

                                    </label>


                                    <select>

                                        <option>

                                            Pilih program

                                        </option>


                                        <option>

                                            Kelas A

                                        </option>


                                        <option>

                                            Kelas B

                                        </option>


                                        <option>

                                            Konsultasi Admin

                                        </option>

                                    </select>

                                </div>


                                <div class="form-group">

                                    <label>

                                        Tahun Ajaran

                                    </label>


                                    <select>

                                        <option>

                                            2026 / 2027

                                        </option>


                                        <option>

                                            2027 / 2028

                                        </option>

                                    </select>

                                </div>


                            </div>


                        </div>


                        <!-- AGREEMENT -->

                        <label class="agreement">


                            <input
                                type="checkbox"
                                required
                            >


                            <span>

                                Saya menyatakan bahwa data
                                yang saya isi adalah benar
                                dan bersedia dihubungi oleh
                                pihak RA Miftahul Hikmah
                                untuk proses pendaftaran
                                selanjutnya.

                            </span>


                        </label>


                        <!-- SUBMIT -->

                        <button
                            type="submit"
                            class="submit-button"
                        >

                            🚀 Kirim Pendaftaran

                        </button>


                    </form>


                    <!-- SUCCESS -->

                    <div
                        class="success-box"
                        id="successBox"
                    >


                        <div class="success-icon">

                            🎉

                        </div>


                        <h3>

                            Pendaftaran Berhasil!

                        </h3>


                        <p>

                            Simpan kode pendaftaran
                            berikut untuk melakukan
                            pengecekan status.

                        </p>


                        <div class="registration-code">


                            <small>

                                KODE PENDAFTARAN

                            </small>


                            <b id="registrationCode">

                                RA-000000

                            </b>


                        </div>


                        <div class="success-actions">


                            <a
                                href="#"
                                target="_blank"
                                class="whatsapp-button"
                                id="whatsappButton"
                            >

                                💬 Lanjut ke WhatsApp

                            </a>


                            <a
                                href="status-pendaftaran.html"
                                class="check-button"
                            >

                                📊 Cek Status Pendaftaran

                            </a>


                        </div>


                    </div>


                </section>


            </div>


            <!-- SIDEBAR -->

            <aside
                class="sidebar"
            >


                <!-- CARA -->

                <div
                    class="side-card reveal"
                >


                    <h3>

                        Alur

                        <span>
                            Pendaftaran
                        </span>

                    </h3>


                    <p>

                        Ikuti proses pendaftaran
                        berikut dengan mudah.

                    </p>


                    <div class="blog-steps">


                        <div class="blog-step">


                            <div class="blog-step-icon">

                                📝

                            </div>


                            <div>

                                <b>

                                    Isi Formulir

                                </b>


                                <small>

                                    Lengkapi data anak

                                </small>

                            </div>


                        </div>


                        <div class="blog-step">


                            <div class="blog-step-icon">

                                📤

                            </div>


                            <div>

                                <b>

                                    Kirim Data

                                </b>


                                <small>

                                    Kirim pendaftaran

                                </small>

                            </div>


                        </div>


                        <div class="blog-step">


                            <div class="blog-step-icon">

                                🔑

                            </div>


                            <div>

                                <b>

                                    Dapat Kode

                                </b>


                                <small>

                                    Simpan kode daftar

                                </small>

                            </div>


                        </div>


                        <div class="blog-step">


                            <div class="blog-step-icon">

                                💬

                            </div>


                            <div>

                                <b>

                                    WhatsApp

                                </b>


                                <small>

                                    Hubungi admin

                                </small>

                            </div>


                        </div>


                    </div>


                </div>


                <!-- STATUS -->

                <div
                    class="side-card
                           status-card
                           reveal"
                    id="status"
                >


                    <div class="status-card-icon">

                        📊

                    </div>


                    <h3>

                        Cek

                        <span>
                            Status
                        </span>

                    </h3>


                    <p>

                        Sudah mendaftar?
                        Gunakan kode pendaftaran
                        Anda untuk melihat status
                        pendaftaran.

                    </p>


                    <a
                        href="status-pendaftaran.html"
                        class="status-button"
                    >

                        Cek Status Sekarang

                    </a>


                </div>


                <!-- INFO -->

                <div
                    class="side-card reveal"
                >


                    <h3>

                        Informasi

                        <span>
                            Penting
                        </span>

                    </h3>


                    <div class="info-list">


                        <div class="info-item">


                            <span>

                                🔑

                            </span>


                            <div>

                                <b>

                                    Simpan Kode

                                </b>


                                <small>

                                    Kode digunakan
                                    untuk cek status.

                                </small>

                            </div>


                        </div>


                        <div class="info-item">


                            <span>

                                💬

                            </span>


                            <div>

                                <b>

                                    WhatsApp Aktif

                                </b>


                                <small>

                                    Gunakan nomor aktif
                                    untuk konfirmasi.

                                </small>

                            </div>


                        </div>


                        <div class="info-item">


                            <span>

                                📋

                            </span>


                            <div>

                                <b>

                                    Data Benar

                                </b>


                                <small>

                                    Pastikan data
                                    sudah sesuai.

                                </small>

                            </div>


                        </div>


                    </div>


                </div>


            </aside>


        </div>


    </div>

</main>


<!-- =====================================================
     FOOTER
===================================================== -->

<footer class="footer">


    <div class="container">


        <div class="footer-grid">


            <div>


                <h3>

                    RA Miftahul

                    <span>
                        Hikmah
                    </span>

                </h3>


                <p>

                    Tempat belajar,
                    bermain dan bertumbuh
                    dengan bahagia.

                </p>


            </div>


            <div>


                <h3>

                    Menu

                </h3>


                <p>

                    <a href="index.html">

                        Home

                    </a>

                </p>


                <p>

                    <a href="blog.html">

                        Blog

                    </a>

                </p>


                <p>

                    <a href="pendaftaran.html">

                        Pendaftaran

                    </a>

                </p>


                <p>

                    <a href="status-pendaftaran.html">

                        Status Pendaftaran

                    </a>

                </p>


            </div>


            <div>


                <h3>

                    Hubungi Kami

                </h3>


                <p>

                    💬 WhatsApp Admin

                </p>


                <p>

                    ✉️ Email Sekolah

                </p>


                <p>

                    📍 Indonesia

                </p>


            </div>


        </div>


        <div class="copyright">

            © 2026 RA Miftahul Hikmah
            • All Rights Reserved

        </div>


    </div>


</footer>


<!-- =====================================================
     JAVASCRIPT
===================================================== -->

<script>


document.addEventListener(

    "DOMContentLoaded",

    function () {


        /* =============================================
           REVEAL
        ============================================= */

        const revealItems =

            document.querySelectorAll(
                ".reveal"
            );


        if (

            "IntersectionObserver"
            in
            window

        ) {


            const observer =

                new IntersectionObserver(

                    function (
                        entries
                    ) {


                        entries.forEach(

                            function (
                                entry
                            ) {


                                if (
                                    entry.isIntersecting
                                ) {


                                    entry.target.classList.add(
                                        "show"
                                    );


                                    observer.unobserve(
                                        entry.target
                                    );


                                }


                            }

                        );


                    },


                    {

                        threshold:
                            0.1

                    }

                );


            revealItems.forEach(

                function (
                    item
                ) {


                    observer.observe(
                        item
                    );


                }

            );


        }


        else {


            revealItems.forEach(

                function (
                    item
                ) {


                    item.classList.add(
                        "show"
                    );


                }

            );


        }


        /* =============================================
           FORM
        ============================================= */

        const form =

            document.getElementById(
                "registrationForm"
            );


        const successBox =

            document.getElementById(
                "successBox"
            );


        const registrationCode =

            document.getElementById(
                "registrationCode"
            );


        const whatsappButton =

            document.getElementById(
                "whatsappButton"
            );


        if (
            form
        ) {


            form.addEventListener(

                "submit",

                function (
                    event
                ) {


                    event.preventDefault();


                    if (
                        !form.checkValidity()
                    ) {


                        form.reportValidity();


                        return;


                    }


                    const submitButton =

                        form.querySelector(
                            ".submit-button"
                        );


                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        "⏳ Memproses Pendaftaran...";


                    setTimeout(

                        function () {


                            /* =====================
                               CREATE CODE
                            ===================== */

                            const randomNumber =

                                Math.floor(

                                    100000
                                    +

                                    Math.random()
                                    *

                                    900000

                                );


                            const code =

                                "RA-"
                                +
                                randomNumber;


                            registrationCode.textContent =
                                code;


                            /* =====================
                               GET DATA
                            ===================== */

                            const namaAnak =

                                document.getElementById(
                                    "namaAnak"
                                ).value;


                            const namaWali =

                                document.getElementById(
                                    "namaWali"
                                ).value;


                            const whatsapp =

                                document.getElementById(
                                    "whatsapp"
                                ).value;


                            /* =====================
                               FORMAT NUMBER
                            ===================== */

                            let phoneNumber =
                                whatsapp.replace(
                                    /\D/g,
                                    ""
                                );


                            if (
                                phoneNumber.startsWith(
                                    "0"
                                )
                            ) {


                                phoneNumber =
                                    "62"
                                    +
                                    phoneNumber.substring(
                                        1
                                    );


                            }


                            /* =====================
                               WHATSAPP MESSAGE
                            ===================== */

                            const message =

                                "Halo Admin RA Miftahul Hikmah 👋%0A%0A"

                                +

                                "Saya sudah melakukan pendaftaran.%0A%0A"

                                +

                                "👶 Nama Anak: "
                                +
                                namaAnak
                                +
                                "%0A"

                                +

                                "👨‍👩‍👧 Nama Wali: "
                                +
                                namaWali
                                +
                                "%0A"

                                +

                                "🔑 Kode Pendaftaran: "
                                +
                                code
                                +
                                "%0A%0A"

                                +

                                "Mohon informasi proses selanjutnya. Terima kasih 🙏";


                            /* =====================
                               ADMIN NUMBER
                            ===================== */

                            const adminNumber =

                                "6281234567890";


                            whatsappButton.href =

                                "https://wa.me/"
                                +
                                adminNumber
                                +
                                "?text="
                                +
                                message;


                            /* =====================
                               SHOW SUCCESS
                            ===================== */

                            form.style.display =
                                "none";


                            successBox.classList.add(
                                "show"
                            );


                            successBox.scrollIntoView(

                                {

                                    behavior:
                                        "smooth",

                                    block:
                                        "center"

                                }

                            );


                        },

                        1000

                    );


                }

            );


        }


    }

);


</script>


</body>

</html>
