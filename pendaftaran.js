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
   RA MIFTAHUL HIKMAH
   PENDAFTARAN PAGE
===================================================== */


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
            #f9f5ff 30%,
            #f4fbff 65%,
            #fffaf2 100%
        );

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
        400px;

    height:
        400px;

    top:
        5%;

    left:
        -220px;

    border-radius:
        50%;

    background:
        rgba(255,139,184,.20);

    filter:
        blur(80px);

    animation:
        blobOne 14s ease-in-out infinite;

}


.pg-bg::after {

    content:
        "";

    position:
        absolute;

    width:
        420px;

    height:
        420px;

    bottom:
        0;

    right:
        -220px;

    border-radius:
        50%;

    background:
        rgba(126,189,255,.20);

    filter:
        blur(80px);

    animation:
        blobTwo 16s ease-in-out infinite;

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
            translate(100px,70px)
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
            translate(-100px,-80px)
            scale(1.12);

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
        30%;

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
        42px;

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


.au-nav-icon {

    font-size:
        19px;

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


.au-more-menu a:last-child {

    border-bottom:
        none;

}


/* =====================================================
   HERO
===================================================== */

.reg-hero {

    position:
        relative;

    overflow:
        hidden;

    padding:
        70px 0 50px;

    text-align:
        center;

}


.reg-hero::before {

    content:
        "🎒";

    position:
        absolute;

    top:
        18px;

    left:
        5%;

    font-size:
        42px;

    opacity:
        .22;

    animation:
        emojiFloat 5s ease-in-out infinite;

}


.reg-hero::after {

    content:
        "🌈";

    position:
        absolute;

    right:
        5%;

    bottom:
        5px;

    font-size:
        48px;

    opacity:
        .24;

    animation:
        emojiFloat 6s ease-in-out infinite reverse;

}


@keyframes emojiFloat {

    0%,
    100% {

        transform:
            translateY(0)
            rotate(0);

    }

    50% {

        transform:
            translateY(-13px)
            rotate(8deg);

    }

}


.reg-hero-content {

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

    justify-content:
        center;

    gap:
        7px;

    padding:
        9px 15px;

    border-radius:
        50px;

    background:
        rgba(255,255,255,.82);

    color:
        #8466bd;

    font-size:
        10px;

    font-weight:
        900;

    box-shadow:
        0 10px 30px rgba(80,60,120,.08);

    animation:
        badgeFloat 4s ease-in-out infinite;

}


@keyframes badgeFloat {

    0%,
    100% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(-6px);

    }

}


.reg-hero h2 {

    margin:
        17px auto 0;

    max-width:
        800px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        clamp(42px,12vw,72px);

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
        620px;

    margin:
        18px auto 0;

    color:
        #766d84;

    font-size:
        13px;

    line-height:
        1.8;

}


/* =====================================================
   INFO
===================================================== */

.info-section {

    padding:
        10px 0 40px;

}


.info-grid {

    display:
        grid;

    grid-template-columns:
        repeat(2,1fr);

    gap:
        12px;

}


.info-card {

    position:
        relative;

    overflow:
        hidden;

    min-height:
        145px;

    padding:
        18px 10px;

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
        22px;

    background:
        rgba(255,255,255,.78);

    border:
        1px solid rgba(255,255,255,.9);

    box-shadow:
        0 14px 35px rgba(70,50,110,.08);

    transition:
        .35s ease;

}


.info-card:hover {

    transform:
        translateY(-7px);

}


.info-card::after {

    content:
        "";

    position:
        absolute;

    width:
        80px;

    height:
        80px;

    border-radius:
        50%;

    right:
        -35px;

    bottom:
        -35px;

    background:
        rgba(255,180,215,.18);

}


.info-card span {

    position:
        relative;

    z-index:
        2;

    display:
        block;

    margin-bottom:
        8px;

    font-size:
        30px;

}


.info-card b {

    position:
        relative;

    z-index:
        2;

    display:
        block;

    font-size:
        11px;

}


.info-card small {

    position:
        relative;

    z-index:
        2;

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
   SECTION
===================================================== */

.reg-section {

    padding:
        30px 0 50px;

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
        31px;

    line-height:
        1.1;

}


.section-heading h2 span {

    display:
        block;

    color:
        #ef4f82;

}


.section-heading p {

    max-width:
        600px;

    margin:
        auto;

    color:
        #7c7489;

    font-size:
        12px;

    line-height:
        1.7;

}


/* =====================================================
   LAYOUT
===================================================== */

.registration-layout {

    display:
        grid;

    gap:
        18px;

}


/* =====================================================
   FORM WRAPPER
===================================================== */

.registration-form {

    position:
        relative;

    overflow:
        hidden;

    padding:
        15px;

    border-radius:
        25px;

    background:
        rgba(255,255,255,.86);

    border:
        1px solid rgba(255,255,255,.95);

    box-shadow:
        0 18px 45px rgba(70,50,110,.10);

}


.registration-form::before {

    content:
        "";

    position:
        absolute;

    width:
        150px;

    height:
        150px;

    border-radius:
        50%;

    top:
        -80px;

    right:
        -70px;

    background:
        rgba(184,155,255,.12);

}


/* =====================================================
   FORM TITLE
===================================================== */

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
        10px;

    margin-bottom:
        17px;

}


.form-title-icon {

    width:
        48px;

    height:
        48px;

    flex:
        0 0 auto;

    display:
        grid;

    place-items:
        center;

    border-radius:
        15px;

    font-size:
        23px;

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
        20px;

    line-height:
        1;

}


.form-title p {

    margin:
        4px 0 0;

    color:
        #877d92;

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
        14px;

    margin-bottom:
        14px;

    border-radius:
        19px;

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
        15px;

}


.step-number {

    width:
        32px;

    height:
        32px;

    flex:
        0 0 auto;

    display:
        grid;

    place-items:
        center;

    border-radius:
        10px;

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

    line-height:
        1.3;

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

    font-size:
        11px;

    font-weight:
        900;

    color:
        #5e5669;

}


.form-group label span {

    color:
        #ef4f82;

}


/* =====================================================
   INPUT
===================================================== */

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
        13px 13px;

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
        5px;

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

    transition:
        .25s ease;

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

    margin-top:
        1px;

    accent-color:
        #ef4f82;

}


/* =====================================================
   SUBMIT BUTTON
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
        15px 18px;

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
   SUCCESS
===================================================== */

.form-success {

    display:
        none;

    margin-top:
        18px;

    padding:
        18px;

    text-align:
        center;

    border-radius:
        18px;

    background:
        #effff5;

    border:
        1px solid #c7f2d6;

    color:
        #287344;

}


.form-success.show {

    display:
        block;

    animation:
        successPop .5s ease;

}


@keyframes successPop {

    0% {

        opacity:
            0;

        transform:
            scale(.9);

    }

    100% {

        opacity:
            1;

        transform:
            scale(1);

    }

}


.form-success span {

    display:
        block;

    margin-bottom:
        6px;

    font-size:
        35px;

}


.form-success b {

    display:
        block;

    font-size:
        13px;

}


.form-success p {

    margin:
        6px 0 0;

    font-size:
        10px;

    line-height:
        1.6;

}


/* =====================================================
   SIDEBAR
===================================================== */

.registration-side {

    display:
        grid;

    gap:
        15px;

}


.side-card {

    position:
        relative;

    overflow:
        hidden;

    padding:
        19px;

    border-radius:
        23px;

    background:
        rgba(255,255,255,.80);

    border:
        1px solid rgba(255,255,255,.95);

    box-shadow:
        0 14px 38px rgba(70,50,110,.08);

}


.side-card h3 {

    margin:
        0 0 12px;

    font-family:
        "Baloo 2",
        cursive;

    font-size:
        21px;

    line-height:
        1;

}


.side-card h3 span {

    color:
        #ef4f82;

}


.side-card p {

    margin:
        0;

    color:
        #786f84;

    font-size:
        11px;

    line-height:
        1.7;

}


/* =====================================================
   STEPS
===================================================== */

.side-steps {

    display:
        grid;

    gap:
        10px;

    margin-top:
        16px;

}


.side-step {

    display:
        grid;

    grid-template-columns:
        40px 1fr;

    gap:
        10px;

    align-items:
        center;

    padding:
        10px;

    border-radius:
        15px;

    background:
        #faf8ff;

}


.side-step-icon {

    width:
        40px;

    height:
        40px;

    display:
        grid;

    place-items:
        center;

    border-radius:
        13px;

    font-size:
        18px;

    background:
        white;

    box-shadow:
        0 7px 17px rgba(70,50,110,.07);

}


.side-step b {

    display:
        block;

    font-size:
        11px;

}


.side-step small {

    display:
        block;

    margin-top:
        3px;

    color:
        #938b9d;

    font-size:
        9px;

}


/* =====================================================
   REQUIREMENTS
===================================================== */

.requirement-list {

    display:
        grid;

    gap:
        9px;

    margin:
        15px 0 0;

}


.requirement-item {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        9px;

    padding:
        11px;

    border-radius:
        14px;

    background:
        #f9fcff;

}


.requirement-item span {

    font-size:
        17px;

}


.requirement-item div {

    font-size:
        10px;

    line-height:
        1.6;

    color:
        #766e82;

}


.requirement-item b {

    display:
        block;

    color:
        #534b5e;

}


/* =====================================================
   HELP CARD
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


.help-card::after {

    content:
        "💬";

    position:
        absolute;

    right:
        -5px;

    bottom:
        -15px;

    font-size:
        90px;

    opacity:
        .10;

}


.help-button {

    position:
        relative;

    z-index:
        2;

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        8px;

    margin-top:
        15px;

    padding:
        12px 16px;

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
            #25d366,
            #56e48c
        );

    box-shadow:
        0 10px 22px rgba(37,211,102,.20);

}


/* =====================================================
   BENEFIT
===================================================== */

.benefit-section {

    padding:
        20px 0 55px;

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

    position:
        relative;

    overflow:
        hidden;

    min-height:
        165px;

    padding:
        18px 10px;

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

    .info-grid {

        grid-template-columns:
            repeat(4,1fr);

    }

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

    .reg-hero {

        padding:
            100px 0;

    }

    .reg-hero h2 {

        font-size:
            72px;

    }

    .reg-hero p {

        font-size:
            16px;

    }

    .info-card {

        min-height:
            175px;

    }

    .info-card span {

        font-size:
            38px;

    }

    .info-card b {

        font-size:
            14px;

    }

    .info-card small {

        font-size:
            11px;

    }

    .section-heading h2 {

        font-size:
            42px;

    }

    .section-heading p {

        font-size:
            14px;

    }

    .registration-layout {

        grid-template-columns:
            minmax(0,1.5fr)
            minmax(280px,.75fr);

        align-items:
            start;

    }

    .registration-form {

        padding:
            25px;

        border-radius:
            30px;

    }

    .form-step {

        padding:
            20px;

    }

    .form-grid.two {

        grid-template-columns:
            repeat(2,1fr);

    }

    .form-title h3 {

        font-size:
            25px;

    }

    .benefit-card {

        min-height:
            200px;

    }

    .benefit-card span {

        font-size:
            40px;

    }

    .benefit-card b {

        font-size:
            13px;

    }

    .benefit-card small {

        font-size:
            11px;

    }

    .au-footer-grid {

        grid-template-columns:
            repeat(3,1fr);

        text-align:
            left;

    }

}


/* =====================================================
   MOBILE KHUSUS
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

        border-radius:
            13px;

        font-size:
            21px;

    }

    .au-brand {

        gap:
            8px;

        min-width:
            0;

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

        border-radius:
            11px;

        font-size:
            9px;

    }

    .au-nav-inner {

        width:
            calc(100% - 12px);

        gap:
            4px;

        padding:
            7px 0;

    }

    .au-nav-link {

        min-width:
            58px;

        padding:
            7px 7px;

        font-size:
            8px;

    }

    .au-nav-icon {

        font-size:
            17px;

    }

    .au-more-button {

        min-width:
            58px;

        padding:
            7px 8px;

        font-size:
            8px;

    }

    .au-more-button span {

        font-size:
            17px;

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
            48px 0 35px;

    }

    .reg-hero::before {

        font-size:
            34px;

        left:
            -2%;

    }

    .reg-hero::after {

        font-size:
            38px;

        right:
            -2%;

    }

    .reg-badge {

        max-width:
            100%;

        padding:
            8px 12px;

        font-size:
            8px;

    }

    .reg-hero h2 {

        margin-top:
            14px;

        font-size:
            39px;

        line-height:
            .95;

    }

    .reg-hero p {

        margin-top:
            14px;

        font-size:
            11px;

        line-height:
            1.7;

    }

    .info-section {

        padding:
            5px 0 30px;

    }

    .info-grid {

        gap:
            9px;

    }

    .info-card {

        min-height:
            130px;

        padding:
            14px 8px;

        border-radius:
            18px;

    }

    .info-card span {

        font-size:
            27px;

    }

    .info-card b {

        font-size:
            10px;

    }

    .info-card small {

        font-size:
            8px;

    }

    .reg-section {

        padding:
            20px 0 40px;

    }

    .section-heading {

        margin-bottom:
            20px;

    }

    .section-heading h2 {

        font-size:
            28px;

    }

    .section-heading p {

        font-size:
            11px;

    }

    .registration-layout {

        gap:
            14px;

    }

    .registration-form {

        padding:
            11px;

        border-radius:
            20px;

    }

    .form-title {

        gap:
            8px;

        margin-bottom:
            14px;

    }

    .form-title-icon {

        width:
            42px;

        height:
            42px;

        font-size:
            20px;

        border-radius:
            13px;

    }

    .form-title h3 {

        font-size:
            18px;

    }

    .form-title p {

        font-size:
            9px;

    }

    .form-step {

        padding:
            11px;

        margin-bottom:
            11px;

        border-radius:
            16px;

    }

    .step-heading {

        gap:
            7px;

        margin-bottom:
            13px;

    }

    .step-number {

        width:
            29px;

        height:
            29px;

        font-size:
            9px;

        border-radius:
            9px;

    }

    .step-heading h4 {

        font-size:
            11px;

    }

    .form-grid {

        gap:
            11px;

    }

    .form-group {

        gap:
            6px;

    }

    .form-group label {

        font-size:
            10px;

    }

    .form-group input,

    .form-group select,

    .form-group textarea {

        min-height:
            46px;

        padding:
            11px;

        font-size:
            11px;

        border-radius:
            12px;

    }

    .form-group textarea {

        min-height:
            90px;

    }

    .gender-options {

        gap:
            7px;

    }

    .gender-box {

        min-height:
            45px;

        padding:
            8px 5px;

        font-size:
            9px;

        border-radius:
            12px;

    }

    .agreement {

        gap:
            7px;

        padding:
            11px;

        font-size:
            9px;

        border-radius:
            13px;

    }

    .agreement input {

        width:
            16px;

        height:
            16px;

    }

    .submit-button {

        min-height:
            50px;

        margin-top:
            13px;

        font-size:
            11px;

        border-radius:
            14px;

    }

    .side-card {

        padding:
            16px;

        border-radius:
            19px;

    }

    .side-card h3 {

        font-size:
            19px;

    }

    .side-card p {

        font-size:
            10px;

    }

    .side-step {

        grid-template-columns:
            36px 1fr;

        gap:
            9px;

        padding:
            9px;

    }

    .side-step-icon {

        width:
            36px;

        height:
            36px;

        font-size:
            16px;

        border-radius:
            11px;

    }

    .side-step b {

        font-size:
            10px;

    }

    .side-step small {

        font-size:
            8px;

    }

    .requirement-item {

        padding:
            9px;

    }

    .requirement-item div {

        font-size:
            9px;

    }

    .help-button {

        width:
            100%;

        padding:
            12px;

        font-size:
            10px;

    }

    .benefit-section {

        padding:
            15px 0 45px;

    }

    .benefit-grid {

        gap:
            9px;

    }

    .benefit-card {

        min-height:
            145px;

        padding:
            14px 8px;

        border-radius:
            18px;

    }

    .benefit-card span {

        font-size:
            27px;

    }

    .benefit-card b {

        font-size:
            10px;

    }

    .benefit-card small {

        font-size:
            8px;

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


<body data-page="pendaftaran">


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
            href="pendaftaran.html"
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
     DROPDOWN
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

    <div
        class="au-container
               reg-hero-content
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
            RA Miftahul Hikmah dan berikan
            pengalaman belajar yang menyenangkan,
            penuh kasih sayang dan penuh warna.

        </p>


    </div>

</section>


<!-- =====================================================
     INFO
===================================================== -->

<section class="info-section">

    <div class="au-container">


        <div class="info-grid">


            <div class="info-card au-reveal">

                <span>
                    📝
                </span>

                <b>
                    Isi Formulir
                </b>

                <small>
                    Lengkapi data calon peserta didik
                </small>

            </div>


            <div class="info-card au-reveal">

                <span>
                    💬
                </span>

                <b>
                    Konfirmasi
                </b>

                <small>
                    Admin akan menghubungi wali
                </small>

            </div>


            <div class="info-card au-reveal">

                <span>
                    📅
                </span>

                <b>
                    Observasi
                </b>

                <small>
                    Kenali lingkungan sekolah
                </small>

            </div>


            <div class="info-card au-reveal">

                <span>
                    🌈
                </span>

                <b>
                    Mulai Belajar
                </b>

                <small>
                    Selamat datang di keluarga kami
                </small>

            </div>


        </div>


    </div>

</section>


<!-- =====================================================
     PENDAFTARAN
===================================================== -->

<section class="reg-section">

    <div class="au-container">


        <div class="section-heading au-reveal">


            <div class="section-badge">

                ✨ FORM PENDAFTARAN

            </div>


            <h2>

                Daftarkan

                <span>
                    Buah Hati Anda
                </span>

            </h2>


            <p>

                Silakan isi formulir berikut dengan
                data yang benar. Data akan digunakan
                untuk proses pendaftaran calon peserta
                didik RA Miftahul Hikmah.

            </p>


        </div>


        <div class="registration-layout">


            <!-- FORM -->

            <div
                class="registration-form
                       au-reveal"
            >


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
                                    placeholder="Contoh: 081234567890"
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
                                    placeholder="Contoh: email@gmail.com"
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
                                placeholder="Masukkan alamat lengkap tempat tinggal"
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


                                <select
                                    name="kelas"
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

                                        Konsultasi dengan Admin

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
                                placeholder="Tuliskan pertanyaan atau informasi tambahan..."
                            ></textarea>


                        </div>


                    </div>


                    <!-- AGREEMENT -->

                    <label class="agreement">


                        <input
                            type="checkbox"
                            id="agreement"
                            required
                        >


                        <span>

                            Saya menyatakan bahwa data
                            yang saya isi adalah benar dan
                            bersedia dihubungi oleh pihak
                            RA Miftahul Hikmah untuk proses
                            pendaftaran selanjutnya.

                        </span>


                    </label>


                    <!-- BUTTON -->

                    <button
                        type="submit"
                        class="submit-button"
                    >

                        🚀 Kirim Pendaftaran

                    </button>


                    <!-- SUCCESS -->

                    <div
                        class="form-success"
                        id="formSuccess"
                    >

                        <span>
                            🎉
                        </span>


                        <b>

                            Pendaftaran Berhasil Dikirim!

                        </b>


                        <p>

                            Terima kasih telah melakukan
                            pendaftaran. Admin RA Miftahul
                            Hikmah akan segera menghubungi
                            Anda melalui WhatsApp.

                        </p>


                    </div>


                </form>


            </div>


            <!-- SIDEBAR -->

            <aside class="registration-side">


                <!-- CARA DAFTAR -->

                <div
                    class="side-card
                           au-reveal"
                >


                    <h3>

                        Cara

                        <span>
                            Mendaftar
                        </span>

                    </h3>


                    <p>

                        Proses pendaftaran dibuat
                        sederhana agar lebih mudah
                        bagi orang tua dan wali.

                    </p>


                    <div class="side-steps">


                        <div class="side-step">

                            <div class="side-step-icon">

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


                        <div class="side-step">

                            <div class="side-step-icon">

                                📤

                            </div>


                            <div>

                                <b>

                                    Kirim Data

                                </b>


                                <small>

                                    Data masuk ke admin

                                </small>

                            </div>

                        </div>


                        <div class="side-step">

                            <div class="side-step-icon">

                                💬

                            </div>


                            <div>

                                <b>

                                    Konfirmasi

                                </b>


                                <small>

                                    Admin menghubungi wali

                                </small>

                            </div>

                        </div>


                        <div class="side-step">

                            <div class="side-step-icon">

                                🌈

                            </div>


                            <div>

                                <b>

                                    Selamat Bergabung

                                </b>


                                <small>

                                    Mulai petualangan baru

                                </small>

                            </div>

                        </div>


                    </div>


                </div>


                <!-- SYARAT -->

                <div
                    class="side-card
                           au-reveal"
                >


                    <h3>

                        Syarat

                        <span>
                            Pendaftaran
                        </span>

                    </h3>


                    <div class="requirement-list">


                        <div class="requirement-item">

                            <span>
                                📄
                            </span>


                            <div>

                                <b>

                                    Data Anak

                                </b>

                                Isi identitas calon peserta didik.

                            </div>

                        </div>


                        <div class="requirement-item">

                            <span>
                                👨‍👩‍👧
                            </span>


                            <div>

                                <b>

                                    Data Orang Tua

                                </b>

                                Nomor WhatsApp aktif untuk konfirmasi.

                            </div>

                        </div>


                        <div class="requirement-item">

                            <span>
                                🏠
                            </span>


                            <div>

                                <b>

                                    Alamat

                                </b>

                                Masukkan alamat tempat tinggal.

                            </div>

                        </div>


                        <div class="requirement-item">

                            <span>
                                💛
                            </span>


                            <div>

                                <b>

                                    Siap Belajar

                                </b>

                                Anak siap memulai petualangan baru.

                            </div>

                        </div>


                    </div>


                </div>


                <!-- HELP -->

                <div
                    class="side-card
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

                        Jika ada yang ingin ditanyakan
                        mengenai pendaftaran, silakan
                        hubungi admin kami melalui
                        WhatsApp.

                    </p>


                    <!-- GANTI NOMOR WA -->

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


        <div class="section-heading au-reveal">


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


            <div class="benefit-card au-reveal">

                <span>
                    💛
                </span>

                <b>

                    Penuh Kasih Sayang

                </b>

                <small>

                    Anak belajar dalam lingkungan
                    yang hangat dan nyaman.

                </small>

            </div>


            <div class="benefit-card au-reveal">

                <span>
                    🎨
                </span>

                <b>

                    Kreatif & Menyenangkan

                </b>

                <small>

                    Belajar melalui bermain
                    dan kegiatan kreatif.

                </small>

            </div>


            <div class="benefit-card au-reveal">

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


            <div class="benefit-card au-reveal">

                <span>
                    🌈
                </span>

                <b>

                    Tumbuh Bersama

                </b>

                <small>

                    Membantu anak menjadi mandiri,
                    percaya diri dan bahagia.

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

                    <a href="programs.html">

                        Programs

                    </a>

                </p>


                <p>

                    <a href="pendaftaran.html">

                        Pendaftaran

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


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           MENU MORE
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
           CLOSE MENU ON RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            function () {


                if (
                    window.innerWidth >= 769 &&
                    moreMenu
                ) {


                    moreMenu.classList.remove(
                        "open"
                    );


                }


            }
        );


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
           FORM
        ================================================= */

        const registrationForm =
            document.getElementById(
                "registrationForm"
            );


        const formSuccess =
            document.getElementById(
                "formSuccess"
            );


        if (
            registrationForm
        ) {


            registrationForm.addEventListener(
                "submit",
                function (
                    event
                ) {


                    event.preventDefault();


                    const submitButton =
                        registrationForm.querySelector(
                            ".submit-button"
                        );


                    if (
                        !registrationForm.checkValidity()
                    ) {


                        registrationForm.reportValidity();


                        return;


                    }


                    submitButton.innerHTML =
                        "⏳ Mengirim Pendaftaran...";


                    submitButton.disabled =
                        true;


                    setTimeout(

                        function () {


                            submitButton.innerHTML =
                                "✓ Pendaftaran Terkirim";


                            formSuccess.classList.add(
                                "show"
                            );


                            formSuccess.scrollIntoView(
                                {

                                    behavior:
                                        "smooth",

                                    block:
                                        "center"

                                }
                            );


                        },

                        900

                    );


                }
            );


        }


    }

);


</script>


</body>

</html>
