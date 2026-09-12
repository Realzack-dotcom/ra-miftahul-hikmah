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

    <meta
        name="theme-color"
        content="#ff6f9f"
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


/* =========================================================
   RESET
========================================================= */

* {

    margin:
        0;

    padding:
        0;

    box-sizing:
        border-box;

}


html {

    scroll-behavior:
        smooth;

}


body {

    min-width:
        320px;

    overflow-x:
        hidden;

    font-family:
        "Nunito",
        sans-serif;

    color:
        #3e3650;

    background:
        #f7f7fb;

}


button,
input,
select,
textarea {

    font:
        inherit;

}


button {

    -webkit-tap-highlight-color:
        transparent;

}


a {

    -webkit-tap-highlight-color:
        transparent;

}


/* =========================================================
   BACKGROUND
========================================================= */

.background-shape {

    position:
        fixed;

    inset:
        0;

    z-index:
        -10;

    overflow:
        hidden;

    pointer-events:
        none;

}


.shape {

    position:
        absolute;

    border-radius:
        50%;

    filter:
        blur(90px);

}


.shape-one {

    width:
        400px;

    height:
        400px;

    top:
        -180px;

    left:
        -150px;

    background:
        rgba(255, 125, 174, .20);

}


.shape-two {

    width:
        450px;

    height:
        450px;

    right:
        -220px;

    bottom:
        -200px;

    background:
        rgba(129, 174, 255, .20);

}


/* =========================================================
   CONTAINER
========================================================= */

.container {

    width:
        min(1180px, calc(100% - 32px));

    margin:
        auto;

}


/* =========================================================
   HEADER
========================================================= */

.site-header {

    position:
        sticky;

    top:
        0;

    z-index:
        999;

    background:
        rgba(255, 255, 255, .92);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid rgba(100, 80, 140, .08);

}


.header-content {

    min-height:
        72px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    gap:
        15px;

}


/* =========================================================
   BRAND
========================================================= */

.brand {

    display:
        flex;

    align-items:
        center;

    gap:
        11px;

    text-decoration:
        none;

    color:
        #3e3650;

    min-width:
        0;

}


.brand-icon {

    width:
        48px;

    height:
        48px;

    flex:
        0 0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        16px;

    font-size:
        24px;

    background:
        linear-gradient(
            135deg,
            #ffe49c,
            #ffc6da,
            #c8ecff
        );

    box-shadow:
        0 10px 25px
        rgba(239, 79, 130, .15);

}


.brand-text {

    min-width:
        0;

}


.brand-title {

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        19px;

    font-weight:
        800;

    line-height:
        1.1;

}


.brand-title span {

    color:
        #ef4f82;

}


.brand-subtitle {

    margin-top:
        3px;

    color:
        #918797;

    font-size:
        9px;

    font-weight:
        700;

}


/* =========================================================
   STATUS BUTTON
========================================================= */

.header-status {

    flex:
        0 0 auto;

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    min-height:
        44px;

    padding:
        0 16px;

    border-radius:
        14px;

    text-decoration:
        none;

    color:
        #ffffff;

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
        0 10px 22px
        rgba(123, 108, 255, .22);

    transition:
        .25s ease;

}


.header-status:hover {

    transform:
        translateY(-2px);

}


/* =========================================================
   NAVIGATION
========================================================= */

.site-nav {

    position:
        sticky;

    top:
        72px;

    z-index:
        998;

    background:
        rgba(255, 255, 255, .96);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid #eeeaf3;

}


.nav-scroll {

    width:
        min(1180px, calc(100% - 20px));

    margin:
        auto;

    display:
        flex;

    align-items:
        center;

    gap:
        7px;

    overflow-x:
        auto;

    padding:
        8px 0;

    scrollbar-width:
        none;

}


.nav-scroll::-webkit-scrollbar {

    display:
        none;

}


.nav-link {

    flex:
        0 0 auto;

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    min-height:
        40px;

    padding:
        0 15px;

    border-radius:
        13px;

    text-decoration:
        none;

    color:
        #756c7d;

    font-size:
        11px;

    font-weight:
        900;

    transition:
        .25s ease;

}


.nav-link:hover {

    background:
        #f5f2fb;

}


.nav-link.active {

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #ef4f82,
            #ff7da7
        );

    box-shadow:
        0 8px 20px
        rgba(239, 79, 130, .20);

}


/* =========================================================
   MAIN
========================================================= */

.main-content {

    padding:
        28px 0 65px;

}


/* =========================================================
   HERO
========================================================= */

.hero {

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
        42px;

    border-radius:
        32px;

    background:
        linear-gradient(
            135deg,
            #7768ef,
            #ef4f82,
            #ff9667
        );

    box-shadow:
        0 25px 60px
        rgba(100, 60, 120, .22);

}


.hero::before {

    content:
        "🌈";

    position:
        absolute;

    top:
        -40px;

    right:
        4%;

    font-size:
        190px;

    opacity:
        .16;

    transform:
        rotate(-15deg);

}


.hero::after {

    content:
        "🎒";

    position:
        absolute;

    top:
        40px;

    left:
        6%;

    font-size:
        75px;

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
        #ffffff;

}


.hero-badge {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        7px;

    padding:
        9px 15px;

    border-radius:
        50px;

    background:
        rgba(255, 255, 255, .17);

    backdrop-filter:
        blur(10px);

    font-size:
        10px;

    font-weight:
        900;

}


.hero h1 {

    margin:
        17px 0 13px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        clamp(42px, 6vw, 70px);

    line-height:
        1;

}


.hero p {

    max-width:
        600px;

    color:
        rgba(255, 255, 255, .90);

    font-size:
        14px;

    line-height:
        1.8;

}


.hero-tags {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        9px;

    margin-top:
        22px;

}


.hero-tag {

    padding:
        8px 13px;

    border-radius:
        50px;

    background:
        rgba(255, 255, 255, .16);

    font-size:
        10px;

    font-weight:
        800;

}


/* =========================================================
   MOBILE QUICK MENU
========================================================= */

.quick-menu {

    display:
        none;

}


/* =========================================================
   BLOG LAYOUT
========================================================= */

.blog-layout {

    display:
        grid;

    grid-template-columns:
        minmax(0, 1.55fr)
        minmax(290px, .75fr);

    gap:
        25px;

    margin-top:
        25px;

}


.blog-main {

    min-width:
        0;

}


.blog-sidebar {

    min-width:
        0;

}


/* =========================================================
   CARD
========================================================= */

.card {

    background:
        rgba(255, 255, 255, .94);

    border:
        1px solid
        rgba(255, 255, 255, .95);

    border-radius:
        26px;

    box-shadow:
        0 18px 45px
        rgba(60, 40, 90, .08);

}


/* =========================================================
   ARTICLE INTRO
========================================================= */

.article-card {

    overflow:
        hidden;

}


.article-header {

    padding:
        26px 26px 0;

}


.article-label {

    display:
        inline-flex;

    align-items:
        center;

    padding:
        7px 12px;

    border-radius:
        50px;

    color:
        #725bb9;

    background:
        #f0ecff;

    font-size:
        10px;

    font-weight:
        900;

}


.article-header h2 {

    margin:
        13px 0 8px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        32px;

    line-height:
        1.1;

}


.article-header p {

    color:
        #867d8f;

    font-size:
        12px;

    line-height:
        1.8;

}


.article-body {

    padding:
        26px;

}


/* =========================================================
   STEPS
========================================================= */

.steps-grid {

    display:
        grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap:
        10px;

}


.step-box {

    min-height:
        140px;

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
        19px;

    background:
        #faf9ff;

}


.step-icon {

    width:
        47px;

    height:
        47px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    margin-bottom:
        9px;

    border-radius:
        16px;

    background:
        #ffffff;

    font-size:
        22px;

    box-shadow:
        0 7px 18px
        rgba(60, 40, 90, .07);

}


.step-box strong {

    font-size:
        10px;

}


.step-box small {

    margin-top:
        5px;

    color:
        #988fa0;

    font-size:
        8px;

}


/* =========================================================
   FORM CARD
========================================================= */

.registration-card {

    margin-top:
        25px;

    padding:
        26px;

}


.form-top {

    display:
        flex;

    align-items:
        center;

    gap:
        14px;

    margin-bottom:
        23px;

}


.form-top-icon {

    width:
        58px;

    height:
        58px;

    flex:
        0 0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        19px;

    background:
        linear-gradient(
            135deg,
            #fff0f6,
            #eeeaff
        );

    font-size:
        27px;

}


.form-top h2 {

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        27px;

    line-height:
        1.1;

}


.form-top p {

    margin-top:
        4px;

    color:
        #918898;

    font-size:
        10px;

}


/* =========================================================
   FORM SECTION
========================================================= */

.form-section {

    margin-bottom:
        17px;

    padding:
        20px;

    border:
        1px solid
        #f0edf5;

    border-radius:
        21px;

    background:
        #fbfaff;

}


.section-heading {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    margin-bottom:
        18px;

}


.section-number {

    width:
        35px;

    height:
        35px;

    flex:
        0 0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        11px;

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

    font-size:
        10px;

    font-weight:
        900;

}


.section-heading h3 {

    font-size:
        13px;

    font-weight:
        900;

}


/* =========================================================
   FORM GRID
========================================================= */

.form-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap:
        14px;

}


.form-group {

    display:
        flex;

    flex-direction:
        column;

    gap:
        7px;

    min-width:
        0;

}


.form-group.full {

    grid-column:
        1 / -1;

}


.form-group label {

    color:
        #62586f;

    font-size:
        10px;

    font-weight:
        900;

}


.required {

    color:
        #ef4f82;

}


/* =========================================================
   INPUT
========================================================= */

.form-group input,
.form-group select,
.form-group textarea {

    width:
        100%;

    min-height:
        49px;

    padding:
        12px 14px;

    border:
        1px solid
        #e8e3ee;

    outline:
        none;

    border-radius:
        14px;

    background:
        #ffffff;

    color:
        #423a4d;

    font-size:
        11px;

    transition:
        .25s ease;

}


.form-group textarea {

    min-height:
        110px;

    resize:
        vertical;

}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    border-color:
        #a47fff;

    box-shadow:
        0 0 0 4px
        rgba(164, 127, 255, .10);

}


/* =========================================================
   GENDER
========================================================= */

.gender-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap:
        10px;

}


.gender-option {

    cursor:
        pointer;

}


.gender-option input {

    position:
        absolute;

    opacity:
        0;

    pointer-events:
        none;

}


.gender-box {

    min-height:
        49px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    border:
        1px solid
        #e8e3ee;

    border-radius:
        14px;

    background:
        #ffffff;

    color:
        #776d7e;

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

    color:
        #7158bb;

    border-color:
        #a47fff;

    background:
        #f5f2ff;

}


/* =========================================================
   AGREEMENT
========================================================= */

.agreement {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        10px;

    padding:
        15px;

    border-radius:
        17px;

    background:
        #fff9ed;

    color:
        #776e64;

    font-size:
        10px;

    font-weight:
        600;

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

    margin-top:
        1px;

    accent-color:
        #ef4f82;

}


/* =========================================================
   SUBMIT BUTTON
========================================================= */

.submit-button {

    width:
        100%;

    min-height:
        56px;

    margin-top:
        16px;

    border:
        none;

    outline:
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

    border-radius:
        17px;

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #ef4f82,
            #ff7ca7
        );

    box-shadow:
        0 14px 28px
        rgba(239, 79, 130, .23);

    font-size:
        13px;

    font-weight:
        900;

    transition:
        .25s ease;

}


.submit-button:hover {

    transform:
        translateY(-3px);

}


.submit-button:active {

    transform:
        scale(.98);

}


.submit-button:disabled {

    cursor:
        not-allowed;

    opacity:
        .75;

    transform:
        none;

}


/* =========================================================
   SUCCESS
========================================================= */

.success-box {

    display:
        none;

    padding:
        28px 20px;

    text-align:
        center;

    border:
        1px solid
        #d9f2e2;

    border-radius:
        23px;

    background:
        linear-gradient(
            135deg,
            #effff5,
            #f4f0ff
        );

}


.success-box.show {

    display:
        block;

    animation:
        successAnimation .5s ease;

}


@keyframes successAnimation {

    from {

        opacity:
            0;

        transform:
            translateY(15px)
            scale(.97);

    }


    to {

        opacity:
            1;

        transform:
            translateY(0)
            scale(1);

    }

}


.success-emoji {

    font-size:
        52px;

}


.success-box h3 {

    margin-top:
        10px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        27px;

}


.success-box p {

    max-width:
        500px;

    margin:
        5px auto 0;

    color:
        #697367;

    font-size:
        11px;

    line-height:
        1.8;

}


.code-box {

    max-width:
        380px;

    margin:
        20px auto;

    padding:
        19px;

    border-radius:
        19px;

    background:
        #ffffff;

    box-shadow:
        0 10px 25px
        rgba(60, 40, 90, .08);

}


.code-box small {

    display:
        block;

    margin-bottom:
        7px;

    color:
        #948b9c;

    font-size:
        9px;

    font-weight:
        800;

}


.code-box strong {

    display:
        block;

    color:
        #735cc1;

    font-size:
        25px;

    letter-spacing:
        2px;

}


.success-buttons {

    display:
        grid;

    gap:
        10px;

    max-width:
        420px;

    margin:
        auto;

}


.success-buttons a {

    min-height:
        53px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    border-radius:
        16px;

    text-decoration:
        none;

    font-size:
        11px;

    font-weight:
        900;

}


.whatsapp-button {

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #25d366,
            #55e58c
        );

}


.status-button-success {

    color:
        #6d607c;

    background:
        #ffffff;

    border:
        1px solid
        #e9e4f0;

}


/* =========================================================
   SIDEBAR
========================================================= */

.blog-sidebar {

    display:
        flex;

    flex-direction:
        column;

    gap:
        18px;

}


.sidebar-card {

    padding:
        22px;

}


.sidebar-card h3 {

    margin-bottom:
        9px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        23px;

    line-height:
        1.1;

}


.sidebar-card h3 span {

    color:
        #ef4f82;

}


.sidebar-card p {

    color:
        #847b8d;

    font-size:
        11px;

    line-height:
        1.8;

}


/* =========================================================
   SIDEBAR STEPS
========================================================= */

.sidebar-steps {

    display:
        grid;

    gap:
        10px;

    margin-top:
        16px;

}


.sidebar-step {

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


.sidebar-step-icon {

    width:
        43px;

    height:
        43px;

    flex:
        0 0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        14px;

    background:
        #ffffff;

    font-size:
        19px;

    box-shadow:
        0 7px 17px
        rgba(60, 40, 90, .06);

}


.sidebar-step strong {

    display:
        block;

    font-size:
        10px;

}


.sidebar-step small {

    display:
        block;

    margin-top:
        3px;

    color:
        #9b92a1;

    font-size:
        8px;

}


/* =========================================================
   STATUS SIDEBAR
========================================================= */

.status-card {

    background:
        linear-gradient(
            135deg,
            #f0edff,
            #fff0f6,
            #ecf8ff
        );

}


.status-icon {

    margin-bottom:
        8px;

    font-size:
        48px;

}


.status-card-button {

    width:
        100%;

    min-height:
        49px;

    margin-top:
        16px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border-radius:
        15px;

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

    text-decoration:
        none;

    font-size:
        10px;

    font-weight:
        900;

}


/* =========================================================
   INFO
========================================================= */

.info-list {

    display:
        grid;

    gap:
        10px;

    margin-top:
        16px;

}


.info-item {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        10px;

    padding:
        12px;

    border-radius:
        16px;

    background:
        #f9fcff;

}


.info-icon {

    flex:
        0 0 auto;

    font-size:
        19px;

}


.info-item strong {

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
        #918898;

    font-size:
        8px;

    line-height:
        1.6;

}


/* =========================================================
   FOOTER
========================================================= */

.footer {

    padding:
        42px 0 20px;

    color:
        #ffffff;

    background:
        linear-gradient(
            135deg,
            #302843,
            #46365a
        );

}


.footer-grid {

    display:
        grid;

    grid-template-columns:
        1.2fr 1fr 1fr;

    gap:
        30px;

}


.footer h3 {

    margin-bottom:
        10px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        21px;

}


.footer h3 span {

    color:
        #ff91b7;

}


.footer p {

    margin-bottom:
        8px;

    color:
        #c9c1d4;

    font-size:
        11px;

    line-height:
        1.7;

}


.footer a {

    color:
        #c9c1d4;

    text-decoration:
        none;

}


.footer a:hover {

    color:
        #ffffff;

}


.copyright {

    margin-top:
        30px;

    padding-top:
        20px;

    text-align:
        center;

    border-top:
        1px solid
        rgba(255, 255, 255, .08);

    color:
        #aaa0bb;

    font-size:
        10px;

}


/* =========================================================
   REVEAL
========================================================= */

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


/* =========================================================
   MOBILE
========================================================= */

@media
(
    max-width: 768px
) {


    /* CONTAINER */

    .container {

        width:
            calc(100% - 24px);

    }


    /* HEADER */

    .header-content {

        min-height:
            66px;

        gap:
            10px;

    }


    .brand-icon {

        width:
            42px;

        height:
            42px;

        border-radius:
            14px;

        font-size:
            21px;

    }


    .brand-title {

        font-size:
            15px;

    }


    .brand-subtitle {

        font-size:
            8px;

        white-space:
            nowrap;

    }


    .header-status {

        min-height:
            39px;

        padding:
            0 11px;

        border-radius:
            12px;

        font-size:
            9px;

    }


    /* NAV */

    .site-nav {

        top:
            66px;

    }


    .nav-scroll {

        gap:
            5px;

        padding:
            7px 0;

    }


    .nav-link {

        min-height:
            37px;

        padding:
            0 12px;

        font-size:
            9px;

        border-radius:
            11px;

    }


    /* MAIN */

    .main-content {

        padding:
            15px 0 42px;

    }


    /* HERO */

    .hero {

        min-height:
            420px;

        padding:
            25px 20px;

        border-radius:
            25px;

        align-items:
            flex-end;

    }


    .hero::before {

        top:
            0;

        right:
            -15px;

        font-size:
            130px;

    }


    .hero::after {

        top:
            24px;

        left:
            18px;

        font-size:
            48px;

    }


    .hero-badge {

        padding:
            7px 11px;

        font-size:
            8px;

    }


    .hero h1 {

        margin:
            14px 0 10px;

        font-size:
            43px;

        line-height:
            .95;

    }


    .hero p {

        font-size:
            11px;

        line-height:
            1.75;

    }


    .hero-tags {

        gap:
            6px;

        margin-top:
            16px;

    }


    .hero-tag {

        padding:
            7px 9px;

        font-size:
            8px;

    }


    /* QUICK MENU */

    .quick-menu {

        display:
            flex;

        gap:
            8px;

        margin-top:
            12px;

        overflow-x:
            auto;

        padding-bottom:
            3px;

        scrollbar-width:
            none;

    }


    .quick-menu::-webkit-scrollbar {

        display:
            none;

    }


    .quick-menu a {

        flex:
            0 0 auto;

        display:
            flex;

        align-items:
            center;

        justify-content:
            center;

        min-height:
            43px;

        padding:
            0 14px;

        border-radius:
            14px;

        color:
            #6e6479;

        background:
            #ffffff;

        text-decoration:
            none;

        font-size:
            9px;

        font-weight:
            900;

        box-shadow:
            0 8px 20px
            rgba(60, 40, 90, .07);

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


    .blog-main {

        width:
            100%;

    }


    .blog-sidebar {

        width:
            100%;

    }


    /* ARTICLE */

    .card {

        border-radius:
            21px;

    }


    .article-header {

        padding:
            20px 17px 0;

    }


    .article-label {

        padding:
            6px 10px;

        font-size:
            8px;

    }


    .article-header h2 {

        margin:
            11px 0 7px;

        font-size:
            26px;

    }


    .article-header p {

        font-size:
            10px;

        line-height:
            1.75;

    }


    .article-body {

        padding:
            17px;

    }


    /* STEPS */

    .steps-grid {

        display:
            flex;

        overflow-x:
            auto;

        gap:
            10px;

        padding-bottom:
            4px;

        scrollbar-width:
            none;

    }


    .steps-grid::-webkit-scrollbar {

        display:
            none;

    }


    .step-box {

        flex:
            0 0 145px;

        min-height:
            145px;

        border-radius:
            18px;

    }


    .step-icon {

        width:
            44px;

        height:
            44px;

        font-size:
            20px;

    }


    .step-box strong {

        font-size:
            9px;

    }


    /* FORM */

    .registration-card {

        margin-top:
            15px;

        padding:
            13px;

    }


    .form-top {

        gap:
            10px;

        padding:
            4px;

        margin-bottom:
            16px;

    }


    .form-top-icon {

        width:
            47px;

        height:
            47px;

        border-radius:
            15px;

        font-size:
            22px;

    }


    .form-top h2 {

        font-size:
            20px;

    }


    .form-top p {

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


    .section-heading {

        gap:
            8px;

        margin-bottom:
            14px;

    }


    .section-number {

        width:
            30px;

        height:
            30px;

        border-radius:
            9px;

        font-size:
            8px;

    }


    .section-heading h3 {

        font-size:
            10px;

    }


    /* FORM GRID */

    .form-grid {

        grid-template-columns:
            1fr;

        gap:
            11px;

    }


    .form-group.full {

        grid-column:
            auto;

    }


    .form-group {

        gap:
            5px;

    }


    .form-group label {

        font-size:
            9px;

    }


    /* INPUT */

    .form-group input,
    .form-group select,
    .form-group textarea {

        min-height:
            47px;

        padding:
            11px;

        border-radius:
            12px;

        font-size:
            10px;

    }


    .form-group textarea {

        min-height:
            95px;

    }


    /* GENDER */

    .gender-grid {

        gap:
            7px;

    }


    .gender-box {

        min-height:
            46px;

        border-radius:
            12px;

        font-size:
            9px;

    }


    /* AGREEMENT */

    .agreement {

        gap:
            8px;

        padding:
            12px;

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


    /* SUBMIT */

    .submit-button {

        min-height:
            52px;

        margin-top:
            13px;

        border-radius:
            14px;

        font-size:
            11px;

    }


    /* SUCCESS */

    .success-box {

        padding:
            21px 13px;

        border-radius:
            18px;

    }


    .success-emoji {

        font-size:
            43px;

    }


    .success-box h3 {

        font-size:
            22px;

    }


    .success-box p {

        font-size:
            9px;

    }


    .code-box {

        padding:
            16px;

    }


    .code-box strong {

        font-size:
            20px;

    }


    /* SIDEBAR */

    .blog-sidebar {

        gap:
            14px;

    }


    .sidebar-card {

        padding:
            17px;

    }


    .sidebar-card h3 {

        font-size:
            21px;

    }


    .sidebar-card p {

        font-size:
            10px;

    }


    /* FOOTER */

    .footer {

        padding:
            32px 0 18px;

    }


    .footer-grid {

        grid-template-columns:
            1fr;

        gap:
            22px;

        text-align:
            center;

    }


}


/* =========================================================
   EXTRA SMALL MOBILE
========================================================= */

@media
(
    max-width: 390px
) {


    .brand-subtitle {

        display:
            none;

    }


    .brand-title {

        font-size:
            14px;

    }


    .header-status {

        padding:
            0 9px;

    }


    .hero h1 {

        font-size:
            38px;

    }


    .gender-grid {

        grid-template-columns:
            1fr;

    }


}


</style>

</head>


<body>


<!-- =========================================================
     BACKGROUND
========================================================= -->

<div class="background-shape">

    <div class="shape shape-one"></div>

    <div class="shape shape-two"></div>

</div>


<!-- =========================================================
     HEADER
========================================================= -->

<header class="site-header">

    <div class="container header-content">


        <a
            href="index.html"
            class="brand"
        >


            <div class="brand-icon">

                🌈

            </div>


            <div class="brand-text">


                <div class="brand-title">

                    RA Miftahul

                    <span>
                        Hikmah
                    </span>

                </div>


                <div class="brand-subtitle">

                    Belajar • Bermain • Berprestasi

                </div>


            </div>


        </a>


        <a
            href="status-pendaftaran.html"
            class="header-status"
        >

            📊 Status

        </a>


    </div>

</header>


<!-- =========================================================
     NAVIGATION
========================================================= -->

<nav class="site-nav">

    <div class="nav-scroll">


        <a
            href="index.html"
            class="nav-link"
        >

            🏠 Home

        </a>


        <a
            href="about.html"
            class="nav-link"
        >

            👥 About

        </a>


        <a
            href="programs.html"
            class="nav-link"
        >

            📚 Programs

        </a>


        <a
            href="blog.html"
            class="nav-link"
        >

            🖍️ Blog

        </a>


        <a
            href="pendaftaran.html"
            class="nav-link active"
        >

            📝 Pendaftaran

        </a>


    </div>

</nav>


<!-- =========================================================
     MAIN
========================================================= -->

<main class="main-content">

    <div class="container">


        <!-- =================================================
             HERO
        ================================================== -->

        <section class="hero reveal">


            <div class="hero-content">


                <div class="hero-badge">

                    ✨ PENDAFTARAN ONLINE

                </div>


                <h1>

                    Mulai Petualangan
                    Baru Bersama Kami 🌈

                </h1>


                <p>

                    Selamat datang di halaman pendaftaran
                    online RA Miftahul Hikmah. Lengkapi
                    formulir dengan data yang benar,
                    kirim pendaftaran dan dapatkan
                    kode pendaftaran Anda.

                </p>


                <div class="hero-tags">


                    <div class="hero-tag">

                        📝 Isi Data

                    </div>


                    <div class="hero-tag">

                        🔑 Dapat Kode

                    </div>


                    <div class="hero-tag">

                        💬 WhatsApp

                    </div>


                </div>


            </div>


        </section>


        <!-- =================================================
             MOBILE QUICK MENU
        ================================================== -->

        <div class="quick-menu">


            <a href="#cara-daftar">

                📖 Cara Daftar

            </a>


            <a href="#formulir">

                📝 Formulir

            </a>


            <a href="#cek-status">

                📊 Status

            </a>


        </div>


        <!-- =================================================
             BLOG LAYOUT
        ================================================== -->

        <div class="blog-layout">


            <!-- =============================================
                 MAIN CONTENT
            ============================================== -->

            <div class="blog-main">


                <!-- =========================================
                     CARA DAFTAR
                ========================================== -->

                <article
                    class="card article-card reveal"
                    id="cara-daftar"
                >


                    <div class="article-header">


                        <div class="article-label">

                            📖 PANDUAN PENDAFTARAN

                        </div>


                        <h2>

                            Cara Mendaftar
                            Sangat Mudah ✨

                        </h2>


                        <p>

                            Kami membuat proses pendaftaran
                            menjadi lebih sederhana agar
                            orang tua atau wali dapat
                            mendaftarkan buah hati dengan
                            mudah melalui website.

                        </p>


                    </div>


                    <div class="article-body">


                        <div class="steps-grid">


                            <!-- STEP 1 -->

                            <div class="step-box">


                                <div class="step-icon">

                                    👶

                                </div>


                                <strong>

                                    Isi Data

                                </strong>


                                <small>

                                    Data calon siswa

                                </small>


                            </div>


                            <!-- STEP 2 -->

                            <div class="step-box">


                                <div class="step-icon">

                                    📤

                                </div>


                                <strong>

                                    Kirim

                                </strong>


                                <small>

                                    Kirim formulir

                                </small>


                            </div>


                            <!-- STEP 3 -->

                            <div class="step-box">


                                <div class="step-icon">

                                    🔑

                                </div>


                                <strong>

                                    Dapat Kode

                                </strong>


                                <small>

                                    Simpan kode

                                </small>


                            </div>


                            <!-- STEP 4 -->

                            <div class="step-box">


                                <div class="step-icon">

                                    💬

                                </div>


                                <strong>

                                    WhatsApp

                                </strong>


                                <small>

                                    Konfirmasi admin

                                </small>


                            </div>


                        </div>


                    </div>


                </article>


                <!-- =========================================
                     FORM PENDAFTARAN
                ========================================== -->

                <section
                    class="card registration-card reveal"
                    id="formulir"
                >


                    <!-- FORM TOP -->

                    <div class="form-top">


                        <div class="form-top-icon">

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


                    <!-- FORM -->

                    <form id="registrationForm">


                        <!-- =================================
                             DATA ANAK
                        ================================== -->

                        <div class="form-section">


                            <div class="section-heading">


                                <div class="section-number">

                                    01

                                </div>


                                <h3>

                                    👶 Data Calon Peserta Didik

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div class="form-group">


                                    <label
                                        for="namaAnak"
                                    >

                                        Nama Lengkap

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        id="namaAnak"
                                        name="namaAnak"
                                        placeholder="Nama lengkap anak"
                                        required
                                    >


                                </div>


                                <div class="form-group">


                                    <label
                                        for="namaPanggilan"
                                    >

                                        Nama Panggilan

                                    </label>


                                    <input
                                        type="text"
                                        id="namaPanggilan"
                                        name="namaPanggilan"
                                        placeholder="Contoh: Aisyah"
                                    >


                                </div>


                                <div class="form-group">


                                    <label
                                        for="tempatLahir"
                                    >

                                        Tempat Lahir

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        id="tempatLahir"
                                        name="tempatLahir"
                                        placeholder="Contoh: Jakarta"
                                        required
                                    >


                                </div>


                                <div class="form-group">


                                    <label
                                        for="tanggalLahir"
                                    >

                                        Tanggal Lahir

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <input
                                        type="date"
                                        id="tanggalLahir"
                                        name="tanggalLahir"
                                        required
                                    >


                                </div>


                                <div
                                    class="form-group full"
                                >


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
                                                name="jenisKelamin"
                                                value="Laki-laki"
                                                required
                                            >


                                            <span class="gender-box">

                                                👦 Laki-laki

                                            </span>


                                        </label>


                                        <label
                                            class="gender-option"
                                        >


                                            <input
                                                type="radio"
                                                name="jenisKelamin"
                                                value="Perempuan"
                                            >


                                            <span class="gender-box">

                                                👧 Perempuan

                                            </span>


                                        </label>


                                    </div>


                                </div>


                            </div>


                        </div>


                        <!-- =================================
                             DATA WALI
                        ================================== -->

                        <div class="form-section">


                            <div class="section-heading">


                                <div class="section-number">

                                    02

                                </div>


                                <h3>

                                    👨‍👩‍👧 Data Orang Tua / Wali

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div class="form-group">


                                    <label
                                        for="namaWali"
                                    >

                                        Nama Orang Tua / Wali

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <input
                                        type="text"
                                        id="namaWali"
                                        name="namaWali"
                                        placeholder="Nama orang tua atau wali"
                                        required
                                    >


                                </div>


                                <div class="form-group">


                                    <label
                                        for="hubungan"
                                    >

                                        Hubungan dengan Anak

                                    </label>


                                    <select
                                        id="hubungan"
                                        name="hubungan"
                                    >

                                        <option value="">

                                            Pilih hubungan

                                        </option>

                                        <option value="Ayah">

                                            Ayah

                                        </option>

                                        <option value="Ibu">

                                            Ibu

                                        </option>

                                        <option value="Wali">

                                            Wali

                                        </option>

                                    </select>


                                </div>


                                <div class="form-group">


                                    <label
                                        for="whatsapp"
                                    >

                                        Nomor WhatsApp

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        inputmode="numeric"
                                        placeholder="081234567890"
                                        required
                                    >


                                </div>


                                <div class="form-group">


                                    <label
                                        for="email"
                                    >

                                        Email

                                    </label>


                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="email@gmail.com"
                                    >


                                </div>


                            </div>


                        </div>


                        <!-- =================================
                             ALAMAT
                        ================================== -->

                        <div class="form-section">


                            <div class="section-heading">


                                <div class="section-number">

                                    03

                                </div>


                                <h3>

                                    🏠 Alamat & Informasi

                                </h3>


                            </div>


                            <div class="form-grid">


                                <div
                                    class="form-group full"
                                >


                                    <label
                                        for="alamat"
                                    >

                                        Alamat Lengkap

                                        <span class="required">

                                            *

                                        </span>

                                    </label>


                                    <textarea
                                        id="alamat"
                                        name="alamat"
                                        placeholder="Masukkan alamat lengkap"
                                        required
                                    ></textarea>


                                </div>


                                <div class="form-group">


                                    <label
                                        for="program"
                                    >

                                        Program / Kelas

                                    </label>


                                    <select
                                        id="program"
                                        name="program"
                                    >

                                        <option value="">

                                            Pilih program

                                        </option>

                                        <option value="Kelas A">

                                            Kelas A

                                        </option>

                                        <option value="Kelas B">

                                            Kelas B

                                        </option>

                                        <option value="Konsultasi Admin">

                                            Konsultasi Admin

                                        </option>

                                    </select>


                                </div>


                                <div class="form-group">


                                    <label
                                        for="tahunAjaran"
                                    >

                                        Tahun Ajaran

                                    </label>


                                    <select
                                        id="tahunAjaran"
                                        name="tahunAjaran"
                                    >

                                        <option value="2026 / 2027">

                                            2026 / 2027

                                        </option>

                                        <option value="2027 / 2028">

                                            2027 / 2028

                                        </option>

                                    </select>


                                </div>


                            </div>


                        </div>


                        <!-- =================================
                             PERSETUJUAN
                        ================================== -->

                        <label class="agreement">


                            <input
                                type="checkbox"
                                id="agreement"
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


                        <!-- =================================
                             BUTTON
                        ================================== -->

                        <button
                            type="submit"
                            class="submit-button"
                        >

                            🚀 Kirim Pendaftaran

                        </button>


                    </form>


                    <!-- =====================================
                         SUCCESS
                    ====================================== -->

                    <div
                        class="success-box"
                        id="successBox"
                    >


                        <div class="success-emoji">

                            🎉

                        </div>


                        <h3>

                            Pendaftaran Berhasil!

                        </h3>


                        <p>

                            Simpan kode pendaftaran berikut.
                            Kode tersebut dapat digunakan
                            untuk melakukan pengecekan
                            status pendaftaran.

                        </p>


                        <div class="code-box">


                            <small>

                                KODE PENDAFTARAN

                            </small>


                            <strong
                                id="registrationCode"
                            >

                                RA-000000

                            </strong>


                        </div>


                        <div class="success-buttons">


                            <a
                                href="#"
                                id="whatsappButton"
                                class="whatsapp-button"
                                target="_blank"
                                rel="noopener"
                            >

                                💬 Lanjut ke WhatsApp

                            </a>


                            <a
                                href="status-pendaftaran.html"
                                class="status-button-success"
                            >

                                📊 Cek Status Pendaftaran

                            </a>


                        </div>


                    </div>


                </section>


            </div>


            <!-- =============================================
                 SIDEBAR
            ============================================== -->

            <aside
                class="blog-sidebar"
            >


                <!-- ALUR -->

                <div
                    class="card sidebar-card reveal"
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


                    <div class="sidebar-steps">


                        <div class="sidebar-step">


                            <div
                                class="sidebar-step-icon"
                            >

                                📝

                            </div>


                            <div>


                                <strong>

                                    Isi Formulir

                                </strong>


                                <small>

                                    Lengkapi data anak

                                </small>


                            </div>


                        </div>


                        <div class="sidebar-step">


                            <div
                                class="sidebar-step-icon"
                            >

                                📤

                            </div>


                            <div>


                                <strong>

                                    Kirim Data

                                </strong>


                                <small>

                                    Kirim pendaftaran

                                </small>


                            </div>


                        </div>


                        <div class="sidebar-step">


                            <div
                                class="sidebar-step-icon"
                            >

                                🔑

                            </div>


                            <div>


                                <strong>

                                    Dapat Kode

                                </strong>


                                <small>

                                    Simpan kode daftar

                                </small>


                            </div>


                        </div>


                        <div class="sidebar-step">


                            <div
                                class="sidebar-step-icon"
                            >

                                💬

                            </div>


                            <div>


                                <strong>

                                    WhatsApp

                                </strong>


                                <small>

                                    Konfirmasi admin

                                </small>


                            </div>


                        </div>


                    </div>


                </div>


                <!-- STATUS -->

                <div
                    class="card sidebar-card status-card reveal"
                    id="cek-status"
                >


                    <div class="status-icon">

                        📊

                    </div>


                    <h3>

                        Cek

                        <span>
                            Status
                        </span>

                    </h3>


                    <p>

                        Sudah melakukan pendaftaran?
                        Gunakan kode pendaftaran
                        Anda untuk melihat status.

                    </p>


                    <a
                        href="status-pendaftaran.html"
                        class="status-card-button"
                    >

                        Cek Status Sekarang

                    </a>


                </div>


                <!-- INFORMASI -->

                <div
                    class="card sidebar-card reveal"
                >


                    <h3>

                        Informasi

                        <span>
                            Penting
                        </span>

                    </h3>


                    <div class="info-list">


                        <div class="info-item">


                            <div class="info-icon">

                                🔑

                            </div>


                            <div>


                                <strong>

                                    Simpan Kode

                                </strong>


                                <small>

                                    Kode digunakan untuk
                                    melakukan pengecekan
                                    status pendaftaran.

                                </small>


                            </div>


                        </div>


                        <div class="info-item">


                            <div class="info-icon">

                                💬

                            </div>


                            <div>


                                <strong>

                                    WhatsApp Aktif

                                </strong>


                                <small>

                                    Gunakan nomor WhatsApp
                                    aktif agar mudah
                                    dihubungi admin.

                                </small>


                            </div>


                        </div>


                        <div class="info-item">


                            <div class="info-icon">

                                📋

                            </div>


                            <div>


                                <strong>

                                    Data Benar

                                </strong>


                                <small>

                                    Pastikan seluruh data
                                    yang diisi sudah benar.

                                </small>


                            </div>


                        </div>


                    </div>


                </div>


            </aside>


        </div>


    </div>

</main>


<!-- =========================================================
     FOOTER
========================================================= -->

<footer class="footer">


    <div class="container">


        <div class="footer-grid">


            <!-- SEKOLAH -->

            <div>


                <h3>

                    RA Miftahul

                    <span>
                        Hikmah
                    </span>

                </h3>


                <p>

                    Tempat belajar, bermain
                    dan bertumbuh dengan
                    bahagia.

                </p>


            </div>


            <!-- MENU -->

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

                    <a href="about.html">

                        About

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


            </div>


            <!-- KONTAK -->

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


<!-- =========================================================
     JAVASCRIPT
========================================================= -->

<script>


document.addEventListener(

    "DOMContentLoaded",

    function () {


        /* =================================================
           REVEAL ANIMATION
        ================================================= */

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
                            0.08

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


        /* =================================================
           FORM
        ================================================= */

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


                    /* =========================================
                       VALIDASI
                    ========================================= */

                    if (
                        !form.checkValidity()
                    ) {


                        form.reportValidity();


                        return;


                    }


                    /* =========================================
                       BUTTON
                    ========================================= */

                    const submitButton =

                        form.querySelector(
                            ".submit-button"
                        );


                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        "⏳ Memproses Pendaftaran...";


                    /* =========================================
                       PROCESS
                    ========================================= */

                    setTimeout(

                        function () {


                            /* =================================
                               CREATE CODE
                            ================================= */

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


                            /* =================================
                               GET DATA
                            ================================= */

                            const namaAnak =

                                document.getElementById(
                                    "namaAnak"
                                ).value.trim();


                            const namaWali =

                                document.getElementById(
                                    "namaWali"
                                ).value.trim();


                            const whatsapp =

                                document.getElementById(
                                    "whatsapp"
                                ).value.trim();


                            /* =================================
                               FORMAT NUMBER
                            ================================= */

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


                            else if (
                                phoneNumber.startsWith(
                                    "62"
                                )
                            ) {


                                phoneNumber =
                                    phoneNumber;


                            }


                            /* =================================
                               ADMIN NUMBER

                               GANTI NOMOR INI
                            ================================= */

                            const adminNumber =

                                "6281234567890";


                            /* =================================
                               WHATSAPP MESSAGE
                            ================================= */

                            const message =

                                `Halo Admin RA Miftahul Hikmah 👋

Saya sudah melakukan pendaftaran.

👶 Nama Anak: ${namaAnak}

👨‍👩‍👧 Nama Wali: ${namaWali}

📱 WhatsApp: ${phoneNumber}

🔑 Kode Pendaftaran: ${code}

Mohon informasi proses selanjutnya.

Terima kasih 🙏`;


                            /* =================================
                               CREATE WHATSAPP URL
                            ================================= */

                            const whatsappURL =

                                "https://wa.me/"
                                +
                                adminNumber
                                +
                                "?text="
                                +
                                encodeURIComponent(
                                    message
                                );


                            whatsappButton.href =
                                whatsappURL;


                            /* =================================
                               SAVE DATA LOCAL

                               UNTUK DEMO WEBSITE
                            ================================= */

                            const registrationData = {

                                code:
                                    code,

                                namaAnak:
                                    namaAnak,

                                namaWali:
                                    namaWali,

                                whatsapp:
                                    phoneNumber,

                                status:
                                    "Menunggu Verifikasi",

                                date:
                                    new Date().toLocaleDateString(
                                        "id-ID"
                                    )

                            };


                            localStorage.setItem(

                                "raRegistration_"
                                +
                                code,

                                JSON.stringify(
                                    registrationData
                                )

                            );


                            /* =================================
                               HIDE FORM
                            ================================= */

                            form.style.display =
                                "none";


                            /* =================================
                               SHOW SUCCESS
                            ================================= */

                            successBox.classList.add(
                                "show"
                            );


                            /* =================================
                               SCROLL
                            ================================= */

                            setTimeout(

                                function () {


                                    successBox.scrollIntoView(

                                        {

                                            behavior:
                                                "smooth",

                                            block:
                                                "center"

                                        }

                                    );


                                },

                                150

                            );


                        },

                        800

                    );


                }

            );


        }


    }

);


</script>


</body>

</html>
