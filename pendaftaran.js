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
        content="Pendaftaran Peserta Didik Baru RA Miftahul Hikmah"
    >

    <title>
        Pendaftaran | RA Miftahul Hikmah
    </title>


    <!-- =====================================================
         GOOGLE FONT
    ===================================================== -->

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

        linear-gradient(
            180deg,
            #fff9fc 0%,
            #f9f5ff 35%,
            #f4fbff 70%,
            #fffaf2 100%
        );

}


button,
input,
textarea,
select {

    font-family:
        inherit;

}


/* =====================================================
   CONTAINER
===================================================== */

.au-container {

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

.pg-bg {

    position:
        fixed;

    inset:
        0;

    z-index:
        -1;

    overflow:
        hidden;

    pointer-events:
        none;

}


.pg-bg::before {

    content:
        "";

    position:
        absolute;

    width:
        450px;

    height:
        450px;

    top:
        5%;

    left:
        -250px;

    border-radius:
        50%;

    background:
        rgba(255,139,184,.20);

    filter:
        blur(90px);

    animation:
        blobOne 15s ease-in-out infinite;

}


.pg-bg::after {

    content:
        "";

    position:
        absolute;

    width:
        450px;

    height:
        450px;

    right:
        -250px;

    bottom:
        5%;

    border-radius:
        50%;

    background:
        rgba(126,189,255,.20);

    filter:
        blur(90px);

    animation:
        blobTwo 17s ease-in-out infinite;

}


@keyframes blobOne {

    0%,
    100% {

        transform:
            translate(0,0)
            scale(1);

    }

    50% {

        transform:
            translate(120px,70px)
            scale(1.15);

    }

}


@keyframes blobTwo {

    0%,
    100% {

        transform:
            translate(0,0)
            scale(1);

    }

    50% {

        transform:
            translate(-120px,-70px)
            scale(1.15);

    }

}


/* =====================================================
   FLOATING DECORATION
===================================================== */

.float-shape {

    position:
        fixed;

    z-index:
        -1;

    pointer-events:
        none;

    opacity:
        .30;

    animation:
        shapeFloat 7s ease-in-out infinite;

}


.float-shape.one {

    top:
        28%;

    left:
        4%;

    font-size:
        34px;

}


.float-shape.two {

    top:
        65%;

    right:
        5%;

    font-size:
        40px;

    animation-delay:
        2s;

}


.float-shape.three {

    bottom:
        8%;

    left:
        7%;

    font-size:
        38px;

    animation-delay:
        1s;

}


@keyframes shapeFloat {

    0%,
    100% {

        transform:
            translateY(0)
            rotate(0);

    }

    50% {

        transform:
            translateY(-18px)
            rotate(10deg);

    }

}


/* =====================================================
   HEADER
===================================================== */

.au-header {

    position:
        relative;

    z-index:
        100;

    background:
        rgba(255,255,255,.82);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid rgba(255,255,255,.9);

}


.au-header-inner {

    min-height:
        74px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    gap:
        12px;

}


.au-brand {

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


.au-logo {

    width:
        46px;

    height:
        46px;

    flex:
        0 0 auto;

    display:
        grid;

    place-items:
        center;

    border-radius:
        15px;

    font-size:
        24px;

    background:

        linear-gradient(
            135deg,
            #fff1a8,
            #ffd5e5,
            #d6efff
        );

    box-shadow:
        0 8px 25px rgba(239,79,130,.18);

    animation:
        logoFloat 4s ease-in-out infinite;

}


@keyframes logoFloat {

    0%,
    100% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(-5px)
            rotate(5deg);

    }

}


.au-brand h1 {

    margin:
        0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        18px;

    line-height:
        1;

}


.au-brand h1 span {

    color:
        #ef4f82;

}


.au-brand p {

    margin:
        4px 0 0;

    color:
        #817991;

    font-size:
        10px;

}


.au-visit {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    padding:
        10px 13px;

    border-radius:
        13px;

    text-decoration:
        none;

    color:
        white;

    white-space:
        nowrap;

    font-size:
        11px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #ef4f82,
            #ff7da7
        );

    box-shadow:
        0 9px 20px rgba(239,79,130,.25);

    transition:
        .3s ease;

}


.au-visit:hover {

    transform:
        translateY(-3px);

}


/* =====================================================
   NAVBAR
===================================================== */

.au-nav {

    position:
        sticky;

    top:
        0;

    z-index:
        99;

    background:
        rgba(255,255,255,.92);

    backdrop-filter:
        blur(20px);

    border-bottom:
        1px solid rgba(120,90,180,.08);

}


.au-nav-inner {

    width:
        min(
            1180px,
            calc(100% - 20px)
        );

    margin:
        auto;

    display:
        flex;

    gap:
        6px;

    padding:
        8px 0;

    overflow-x:
        auto;

    scrollbar-width:
        none;

}


.au-nav-inner::-webkit-scrollbar {

    display:
        none;

}


.au-nav-link {

    flex:
        0 0 auto;

    min-width:
        62px;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    gap:
        3px;

    padding:
        8px 9px;

    border-radius:
        14px;

    text-decoration:
        none;

    color:
        #6f687d;

    font-size:
        9px;

    font-weight:
        900;

    transition:
        .3s ease;

}


.au-nav-link:hover {

    transform:
        translateY(-2px);

    background:
        #f5f1ff;

}


.au-nav-link.active {

    color:
        white;

    background:

        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

    box-shadow:
        0 7px 18px rgba(125,108,255,.25);

}


.au-nav-icon {

    font-size:
        19px;

}


.au-more-wrap {

    flex:
        0 0 auto;

}


.au-more-button {

    min-width:
        68px;

    border:
        none;

    cursor:
        pointer;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;

    justify-content:
        center;

    gap:
        3px;

    padding:
        8px 10px;

    border-radius:
        14px;

    background:
        #f5f2fb;

    color:
        #6b617b;

    font-family:
        inherit;

    font-size:
        9px;

    font-weight:
        900;

}


.au-more-button span {

    font-size:
        18px;

}


/* =====================================================
   DROPDOWN
===================================================== */

.au-more-menu {

    position:
        fixed;

    top:
        138px;

    left:
        12px;

    right:
        12px;

    z-index:
        300;

    display:
        none;

    overflow:
        hidden;

    border-radius:
        22px;

    background:
        rgba(255,255,255,.98);

    box-shadow:
        0 20px 55px rgba(57,40,90,.18);

    opacity:
        0;

    transform:
        translateY(-10px);

    transition:
        .25s ease;

}


.au-more-menu.open {

    display:
        block;

    opacity:
        1;

    transform:
        translateY(0);

}


.au-more-title {

    padding:
        16px 18px;

    font-size:
        14px;

    font-weight:
        900;

    border-bottom:
        1px solid #f0edf5;

}


.au-more-menu a {

    display:
        flex;

    align-items:
        center;

    gap:
        13px;

    padding:
        15px 18px;

    text-decoration:
        none;

    color:
        #665e72;

    font-size:
        14px;

    font-weight:
        800;

    border-bottom:
        1px solid #f5f2f7;

}


/* =====================================================
   HERO BLOG
===================================================== */

.reg-hero {

    position:
        relative;

    overflow:
        hidden;

    padding:
        80px 0 60px;

}


.hero-grid {

    display:
        grid;

    gap:
        30px;

    align-items:
        center;

}


.hero-content {

    position:
        relative;

    z-index:
        2;

}


.reg-badge {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        8px;

    padding:
        9px 15px;

    border-radius:
        50px;

    background:
        rgba(255,255,255,.85);

    color:
        #8466bd;

    font-size:
        10px;

    font-weight:
        900;

    box-shadow:
        0 10px 30px rgba(80,60,120,.08);

}


.reg-hero h2 {

    margin:
        17px 0 0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        clamp(45px,10vw,76px);

    line-height:
        .95;

}


.reg-hero h2 span {

    display:
        block;

    color:
        #ef4f82;

}


.reg-hero p {

    max-width:
        650px;

    margin:
        18px 0 0;

    color:
        #766d84;

    font-size:
        14px;

    line-height:
        1.8;

}


.hero-actions {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        10px;

    margin-top:
        22px;

}


.hero-primary {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    padding:
        14px 20px;

    border-radius:
        15px;

    text-decoration:
        none;

    color:
        white;

    font-size:
        12px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #ef4f82,
            #ff7da7
        );

    box-shadow:
        0 12px 28px rgba(239,79,130,.25);

    transition:
        .3s ease;

}


.hero-secondary {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    padding:
        14px 20px;

    border-radius:
        15px;

    text-decoration:
        none;

    color:
        #6e6079;

    font-size:
        12px;

    font-weight:
        900;

    background:
        rgba(255,255,255,.85);

    box-shadow:
        0 12px 28px rgba(70,50,110,.08);

    transition:
        .3s ease;

}


.hero-primary:hover,
.hero-secondary:hover {

    transform:
        translateY(-4px);

}


/* HERO BLOG CARD */

.hero-card {

    position:
        relative;

    overflow:
        hidden;

    padding:
        24px;

    border-radius:
        30px;

    background:
        rgba(255,255,255,.82);

    border:
        1px solid rgba(255,255,255,.9);

    box-shadow:
        0 25px 60px rgba(70,50,110,.12);

}


.hero-card::before {

    content:
        "";

    position:
        absolute;

    width:
        170px;

    height:
        170px;

    top:
        -80px;

    right:
        -70px;

    border-radius:
        50%;

    background:
        rgba(255,190,220,.25);

}


.hero-card-top {

    position:
        relative;

    z-index:
        2;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

}


.hero-card-label {

    padding:
        7px 12px;

    border-radius:
        50px;

    background:
        #fff0f5;

    color:
        #ef4f82;

    font-size:
        9px;

    font-weight:
        900;

}


.hero-card-icon {

    font-size:
        40px;

}


.hero-card h3 {

    position:
        relative;

    z-index:
        2;

    margin:
        20px 0 7px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        28px;

    line-height:
        1;

}


.hero-card p {

    position:
        relative;

    z-index:
        2;

    margin:
        0;

    font-size:
        11px;

}


.hero-card-steps {

    position:
        relative;

    z-index:
        2;

    display:
        grid;

    gap:
        10px;

    margin-top:
        20px;

}


.hero-mini-step {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    padding:
        11px;

    border-radius:
        15px;

    background:
        #faf8ff;

}


.hero-mini-number {

    width:
        32px;

    height:
        32px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        10px;

    color:
        white;

    font-size:
        9px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

}


.hero-mini-step b {

    font-size:
        10px;

}


/* =====================================================
   BLOG SECTION
===================================================== */

.blog-section {

    padding:
        30px 0 70px;

}


.blog-layout {

    display:
        grid;

    gap:
        22px;

    align-items:
        start;

}


/* =====================================================
   BLOG CONTENT
===================================================== */

.blog-content {

    display:
        grid;

    gap:
        20px;

}


.blog-card {

    position:
        relative;

    overflow:
        hidden;

    padding:
        22px;

    border-radius:
        25px;

    background:
        rgba(255,255,255,.82);

    border:
        1px solid rgba(255,255,255,.95);

    box-shadow:
        0 16px 45px rgba(70,50,110,.09);

}


.article-header {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        14px;

}


.article-icon {

    width:
        55px;

    height:
        55px;

    flex:
        0 0 auto;

    display:
        grid;

    place-items:
        center;

    border-radius:
        18px;

    font-size:
        27px;

    background:

        linear-gradient(
            135deg,
            #fff1f6,
            #eee9ff
        );

}


.article-meta {

    display:
        flex;

    flex-wrap:
        wrap;

    gap:
        6px;

    margin-bottom:
        6px;

}


.article-tag {

    padding:
        5px 9px;

    border-radius:
        30px;

    background:
        #f2edff;

    color:
        #8366bd;

    font-size:
        8px;

    font-weight:
        900;

}


.article-date {

    padding:
        5px 0;

    color:
        #a198ad;

    font-size:
        8px;

    font-weight:
        800;

}


.article-header h3 {

    margin:
        0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        24px;

    line-height:
        1.05;

}


.article-text {

    margin-top:
        18px;

    color:
        #756d82;

    font-size:
        12px;

    line-height:
        1.85;

}


/* =====================================================
   FLOW
===================================================== */

.registration-flow {

    display:
        grid;

    gap:
        12px;

    margin-top:
        22px;

}


.flow-item {

    position:
        relative;

    display:
        grid;

    grid-template-columns:
        46px 1fr;

    gap:
        13px;

    align-items:
        center;

    padding:
        13px;

    border-radius:
        18px;

    background:
        #faf9ff;

    border:
        1px solid #f0edf7;

    transition:
        .3s ease;

}


.flow-item:hover {

    transform:
        translateX(5px);

}


.flow-number {

    width:
        46px;

    height:
        46px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        15px;

    color:
        white;

    font-size:
        12px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #7b6cff,
            #a47fff
        );

}


.flow-item:nth-child(2)
.flow-number {

    background:

        linear-gradient(
            135deg,
            #ef4f82,
            #ff7da7
        );

}


.flow-item:nth-child(3)
.flow-number {

    background:

        linear-gradient(
            135deg,
            #f7a938,
            #ffc75f
        );

}


.flow-item:nth-child(4)
.flow-number {

    background:

        linear-gradient(
            135deg,
            #25c86a,
            #5de49a
        );

}


.flow-item:nth-child(5)
.flow-number {

    background:

        linear-gradient(
            135deg,
            #4b9cff,
            #7ac2ff
        );

}


.flow-item b {

    display:
        block;

    font-size:
        12px;

}


.flow-item small {

    display:
        block;

    margin-top:
        4px;

    color:
        #92899b;

    font-size:
        9px;

}


/* =====================================================
   BUTTON
===================================================== */

.start-registration {

    width:
        100%;

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
        22px;

    padding:
        16px;

    border-radius:
        16px;

    color:
        white;

    font-family:
        inherit;

    font-size:
        12px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #ef4f82,
            #ff7da7
        );

    box-shadow:
        0 13px 28px rgba(239,79,130,.25);

    transition:
        .3s ease;

}


.start-registration:hover {

    transform:
        translateY(-4px);

}


/* =====================================================
   FORM AREA
===================================================== */

.registration-area {

    display:
        none;

}


.registration-area.show {

    display:
        block;

    animation:
        formAppear .6s ease;

}


@keyframes formAppear {

    from {

        opacity:
            0;

        transform:
            translateY(30px);

    }

    to {

        opacity:
            1;

        transform:
            translateY(0);

    }

}


.form-wrapper {

    position:
        relative;

    overflow:
        hidden;

    padding:
        22px;

    border-radius:
        28px;

    background:
        rgba(255,255,255,.88);

    border:
        1px solid rgba(255,255,255,.95);

    box-shadow:
        0 20px 50px rgba(70,50,110,.10);

}


.form-wrapper::before {

    content:
        "";

    position:
        absolute;

    width:
        180px;

    height:
        180px;

    top:
        -100px;

    right:
        -90px;

    border-radius:
        50%;

    background:
        rgba(164,127,255,.12);

}


.form-title {

    position:
        relative;

    z-index:
        2;

    display:
        flex;

    align-items:
        center;

    gap:
        12px;

    margin-bottom:
        20px;

}


.form-title-icon {

    width:
        50px;

    height:
        50px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        16px;

    font-size:
        24px;

    background:

        linear-gradient(
            135deg,
            #fff1f6,
            #eee9ff
        );

}


.form-title h3 {

    margin:
        0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        23px;

    line-height:
        1;

}


.form-title p {

    margin:
        5px 0 0;

    color:
        #8b8296;

    font-size:
        10px;

}


/* =====================================================
   FORM STEP
===================================================== */

.form-step {

    position:
        relative;

    z-index:
        2;

    padding:
        17px;

    margin-bottom:
        14px;

    border-radius:
        20px;

    background:
        #fbfaff;

    border:
        1px solid #f0edf7;

}


.step-heading {

    display:
        flex;

    align-items:
        center;

    gap:
        9px;

    margin-bottom:
        16px;

}


.step-number {

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


.step-heading h4 {

    margin:
        0;

    font-size:
        13px;

}


/* =====================================================
   FORM GRID
===================================================== */

.form-grid {

    display:
        grid;

    gap:
        13px;

}


.form-group {

    display:
        grid;

    gap:
        7px;

}


.form-group label {

    color:
        #5e5669;

    font-size:
        11px;

    font-weight:
        900;

}


.form-group label span {

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

    border:
        1px solid #e8e3ef;

    outline:
        none;

    padding:
        13px;

    border-radius:
        14px;

    background:
        white;

    color:
        #40374d;

    font-family:
        inherit;

    font-size:
        12px;

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


.form-group input::placeholder,
.form-group textarea::placeholder {

    color:
        #b2aab9;

}


/* =====================================================
   GENDER
===================================================== */

.gender-options {

    display:
        grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:
        9px;

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
        6px;

    padding:
        10px;

    border-radius:
        14px;

    background:
        white;

    border:
        1px solid #e8e3ef;

    color:
        #756d7d;

    font-size:
        11px;

    font-weight:
        800;

}


.gender-option input:checked
+
.gender-box {

    color:
        #7259bc;

    border-color:
        #a47fff;

    background:
        #f5f1ff;

    box-shadow:
        0 6px 18px rgba(125,108,255,.12);

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
        9px;

    padding:
        13px;

    border-radius:
        15px;

    background:
        #fff9ed;

    color:
        #776e65;

    font-size:
        10px;

    line-height:
        1.65;

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
   SUBMIT
===================================================== */

.submit-button {

    width:
        100%;

    min-height:
        54px;

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

    padding:
        15px;

    border-radius:
        16px;

    color:
        white;

    font-family:
        inherit;

    font-size:
        13px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #ef4f82,
            #ff7ea7
        );

    box-shadow:
        0 13px 28px rgba(239,79,130,.25);

    transition:
        .3s ease;

}


.submit-button:hover {

    transform:
        translateY(-3px);

}


.submit-button:disabled {

    cursor:
        not-allowed;

    opacity:
        .75;

}


/* =====================================================
   SUCCESS AREA
===================================================== */

.success-area {

    display:
        none;

}


.success-area.show {

    display:
        block;

    animation:
        successAppear .6s ease;

}


@keyframes successAppear {

    from {

        opacity:
            0;

        transform:
            scale(.95);

    }

    to {

        opacity:
            1;

        transform:
            scale(1);

    }

}


.success-card {

    position:
        relative;

    overflow:
        hidden;

    padding:
        28px;

    text-align:
        center;

    border-radius:
        30px;

    background:

        linear-gradient(
            135deg,
            #effff5,
            #f7f3ff,
            #fff8ed
        );

    border:
        1px solid #d9f5e3;

    box-shadow:
        0 20px 50px rgba(50,120,80,.10);

}


.success-icon {

    width:
        80px;

    height:
        80px;

    margin:
        auto;

    display:
        grid;

    place-items:
        center;

    border-radius:
        50%;

    font-size:
        40px;

    background:
        white;

    box-shadow:
        0 12px 30px rgba(50,120,80,.12);

}


.success-card h2 {

    margin:
        18px 0 7px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        32px;

    line-height:
        1;

    color:
        #287344;

}


.success-card p {

    max-width:
        500px;

    margin:
        auto;

    color:
        #69796e;

    font-size:
        11px;

    line-height:
        1.8;

}


/* =====================================================
   REGISTRATION CODE
===================================================== */

.registration-code-box {

    margin:
        22px auto;

    padding:
        18px;

    border-radius:
        20px;

    background:
        white;

    box-shadow:
        0 12px 30px rgba(70,50,110,.08);

}


.registration-code-label {

    color:
        #897f94;

    font-size:
        9px;

    font-weight:
        900;

}


.registration-code {

    margin-top:
        8px;

    color:
        #7b5ac8;

    font-size:
        23px;

    font-weight:
        900;

    letter-spacing:
        1px;

}


.registration-name {

    margin-top:
        5px;

    color:
        #777080;

    font-size:
        10px;

}


/* =====================================================
   SUCCESS STEPS
===================================================== */

.success-steps {

    display:
        grid;

    gap:
        10px;

    margin:
        20px 0;

    text-align:
        left;

}


.success-step {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    padding:
        12px;

    border-radius:
        15px;

    background:
        rgba(255,255,255,.75);

}


.success-step-icon {

    width:
        38px;

    height:
        38px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        12px;

    background:
        white;

    font-size:
        17px;

}


.success-step div {

    font-size:
        10px;

}


.success-step b {

    display:
        block;

    margin-bottom:
        3px;

}


/* =====================================================
   WHATSAPP BUTTON
===================================================== */

.whatsapp-button {

    width:
        100%;

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

    padding:
        16px;

    border-radius:
        16px;

    color:
        white;

    font-family:
        inherit;

    font-size:
        12px;

    font-weight:
        900;

    background:

        linear-gradient(
            135deg,
            #25d366,
            #56e48c
        );

    box-shadow:
        0 13px 28px rgba(37,211,102,.20);

    transition:
        .3s ease;

}


.whatsapp-button:hover {

    transform:
        translateY(-4px);

}


.new-registration-button {

    width:
        100%;

    border:
        none;

    cursor:
        pointer;

    margin-top:
        10px;

    padding:
        14px;

    border-radius:
        15px;

    color:
        #746984;

    background:
        rgba(255,255,255,.80);

    font-family:
        inherit;

    font-size:
        11px;

    font-weight:
        900;

}


/* =====================================================
   SIDEBAR
===================================================== */

.blog-sidebar {

    display:
        grid;

    gap:
        16px;

}


.sidebar-card {

    position:
        relative;

    overflow:
        hidden;

    padding:
        19px;

    border-radius:
        23px;

    background:
        rgba(255,255,255,.82);

    border:
        1px solid rgba(255,255,255,.95);

    box-shadow:
        0 14px 38px rgba(70,50,110,.08);

}


.sidebar-card h3 {

    margin:
        0 0 8px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        21px;

    line-height:
        1;

}


.sidebar-card h3 span {

    color:
        #ef4f82;

}


.sidebar-card p {

    margin:
        0;

    color:
        #786f84;

    font-size:
        10px;

    line-height:
        1.7;

}


/* =====================================================
   STATUS
===================================================== */

.status-card {

    background:

        linear-gradient(
            135deg,
            #f1edff,
            #fff4f8,
            #edf8ff
        );

}


.status-input {

    width:
        100%;

    min-height:
        48px;

    margin-top:
        15px;

    border:
        1px solid #e5dff0;

    outline:
        none;

    padding:
        12px;

    border-radius:
        14px;

    background:
        white;

    font-family:
        inherit;

    font-size:
        11px;

}


.status-input:focus {

    border-color:
        #a47fff;

    box-shadow:
        0 0 0 4px rgba(164,127,255,.10);

}


.status-button {

    width:
        100%;

    min-height:
        46px;

    border:
        none;

    cursor:
        pointer;

    margin-top:
        9px;

    border-radius:
        14px;

    color:
        white;

    font-family:
        inherit;

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

}


.status-result {

    display:
        none;

    margin-top:
        13px;

    padding:
        13px;

    border-radius:
        14px;

    font-size:
        10px;

    line-height:
        1.7;

}


.status-result.show {

    display:
        block;

}


.status-result.waiting {

    color:
        #8b6800;

    background:
        #fff8dd;

}


.status-result.success {

    color:
        #287344;

    background:
        #effff5;

}


.status-result.error {

    color:
        #a33f4f;

    background:
        #fff0f2;

}


/* =====================================================
   INFO LIST
===================================================== */

.info-list {

    display:
        grid;

    gap:
        9px;

    margin-top:
        15px;

}


.info-list-item {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    padding:
        10px;

    border-radius:
        14px;

    background:
        #faf9ff;

}


.info-list-icon {

    width:
        35px;

    height:
        35px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        11px;

    background:
        white;

    font-size:
        16px;

}


.info-list-item b {

    display:
        block;

    font-size:
        10px;

}


.info-list-item small {

    display:
        block;

    margin-top:
        3px;

    color:
        #978e9f;

    font-size:
        8px;

}


/* =====================================================
   WHATSAPP HELP
===================================================== */

.help-card {

    background:

        linear-gradient(
            135deg,
            #fff1f6,
            #f1edff,
            #e8f7ff
        );

}


.help-button {

    width:
        100%;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    margin-top:
        15px;

    padding:
        13px;

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
            #25d366,
            #56e48c
        );

}


/* =====================================================
   BENEFIT
===================================================== */

.benefit-section {

    padding:
        20px 0 65px;

}


.section-heading {

    text-align:
        center;

    margin-bottom:
        25px;

}


.section-badge {

    display:
        inline-block;

    padding:
        7px 13px;

    border-radius:
        30px;

    background:
        #f0eaff;

    color:
        #8864c9;

    font-size:
        10px;

    font-weight:
        900;

}


.section-heading h2 {

    margin:
        10px 0;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        36px;

    line-height:
        1.1;

}


.section-heading h2 span {

    display:
        block;

    color:
        #ef4f82;

}


.benefit-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:
        12px;

}


.benefit-card {

    min-height:
        160px;

    padding:
        17px 10px;

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
        21px;

    background:
        rgba(255,255,255,.80);

    box-shadow:
        0 13px 32px rgba(70,50,100,.08);

    transition:
        .3s ease;

}


.benefit-card:hover {

    transform:
        translateY(-6px);

}


.benefit-card span {

    display:
        block;

    margin-bottom:
        8px;

    font-size:
        31px;

}


.benefit-card b {

    display:
        block;

    font-size:
        11px;

}


.benefit-card small {

    display:
        block;

    margin-top:
        5px;

    color:
        #8b8296;

    font-size:
        9px;

    line-height:
        1.5;

}


/* =====================================================
   FOOTER
===================================================== */

.au-footer {

    padding:
        40px 0 0;

    background:

        linear-gradient(
            135deg,
            #302843,
            #403556
        );

    color:
        white;

}


.au-footer-grid {

    display:
        grid;

    gap:
        24px;

    text-align:
        center;

}


.au-footer h3 {

    margin:
        0 0 10px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        21px;

}


.au-footer h3 span {

    color:
        #ff8db3;

}


.au-footer p {

    margin:
        0 0 7px;

    color:
        #c9c1d7;

    font-size:
        12px;

    line-height:
        1.7;

}


.au-footer a {

    color:
        #c9c1d7;

    text-decoration:
        none;

}


.au-copyright {

    margin-top:
        30px;

    padding:
        17px 10px;

    text-align:
        center;

    border-top:
        1px solid rgba(255,255,255,.08);

    color:
        #aaa0bc;

    font-size:
        10px;

}


/* =====================================================
   REVEAL
===================================================== */

.au-reveal {

    opacity:
        0;

    transform:
        translateY(25px);

    transition:

        opacity .8s ease,
        transform .8s cubic-bezier(.2,.8,.2,1);

}


.au-reveal.au-show {

    opacity:
        1;

    transform:
        translateY(0);

}


/* =====================================================
   TABLET
===================================================== */

@media (min-width: 600px) {

    .benefit-grid {

        grid-template-columns:
            repeat(4,1fr);

    }

}


/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 769px) {

    .au-header-inner {

        min-height:
            90px;

    }

    .au-logo {

        width:
            55px;

        height:
            55px;

        font-size:
            29px;

    }

    .au-brand h1 {

        font-size:
            25px;

    }

    .au-brand p {

        font-size:
            13px;

    }

    .au-visit {

        padding:
            13px 22px;

        font-size:
            13px;

    }

    .au-nav-inner {

        justify-content:
            center;

        overflow:
            visible;

    }

    .au-nav-link {

        flex-direction:
            row;

        min-width:
            auto;

        font-size:
            12px;

        padding:
            10px 15px;

    }

    .au-more-wrap {

        display:
            none;

    }

    .hero-grid {

        grid-template-columns:
            1.2fr .8fr;

    }

    .blog-layout {

        grid-template-columns:
            minmax(0,1fr)
            320px;

    }

    .form-grid.two {

        grid-template-columns:
            repeat(2,1fr);

    }

    .au-footer-grid {

        grid-template-columns:
            repeat(3,1fr);

        text-align:
            left;

    }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 480px) {

    .au-container {

        width:
            calc(100% - 24px);

    }

    .au-header-inner {

        min-height:
            68px;

    }

    .au-logo {

        width:
            40px;

        height:
            40px;

        font-size:
            21px;

    }

    .au-brand {

        gap:
            8px;

    }

    .au-brand h1 {

        font-size:
            15px;

    }

    .au-brand p {

        font-size:
            8px;

        white-space:
            nowrap;

    }

    .au-visit {

        padding:
            9px 10px;

        font-size:
            9px;

    }

    .au-nav-inner {

        width:
            calc(100% - 12px);

        gap:
            4px;

    }

    .au-nav-link {

        min-width:
            58px;

        padding:
            7px;

        font-size:
            8px;

    }

    .au-more-menu {

        top:
            126px;

        left:
            8px;

        right:
            8px;

    }

    .reg-hero {

        padding:
            50px 0 40px;

    }

    .reg-hero h2 {

        font-size:
            43px;

    }

    .reg-hero p {

        font-size:
            11px;

    }

    .hero-card {

        padding:
            18px;

    }

    .blog-section {

        padding:
            20px 0 50px;

    }

    .blog-card {

        padding:
            16px;

        border-radius:
            20px;

    }

    .article-header h3 {

        font-size:
            20px;

    }

    .article-icon {

        width:
            48px;

        height:
            48px;

        font-size:
            23px;

    }

    .article-text {

        font-size:
            10px;

    }

    .form-wrapper {

        padding:
            11px;

        border-radius:
            20px;

    }

    .form-step {

        padding:
            11px;

        border-radius:
            16px;

    }

    .form-group input,
    .form-group select,
    .form-group textarea {

        font-size:
            11px;

    }

    .section-heading h2 {

        font-size:
            29px;

    }

}


/* =====================================================
   REDUCE MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

    * {

        animation:
            none !important;

        transition:
            none !important;

        scroll-behavior:
            auto !important;

    }

}


</style>

</head>


<body>


<!-- =====================================================
     BACKGROUND
===================================================== -->

<div class="pg-bg"></div>

<div class="float-shape one">
    ⭐
</div>

<div class="float-shape two">
    🌸
</div>

<div class="float-shape three">
    🫧
</div>


<!-- =====================================================
     HEADER
===================================================== -->

<header class="au-header">

    <div class="au-container au-header-inner">


        <a
            href="index.html"
            class="au-brand"
        >

            <div class="au-logo">
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
            href="#pendaftaran"
            class="au-visit"
        >

            📝 Daftar Sekarang

        </a>


    </div>

</header>


<!-- =====================================================
     NAVBAR
===================================================== -->

<nav class="au-nav">

    <div class="au-nav-inner">


        <a
            href="index.html"
            class="au-nav-link"
        >

            <span class="au-nav-icon">
                🏠
            </span>

            HOME

        </a>


        <a
            href="about.html"
            class="au-nav-link"
        >

            <span class="au-nav-icon">
                👥
            </span>

            ABOUT

        </a>


        <a
            href="programs.html"
            class="au-nav-link"
        >

            <span class="au-nav-icon">
                📚
            </span>

            PROGRAMS

        </a>


        <a
            href="gallery.html"
            class="au-nav-link"
        >

            <span class="au-nav-icon">
                🖼️
            </span>

            GALLERY

        </a>


        <div class="au-more-wrap">

            <button
                type="button"
                class="au-more-button"
                id="auMoreButton"
            >

                <span>
                    ✨
                </span>

                MORE

            </button>

        </div>


    </div>

</nav>


<!-- =====================================================
     MORE MENU
===================================================== -->

<div
    class="au-more-menu"
    id="auMoreMenu"
>


    <div class="au-more-title">

        ✨ Menu Lainnya

    </div>


    <a href="classes.html">
        🎓 Classes
    </a>


    <a href="blog.html">
        🖍️ Blog
    </a>


    <a href="parents.html">
        💛 Parents
    </a>


    <a href="contact.html">
        ✉️ Contact
    </a>


    <a href="pendaftaran.html">
        📝 Pendaftaran
    </a>


</div>


<!-- =====================================================
     HERO
===================================================== -->

<section class="reg-hero">

    <div class="au-container hero-grid">


        <div
            class="hero-content
                   au-reveal"
        >


            <div class="reg-badge">

                🎉 PENDAFTARAN PESERTA DIDIK BARU

            </div>


            <h2>

                Yuk Jadi Bagian

                <span>
                    Keluarga Kami!
                </span>

            </h2>


            <p>

                Daftarkan buah hati Anda di
                RA Miftahul Hikmah melalui proses
                pendaftaran online yang mudah,
                cepat dan nyaman.

            </p>


            <div class="hero-actions">


                <a
                    href="#cara-daftar"
                    class="hero-secondary"
                >

                    📖 Cara Daftar

                </a>


                <a
                    href="#pendaftaran"
                    class="hero-primary"
                >

                    🚀 Mulai Daftar

                </a>


            </div>


        </div>


        <!-- HERO CARD -->

        <div
            class="hero-card
                   au-reveal"
        >


            <div class="hero-card-top">

                <div class="hero-card-label">

                    ✨ ALUR PENDAFTARAN

                </div>


                <div class="hero-card-icon">

                    🎒

                </div>


            </div>


            <h3>

                Daftar Jadi Lebih Mudah

            </h3>


            <p>

                Ikuti langkah sederhana berikut.

            </p>


            <div class="hero-card-steps">


                <div class="hero-mini-step">

                    <div class="hero-mini-number">
                        01
                    </div>

                    <b>
                        Isi Data
                    </b>

                </div>


                <div class="hero-mini-step">

                    <div class="hero-mini-number">
                        02
                    </div>

                    <b>
                        Dapatkan Kode
                    </b>

                </div>


                <div class="hero-mini-step">

                    <div class="hero-mini-number">
                        03
                    </div>

                    <b>
                        Konfirmasi WhatsApp
                    </b>

                </div>


            </div>


        </div>


    </div>

</section>


<!-- =====================================================
     BLOG SECTION
===================================================== -->

<section
    class="blog-section"
    id="cara-daftar"
>

    <div class="au-container">


        <div class="blog-layout">


            <!-- =============================================
                 BLOG CONTENT
            ============================================== -->

            <main class="blog-content">


                <!-- =========================================
                     CARA MENDAFTAR
                ========================================== -->

                <article
                    class="blog-card
                           au-reveal"
                >


                    <div class="article-header">


                        <div class="article-icon">

                            📝

                        </div>


                        <div>


                            <div class="article-meta">

                                <span class="article-tag">

                                    PANDUAN

                                </span>


                                <span class="article-date">

                                    RA Miftahul Hikmah

                                </span>


                            </div>


                            <h3>

                                Cara Melakukan Pendaftaran

                            </h3>


                        </div>


                    </div>


                    <div class="article-text">

                        Proses pendaftaran dibuat sederhana
                        agar orang tua atau wali dapat melakukan
                        pendaftaran secara online dengan mudah.

                    </div>


                    <!-- FLOW -->

                    <div class="registration-flow">


                        <div class="flow-item">

                            <div class="flow-number">

                                01

                            </div>


                            <div>

                                <b>

                                    📝 Isi Data Pendaftaran

                                </b>


                                <small>

                                    Lengkapi data calon peserta didik
                                    dan data orang tua atau wali.

                                </small>

                            </div>

                        </div>


                        <div class="flow-item">

                            <div class="flow-number">

                                02

                            </div>


                            <div>

                                <b>

                                    📤 Kirim Pendaftaran

                                </b>


                                <small>

                                    Pastikan semua data telah
                                    diisi dengan benar.

                                </small>

                            </div>

                        </div>


                        <div class="flow-item">

                            <div class="flow-number">

                                03

                            </div>


                            <div>

                                <b>

                                    🔑 Dapatkan Kode Pendaftaran

                                </b>


                                <small>

                                    Sistem akan memberikan kode
                                    pendaftaran secara otomatis.

                                </small>

                            </div>

                        </div>


                        <div class="flow-item">

                            <div class="flow-number">

                                04

                            </div>


                            <div>

                                <b>

                                    💬 Konfirmasi WhatsApp

                                </b>


                                <small>

                                    Klik tombol WhatsApp dan
                                    kirim kode kepada Admin.

                                </small>

                            </div>

                        </div>


                        <div class="flow-item">

                            <div class="flow-number">

                                05

                            </div>


                            <div>

                                <b>

                                    📋 Cek Status Pendaftaran

                                </b>


                                <small>

                                    Gunakan kode pendaftaran
                                    untuk melihat status.

                                </small>

                            </div>

                        </div>


                    </div>


                    <button
                        type="button"
                        class="start-registration"
                        id="startRegistration"
                    >

                        🚀 Mulai Isi Formulir Pendaftaran

                    </button>


                </article>


                <!-- =========================================
                     FORM
                ========================================== -->

                <section
                    class="registration-area"
                    id="pendaftaran"
                >


                    <div class="form-wrapper">


                        <div class="form-title">


                            <div class="form-title-icon">

                                🎒

                            </div>


                            <div>

                                <h3>

                                    Formulir Pendaftaran

                                </h3>


                                <p>

                                    Lengkapi data di bawah ini

                                </p>

                            </div>


                        </div>


                        <form id="registrationForm">


                            <!-- DATA ANAK -->

                            <div class="form-step">


                                <div class="step-heading">


                                    <div class="step-number">

                                        01

                                    </div>


                                    <h4>

                                        👶 Data Calon Peserta Didik

                                    </h4>


                                </div>


                                <div class="form-grid two">


                                    <div class="form-group">

                                        <label>

                                            Nama Lengkap

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <input
                                            type="text"
                                            name="nama_anak"
                                            placeholder="Masukkan nama lengkap anak"
                                            required
                                        >

                                    </div>


                                    <div class="form-group">

                                        <label>

                                            Nama Panggilan

                                        </label>


                                        <input
                                            type="text"
                                            name="nama_panggilan"
                                            placeholder="Contoh: Aisyah"
                                        >

                                    </div>


                                    <div class="form-group">

                                        <label>

                                            Tempat Lahir

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <input
                                            type="text"
                                            name="tempat_lahir"
                                            placeholder="Contoh: Jakarta"
                                            required
                                        >

                                    </div>


                                    <div class="form-group">

                                        <label>

                                            Tanggal Lahir

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <input
                                            type="date"
                                            name="tanggal_lahir"
                                            required
                                        >

                                    </div>


                                </div>


                                <div
                                    class="form-group"
                                    style="margin-top:14px;"
                                >

                                    <label>

                                        Jenis Kelamin

                                        <span>
                                            *
                                        </span>

                                    </label>


                                    <div class="gender-options">


                                        <label class="gender-option">

                                            <input
                                                type="radio"
                                                name="jenis_kelamin"
                                                value="Laki-laki"
                                                required
                                            >

                                            <div class="gender-box">

                                                👦 Laki-laki

                                            </div>

                                        </label>


                                        <label class="gender-option">

                                            <input
                                                type="radio"
                                                name="jenis_kelamin"
                                                value="Perempuan"
                                                required
                                            >

                                            <div class="gender-box">

                                                👧 Perempuan

                                            </div>

                                        </label>


                                    </div>


                                </div>


                            </div>


                            <!-- DATA WALI -->

                            <div class="form-step">


                                <div class="step-heading">


                                    <div class="step-number">

                                        02

                                    </div>


                                    <h4>

                                        👨‍👩‍👧 Data Orang Tua / Wali

                                    </h4>


                                </div>


                                <div class="form-grid two">


                                    <div class="form-group">

                                        <label>

                                            Nama Orang Tua / Wali

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <input
                                            type="text"
                                            name="nama_wali"
                                            placeholder="Masukkan nama wali"
                                            required
                                        >

                                    </div>


                                    <div class="form-group">

                                        <label>

                                            Hubungan dengan Anak

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <select
                                            name="hubungan"
                                            required
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

                                        <label>

                                            Nomor WhatsApp

                                            <span>
                                                *
                                            </span>

                                        </label>


                                        <input
                                            type="tel"
                                            name="whatsapp"
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
                                            name="email"
                                            placeholder="email@gmail.com"
                                        >

                                    </div>


                                </div>


                            </div>


                            <!-- ALAMAT -->

                            <div class="form-step">


                                <div class="step-heading">


                                    <div class="step-number">

                                        03

                                    </div>


                                    <h4>

                                        🏠 Alamat & Informasi Tambahan

                                    </h4>


                                </div>


                                <div class="form-group">


                                    <label>

                                        Alamat Lengkap

                                        <span>
                                            *
                                        </span>

                                    </label>


                                    <textarea
                                        name="alamat"
                                        placeholder="Masukkan alamat lengkap"
                                        required
                                    ></textarea>


                                </div>


                                <div
                                    class="form-grid two"
                                    style="margin-top:14px;"
                                >


                                    <div class="form-group">

                                        <label>

                                            Program / Kelas

                                        </label>


                                        <select name="kelas">


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

                                        <label>

                                            Tahun Ajaran

                                        </label>


                                        <select
                                            name="tahun_ajaran"
                                        >

                                            <option value="2026/2027">

                                                2026 / 2027

                                            </option>


                                            <option value="2027/2028">

                                                2027 / 2028

                                            </option>


                                        </select>

                                    </div>


                                </div>


                                <div
                                    class="form-group"
                                    style="margin-top:14px;"
                                >

                                    <label>

                                        Pesan Tambahan

                                    </label>


                                    <textarea
                                        name="pesan"
                                        placeholder="Pertanyaan atau informasi tambahan..."
                                    ></textarea>


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
                                    untuk proses pendaftaran.

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


                    </div>


                </section>


                <!-- =========================================
                     SUCCESS
                ========================================== -->

                <section
                    class="success-area"
                    id="successArea"
                >


                    <div class="success-card">


                        <div class="success-icon">

                            🎉

                        </div>


                        <h2>

                            Pendaftaran Berhasil!

                        </h2>


                        <p>

                            Terima kasih telah melakukan
                            pendaftaran di RA Miftahul Hikmah.
                            Silakan simpan kode pendaftaran
                            Anda dan lanjutkan konfirmasi
                            melalui WhatsApp.

                        </p>


                        <div class="registration-code-box">


                            <div class="registration-code-label">

                                🔑 KODE PENDAFTARAN ANDA

                            </div>


                            <div
                                class="registration-code"
                                id="successCode"
                            >

                                RMH-2026-XXXX

                            </div>


                            <div
                                class="registration-name"
                                id="successName"
                            >

                                Nama Anak

                            </div>


                        </div>


                        <div class="success-steps">


                            <div class="success-step">

                                <div class="success-step-icon">

                                    💾

                                </div>


                                <div>

                                    <b>

                                        Simpan Kode

                                    </b>

                                    Simpan kode pendaftaran Anda.

                                </div>

                            </div>


                            <div class="success-step">

                                <div class="success-step-icon">

                                    💬

                                </div>


                                <div>

                                    <b>

                                        Hubungi Admin

                                    </b>

                                    Klik tombol WhatsApp di bawah.

                                </div>

                            </div>


                            <div class="success-step">

                                <div class="success-step-icon">

                                    📋

                                </div>


                                <div>

                                    <b>

                                        Cek Status

                                    </b>

                                    Gunakan kode untuk cek status.

                                </div>

                            </div>


                        </div>


                        <button
                            type="button"
                            class="whatsapp-button"
                            id="whatsappButton"
                        >

                            💬 Lanjut Konfirmasi WhatsApp

                        </button>


                        <button
                            type="button"
                            class="new-registration-button"
                            id="newRegistrationButton"
                        >

                            📝 Buat Pendaftaran Baru

                        </button>


                    </div>


                </section>


            </main>


            <!-- =============================================
                 SIDEBAR
            ============================================== -->

            <aside class="blog-sidebar">


                <!-- STATUS -->

                <div
                    class="sidebar-card
                           status-card
                           au-reveal"
                >


                    <h3>

                        Cek

                        <span>
                            Status
                        </span>

                    </h3>


                    <p>

                        Masukkan kode pendaftaran
                        untuk melihat status.

                    </p>


                    <input
                        type="text"
                        id="statusCodeInput"
                        class="status-input"
                        placeholder="Contoh: RMH-2026-AB123"
                    >


                    <button
                        type="button"
                        class="status-button"
                        id="checkStatusButton"
                    >

                        🔎 Cek Status Pendaftaran

                    </button>


                    <div
                        class="status-result"
                        id="statusResult"
                    >

                    </div>


                </div>


                <!-- INFO -->

                <div
                    class="sidebar-card
                           au-reveal"
                >


                    <h3>

                        Info

                        <span>
                            Pendaftaran
                        </span>

                    </h3>


                    <div class="info-list">


                        <div class="info-list-item">

                            <div class="info-list-icon">

                                🎓

                            </div>


                            <div>

                                <b>

                                    Pendaftaran Online

                                </b>


                                <small>

                                    Mudah dan praktis

                                </small>

                            </div>

                        </div>


                        <div class="info-list-item">

                            <div class="info-list-icon">

                                🔑

                            </div>


                            <div>

                                <b>

                                    Kode Otomatis

                                </b>


                                <small>

                                    Dapatkan kode pendaftaran

                                </small>

                            </div>

                        </div>


                        <div class="info-list-item">

                            <div class="info-list-icon">

                                💬

                            </div>


                            <div>

                                <b>

                                    WhatsApp Admin

                                </b>


                                <small>

                                    Konfirmasi lebih mudah

                                </small>

                            </div>

                        </div>


                        <div class="info-list-item">

                            <div class="info-list-icon">

                                📋

                            </div>


                            <div>

                                <b>

                                    Cek Status

                                </b>


                                <small>

                                    Pantau pendaftaran

                                </small>

                            </div>

                        </div>


                    </div>


                </div>


                <!-- HELP -->

                <div
                    class="sidebar-card
                           help-card
                           au-reveal"
                >


                    <h3>

                        Butuh

                        <span>
                            Bantuan?
                        </span>

                    </h3>


                    <p>

                        Hubungi Admin RA Miftahul
                        Hikmah melalui WhatsApp.

                    </p>


                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        class="help-button"
                    >

                        💬 Hubungi Admin

                    </a>


                </div>


            </aside>


        </div>


    </div>

</section>


<!-- =====================================================
     BENEFIT
===================================================== -->

<section class="benefit-section">

    <div class="au-container">


        <div
            class="section-heading
                   au-reveal"
        >


            <div class="section-badge">

                🌟 KENAPA KAMI?

            </div>


            <h2>

                Tempat Terbaik Untuk

                <span>
                    Tumbuh & Bersinar
                </span>

            </h2>


        </div>


        <div class="benefit-grid">


            <div
                class="benefit-card
                       au-reveal"
            >

                <span>
                    💛
                </span>


                <b>

                    Penuh Kasih Sayang

                </b>


                <small>

                    Lingkungan belajar yang
                    hangat dan nyaman.

                </small>

            </div>


            <div
                class="benefit-card
                       au-reveal"
            >

                <span>
                    🎨
                </span>


                <b>

                    Kreatif & Menyenangkan

                </b>


                <small>

                    Belajar melalui bermain.

                </small>

            </div>


            <div
                class="benefit-card
                       au-reveal"
            >

                <span>
                    📚
                </span>


                <b>

                    Belajar Berkualitas

                </b>


                <small>

                    Program sesuai perkembangan anak.

                </small>

            </div>


            <div
                class="benefit-card
                       au-reveal"
            >

                <span>
                    🌈
                </span>


                <b>

                    Tumbuh Bersama

                </b>


                <small>

                    Membantu anak percaya diri
                    dan mandiri.

                </small>

            </div>


        </div>


    </div>

</section>


<!-- =====================================================
     FOOTER
===================================================== -->

<footer class="au-footer">

    <div class="au-container">


        <div class="au-footer-grid">


            <div>

                <h3>

                    RA Miftahul

                    <span>
                        Hikmah
                    </span>

                </h3>


                <p>

                    Tempat belajar, bermain dan
                    bertumbuh dengan bahagia.

                </p>


            </div>


            <div>

                <h3>

                    Menu

                </h3>


                <p>
                    <a href="index.html">Home</a>
                </p>


                <p>
                    <a href="about.html">About</a>
                </p>


                <p>
                    <a href="programs.html">Programs</a>
                </p>


                <p>
                    <a href="pendaftaran.html">Pendaftaran</a>
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


        <div class="au-copyright">

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


        /* =================================================
           NOMOR WHATSAPP ADMIN

           GANTI NOMOR DI BAWAH INI

           CONTOH:

           081234567890

           MENJADI:

           6281234567890
        ================================================= */

        const ADMIN_WHATSAPP =
            "6281234567890";


        /* =================================================
           MORE MENU
        ================================================= */

        const moreButton =
            document.getElementById(
                "auMoreButton"
            );


        const moreMenu =
            document.getElementById(
                "auMoreMenu"
            );


        if (
            moreButton &&
            moreMenu
        ) {


            moreButton.addEventListener(
                "click",
                function (
                    event
                ) {


                    event.stopPropagation();


                    moreMenu.classList.toggle(
                        "open"
                    );


                }
            );


            document.addEventListener(
                "click",
                function (
                    event
                ) {


                    if (

                        !moreMenu.contains(
                            event.target
                        )

                        &&

                        !moreButton.contains(
                            event.target
                        )

                    ) {


                        moreMenu.classList.remove(
                            "open"
                        );


                    }


                }
            );


        }


        /* =================================================
           REVEAL ANIMATION
        ================================================= */

        const revealItems =
            document.querySelectorAll(
                ".au-reveal"
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
                                        "au-show"
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
                            0.10,

                        rootMargin:
                            "0px 0px -25px 0px"

                    }

                );


            revealItems.forEach(

                function (
                    item,
                    index
                ) {


                    item.style.transitionDelay =
                        (
                            index % 4
                        )
                        *
                        70
                        +
                        "ms";


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
                        "au-show"
                    );


                }

            );


        }


        /* =================================================
           OPEN FORM
        ================================================= */

        const startRegistration =
            document.getElementById(
                "startRegistration"
            );


        const registrationArea =
            document.getElementById(
                "pendaftaran"
            );


        if (
            startRegistration &&
            registrationArea
        ) {


            startRegistration.addEventListener(
                "click",
                function () {


                    registrationArea.classList.add(
                        "show"
                    );


                    setTimeout(

                        function () {


                            registrationArea.scrollIntoView(

                                {

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                }

                            );


                        },

                        100

                    );


                }
            );


        }


        /* =================================================
           HERO REGISTER BUTTON
        ================================================= */

        const heroRegisterLinks =
            document.querySelectorAll(
                'a[href="#pendaftaran"]'
            );


        heroRegisterLinks.forEach(

            function (
                link
            ) {


                link.addEventListener(
                    "click",
                    function () {


                        if (
                            registrationArea
                        ) {


                            registrationArea.classList.add(
                                "show"
                            );


                        }


                    }
                );


            }

        );


        /* =================================================
           GENERATE CODE
        ================================================= */

        function generateRegistrationCode() {


            const year =
                new Date().getFullYear();


            const random =
                Math.random()
                .toString(36)
                .substring(2,7)
                .toUpperCase();


            const time =
                Date.now()
                .toString()
                .slice(-3);


            return (
                "RMH-"
                +
                year
                +
                "-"
                +
                random
                +
                time
            );


        }


        /* =================================================
           FORM
        ================================================= */

        const registrationForm =
            document.getElementById(
                "registrationForm"
            );


        const successArea =
            document.getElementById(
                "successArea"
            );


        const successCode =
            document.getElementById(
                "successCode"
            );


        const successName =
            document.getElementById(
                "successName"
            );


        let currentRegistration =
            null;


        if (
            registrationForm
        ) {


            registrationForm.addEventListener(
                "submit",
                function (
                    event
                ) {


                    event.preventDefault();


                    if (
                        !registrationForm.checkValidity()
                    ) {


                        registrationForm.reportValidity();


                        return;


                    }


                    const submitButton =
                        registrationForm.querySelector(
                            ".submit-button"
                        );


                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        "⏳ Mengirim Pendaftaran...";


                    const formData =
                        new FormData(
                            registrationForm
                        );


                    const code =
                        generateRegistrationCode();


                    const registrationData = {

                        code:
                            code,

                        nama_anak:
                            formData.get(
                                "nama_anak"
                            ),

                        nama_panggilan:
                            formData.get(
                                "nama_panggilan"
                            ),

                        tempat_lahir:
                            formData.get(
                                "tempat_lahir"
                            ),

                        tanggal_lahir:
                            formData.get(
                                "tanggal_lahir"
                            ),

                        jenis_kelamin:
                            formData.get(
                                "jenis_kelamin"
                            ),

                        nama_wali:
                            formData.get(
                                "nama_wali"
                            ),

                        hubungan:
                            formData.get(
                                "hubungan"
                            ),

                        whatsapp:
                            formData.get(
                                "whatsapp"
                            ),

                        email:
                            formData.get(
                                "email"
                            ),

                        alamat:
                            formData.get(
                                "alamat"
                            ),

                        kelas:
                            formData.get(
                                "kelas"
                            ),

                        tahun_ajaran:
                            formData.get(
                                "tahun_ajaran"
                            ),

                        pesan:
                            formData.get(
                                "pesan"
                            ),

                        status:
                            "Menunggu Konfirmasi Admin",

                        tanggal:
                            new Date()
                            .toLocaleString(
                                "id-ID"
                            )

                    };


                    setTimeout(

                        function () {


                            let registrations =
                                JSON.parse(
                                    localStorage.getItem(
                                        "rmh_registrations"
                                    )
                                )
                                ||
                                [];


                            registrations.push(
                                registrationData
                            );


                            localStorage.setItem(

                                "rmh_registrations",

                                JSON.stringify(
                                    registrations
                                )

                            );


                            currentRegistration =
                                registrationData;


                            successCode.textContent =
                                registrationData.code;


                            successName.textContent =
                                registrationData.nama_anak;


                            registrationArea.classList.remove(
                                "show"
                            );


                            successArea.classList.add(
                                "show"
                            );


                            successArea.scrollIntoView(

                                {

                                    behavior:
                                        "smooth",

                                    block:
                                        "center"

                                }

                            );


                            submitButton.disabled =
                                false;


                            submitButton.innerHTML =
                                "🚀 Kirim Pendaftaran";


                        },

                        900

                    );


                }
            );


        }


        /* =================================================
           WHATSAPP
        ================================================= */

        const whatsappButton =
            document.getElementById(
                "whatsappButton"
            );


        if (
            whatsappButton
        ) {


            whatsappButton.addEventListener(
                "click",
                function () {


                    if (
                        !currentRegistration
                    ) {


                        return;


                    }


                    const message =

`Assalamu'alaikum Admin RA Miftahul Hikmah 👋

Saya telah melakukan pendaftaran peserta didik baru.

🧒 Nama Anak:
${currentRegistration.nama_anak}

👨‍👩‍👧 Nama Wali:
${currentRegistration.nama_wali}

🔑 Kode Pendaftaran:
${currentRegistration.code}

📚 Program:
${currentRegistration.kelas || "Belum dipilih"}

Mohon informasi untuk proses selanjutnya.

Terima kasih 🙏`;


                    const whatsappURL =

                        "https://wa.me/"
                        +
                        ADMIN_WHATSAPP
                        +
                        "?text="
                        +
                        encodeURIComponent(
                            message
                        );


                    window.open(

                        whatsappURL,

                        "_blank"

                    );


                }
            );


        }


        /* =================================================
           NEW REGISTRATION
        ================================================= */

        const newRegistrationButton =
            document.getElementById(
                "newRegistrationButton"
            );


        if (
            newRegistrationButton
        ) {


            newRegistrationButton.addEventListener(
                "click",
                function () {


                    successArea.classList.remove(
                        "show"
                    );


                    registrationArea.classList.add(
                        "show"
                    );


                    registrationForm.reset();


                    currentRegistration =
                        null;


                    registrationArea.scrollIntoView(

                        {

                            behavior:
                                "smooth",

                            block:
                                "start"

                        }

                    );


                }
            );


        }


        /* =================================================
           CHECK STATUS
        ================================================= */

        const checkStatusButton =
            document.getElementById(
                "checkStatusButton"
            );


        const statusCodeInput =
            document.getElementById(
                "statusCodeInput"
            );


        const statusResult =
            document.getElementById(
                "statusResult"
            );


        if (
            checkStatusButton
        ) {


            checkStatusButton.addEventListener(
                "click",
                function () {


                    const code =
                        statusCodeInput.value
                        .trim()
                        .toUpperCase();


                    statusResult.className =
                        "status-result";


                    if (
                        !code
                    ) {


                        statusResult.textContent =
                            "⚠️ Silakan masukkan kode pendaftaran terlebih dahulu.";


                        statusResult.classList.add(
                            "show",
                            "error"
                        );


                        return;


                    }


                    const registrations =
                        JSON.parse(
                            localStorage.getItem(
                                "rmh_registrations"
                            )
                        )
                        ||
                        [];


                    const registration =
                        registrations.find(

                            function (
                                item
                            ) {


                                return (

                                    item.code
                                    .toUpperCase()
                                    ===
                                    code

                                );


                            }

                        );


                    if (
                        registration
                    ) {


                        statusResult.innerHTML =

                            "🟡 <b>Status Pendaftaran</b><br>"
                            +
                            "Nama Anak: "
                            +
                            registration.nama_anak
                            +
                            "<br>"
                            +
                            "Kode: "
                            +
                            registration.code
                            +
                            "<br><br>"
                            +
                            "📋 "
                            +
                            registration.status;


                        statusResult.classList.add(
                            "show",
                            "waiting"
                        );


                    }

                    else {


                        statusResult.innerHTML =

                            "❌ <b>Data Tidak Ditemukan</b><br>"
                            +
                            "Pastikan kode pendaftaran yang Anda masukkan sudah benar.";


                        statusResult.classList.add(
                            "show",
                            "error"
                        );


                    }


                }
            );


        }


        /* =================================================
           ENTER CHECK STATUS
        ================================================= */

        if (
            statusCodeInput
        ) {


            statusCodeInput.addEventListener(
                "keydown",
                function (
                    event
                ) {


                    if (
                        event.key
                        ===
                        "Enter"
                    ) {


                        event.preventDefault();


                        checkStatusButton.click();


                    }


                }
            );


        }


    }

);


</script>


</body>

</html>
