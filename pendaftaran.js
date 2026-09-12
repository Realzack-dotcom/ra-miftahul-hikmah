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


    <!-- =====================================================
         GOOGLE FONT
    ====================================================== -->

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
        ====================================================== */

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
                #302b3c;

            background:
                #f7f7fb;

        }


        body::before {

            content:
                "";

            position:
                fixed;

            width:
                500px;

            height:
                500px;

            top:
                -250px;

            left:
                -200px;

            border-radius:
                50%;

            background:
                #ffd5e4;

            filter:
                blur(100px);

            opacity:
                .55;

            pointer-events:
                none;

            z-index:
                -2;

        }


        body::after {

            content:
                "";

            position:
                fixed;

            width:
                500px;

            height:
                500px;

            bottom:
                -250px;

            right:
                -200px;

            border-radius:
                50%;

            background:
                #d9d3ff;

            filter:
                blur(110px);

            opacity:
                .6;

            pointer-events:
                none;

            z-index:
                -2;

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


        img {

            max-width:
                100%;

        }


        /* =====================================================
           CONTAINER
        ====================================================== */

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
           HEADER
        ====================================================== */

        .header {

            position:
                sticky;

            top:
                0;

            z-index:
                1000;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .86
                );

            backdrop-filter:
                blur(20px);

            border-bottom:
                1px solid
                rgba(
                    70,
                    50,
                    100,
                    .06
                );

        }


        .header-inner {

            min-height:
                76px;

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
                12px;

            text-decoration:
                none;

            color:
                #302b3c;

        }


        .brand-logo {

            width:
                52px;

            height:
                52px;

            flex:
                0 0 auto;

            display:
                grid;

            place-items:
                center;

            border-radius:
                18px;

            font-size:
                26px;

            background:
                linear-gradient(
                    135deg,
                    #ffe49a,
                    #ffc8dc,
                    #d2efff
                );

            box-shadow:
                0 12px 28px
                rgba(
                    239,
                    79,
                    130,
                    .18
                );

        }


        .brand-text h1 {

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


        .brand-text h1 span {

            color:
                #ef4f82;

        }


        .brand-text p {

            margin:
                5px 0 0;

            color:
                #918998;

            font-size:
                10px;

            font-weight:
                700;

        }


        .header-status {

            display:
                inline-flex;

            align-items:
                center;

            justify-content:
                center;

            gap:
                8px;

            min-height:
                46px;

            padding:
                0 18px;

            border-radius:
                16px;

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
                    #a57fff
                );

            box-shadow:
                0 12px 25px
                rgba(
                    123,
                    108,
                    255,
                    .22
                );

            transition:
                .3s ease;

        }


        .header-status:hover {

            transform:
                translateY(-2px);

        }


        /* =====================================================
           NAVIGATION
        ====================================================== */

        .nav {

            position:
                sticky;

            top:
                76px;

            z-index:
                900;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .93
                );

            backdrop-filter:
                blur(20px);

            border-bottom:
                1px solid #efedf4;

        }


        .nav-inner {

            width:
                min(
                    1180px,
                    calc(100% - 24px)
                );

            margin:
                auto;

            display:
                flex;

            align-items:
                center;

            gap:
                7px;

            padding:
                9px 0;

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
                inline-flex;

            align-items:
                center;

            justify-content:
                center;

            gap:
                6px;

            padding:
                10px 15px;

            border-radius:
                13px;

            text-decoration:
                none;

            color:
                #746c7c;

            font-size:
                11px;

            font-weight:
                900;

            transition:
                .25s ease;

        }


        .nav a:hover {

            background:
                #f7f5ff;

        }


        .nav a.active {

            color:
                white;

            background:
                linear-gradient(
                    135deg,
                    #ef4f82,
                    #ff7da8
                );

            box-shadow:
                0 9px 20px
                rgba(
                    239,
                    79,
                    130,
                    .20
                );

        }


        /* =====================================================
           MAIN
        ====================================================== */

        .main {

            padding:
                32px 0 65px;

        }


        /* =====================================================
           BLOG HERO
        ====================================================== */

        .blog-hero {

            position:
                relative;

            overflow:
                hidden;

            min-height:
                480px;

            display:
                flex;

            align-items:
                flex-end;

            padding:
                48px;

            border-radius:
                35px;

            background:
                linear-gradient(
                    135deg,
                    #7566ef,
                    #c264dc 48%,
                    #ef618d
                );

            box-shadow:
                0 30px 70px
                rgba(
                    104,
                    70,
                    150,
                    .25
                );

        }


        .blog-hero::before {

            content:
                "🌈";

            position:
                absolute;

            top:
                -60px;

            right:
                4%;

            font-size:
                230px;

            opacity:
                .14;

            transform:
                rotate(
                    -12deg
                );

        }


        .blog-hero::after {

            content:
                "🎒";

            position:
                absolute;

            top:
                55px;

            left:
                8%;

            font-size:
                85px;

            opacity:
                .16;

            transform:
                rotate(
                    -10deg
                );

        }


        .hero-dots {

            position:
                absolute;

            width:
                260px;

            height:
                260px;

            right:
                12%;

            bottom:
                -120px;

            border:
                2px dashed
                rgba(
                    255,
                    255,
                    255,
                    .25
                );

            border-radius:
                50%;

        }


        .hero-content {

            position:
                relative;

            z-index:
                2;

            max-width:
                720px;

            color:
                white;

        }


        .hero-category {

            display:
                inline-flex;

            align-items:
                center;

            gap:
                8px;

            padding:
                10px 16px;

            border-radius:
                50px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .17
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .15
                );

            backdrop-filter:
                blur(10px);

            font-size:
                10px;

            font-weight:
                900;

            letter-spacing:
                .5px;

        }


        .hero-content h2 {

            margin:
                20px 0 14px;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                clamp(
                    42px,
                    7vw,
                    72px
                );

            line-height:
                .98;

        }


        .hero-content p {

            max-width:
                620px;

            margin:
                0;

            color:
                rgba(
                    255,
                    255,
                    255,
                    .90
                );

            font-size:
                15px;

            line-height:
                1.85;

        }


        .hero-info {

            display:
                flex;

            flex-wrap:
                wrap;

            gap:
                10px;

            margin-top:
                25px;

        }


        .hero-info span {

            display:
                inline-flex;

            align-items:
                center;

            gap:
                6px;

            padding:
                9px 13px;

            border-radius:
                50px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .15
                );

            font-size:
                10px;

            font-weight:
                800;

        }


        /* =====================================================
           MOBILE QUICK MENU
        ====================================================== */

        .quick-menu {

            display:
                none;

        }


        /* =====================================================
           BLOG LAYOUT
        ====================================================== */

        .blog-layout {

            display:
                grid;

            grid-template-columns:
                minmax(
                    0,
                    1.55fr
                )
                minmax(
                    280px,
                    .75fr
                );

            gap:
                25px;

            margin-top:
                28px;

            align-items:
                start;

        }


        /* =====================================================
           ARTICLE CARD
        ====================================================== */

        .article-card {

            overflow:
                hidden;

            border-radius:
                28px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .93
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .9
                );

            box-shadow:
                0 20px 50px
                rgba(
                    50,
                    35,
                    80,
                    .08
                );

        }


        .article-cover {

            min-height:
                170px;

            position:
                relative;

            display:
                flex;

            align-items:
                center;

            padding:
                30px;

            overflow:
                hidden;

            background:
                linear-gradient(
                    135deg,
                    #fff0f5,
                    #eeeaff,
                    #e7f8ff
                );

        }


        .article-cover::after {

            content:
                "🖍️";

            position:
                absolute;

            right:
                30px;

            font-size:
                90px;

            opacity:
                .75;

            transform:
                rotate(
                    12deg
                );

        }


        .article-cover-content {

            position:
                relative;

            z-index:
                2;

        }


        .article-cover small {

            display:
                inline-block;

            padding:
                7px 11px;

            border-radius:
                30px;

            color:
                #8068b8;

            background:
                white;

            font-size:
                9px;

            font-weight:
                900;

        }


        .article-cover h2 {

            max-width:
                480px;

            margin:
                13px 0 0;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                32px;

            line-height:
                1.1;

        }


        .article-body {

            padding:
                25px;

        }


        .article-body > p {

            margin:
                0 0 20px;

            color:
                #82798b;

            font-size:
                12px;

            line-height:
                1.85;

        }


        /* =====================================================
           STEPS
        ====================================================== */

        .steps-grid {

            display:
                grid;

            grid-template-columns:
                repeat(
                    4,
                    1fr
                );

            gap:
                11px;

        }


        .step-card {

            position:
                relative;

            min-height:
                155px;

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
                20px;

            background:
                #faf9ff;

            border:
                1px solid
                #f1edf7;

            transition:
                .3s ease;

        }


        .step-card:hover {

            transform:
                translateY(-5px);

            background:
                white;

            box-shadow:
                0 15px 30px
                rgba(
                    70,
                    50,
                    110,
                    .08
                );

        }


        .step-number {

            position:
                absolute;

            top:
                10px;

            left:
                10px;

            width:
                23px;

            height:
                23px;

            display:
                grid;

            place-items:
                center;

            border-radius:
                8px;

            color:
                #9c91a9;

            background:
                white;

            font-size:
                8px;

            font-weight:
                900;

        }


        .step-icon {

            width:
                48px;

            height:
                48px;

            display:
                grid;

            place-items:
                center;

            margin-bottom:
                10px;

            border-radius:
                16px;

            background:
                white;

            font-size:
                22px;

            box-shadow:
                0 8px 18px
                rgba(
                    60,
                    40,
                    90,
                    .07
                );

        }


        .step-card b {

            font-size:
                10px;

        }


        .step-card small {

            margin-top:
                5px;

            color:
                #99909f;

            font-size:
                8px;

            line-height:
                1.5;

        }


        /* =====================================================
           FORM
        ====================================================== */

        .form-card {

            margin-top:
                25px;

            padding:
                28px;

            border-radius:
                28px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .94
                );

            box-shadow:
                0 20px 50px
                rgba(
                    50,
                    35,
                    80,
                    .08
                );

        }


        .form-header {

            display:
                flex;

            align-items:
                center;

            gap:
                15px;

            margin-bottom:
                24px;

        }


        .form-header-icon {

            width:
                62px;

            height:
                62px;

            display:
                grid;

            place-items:
                center;

            flex:
                0 0 auto;

            border-radius:
                20px;

            font-size:
                28px;

            background:
                linear-gradient(
                    135deg,
                    #fff0f5,
                    #ede9ff
                );

        }


        .form-header h2 {

            margin:
                0;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                28px;

            line-height:
                1.1;

        }


        .form-header p {

            margin:
                5px 0 0;

            color:
                #928997;

            font-size:
                10px;

        }


        /* =====================================================
           FORM SECTION
        ====================================================== */

        .form-section {

            margin-bottom:
                17px;

            padding:
                20px;

            border-radius:
                22px;

            background:
                #fbfaff;

            border:
                1px solid
                #efedf5;

        }


        .form-section-head {

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
                36px;

            height:
                36px;

            display:
                grid;

            place-items:
                center;

            flex:
                0 0 auto;

            border-radius:
                12px;

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


        .form-section-head h3 {

            margin:
                0;

            font-size:
                13px;

        }


        .form-section-head p {

            margin:
                3px 0 0;

            color:
                #a198a8;

            font-size:
                9px;

        }


        /* =====================================================
           FORM GRID
        ====================================================== */

        .form-grid {

            display:
                grid;

            grid-template-columns:
                repeat(
                    2,
                    1fr
                );

            gap:
                15px;

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
                #5d5567;

        }


        .required {

            color:
                #ef4f82;

        }


        /* =====================================================
           INPUT
        ====================================================== */

        .form-group input,
        .form-group select,
        .form-group textarea {

            width:
                100%;

            min-height:
                50px;

            padding:
                13px 14px;

            border:
                1px solid
                #e8e3ee;

            outline:
                none;

            border-radius:
                15px;

            background:
                white;

            color:
                #443b4d;

            font-size:
                11px;

            transition:
                .25s ease;

        }


        .form-group textarea {

            min-height:
                115px;

            resize:
                vertical;

        }


        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {

            border-color:
                #9a80ed;

            box-shadow:
                0 0 0 4px
                rgba(
                    154,
                    128,
                    237,
                    .10
                );

        }


        /* =====================================================
           GENDER
        ====================================================== */

        .gender-grid {

            display:
                grid;

            grid-template-columns:
                repeat(
                    2,
                    1fr
                );

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
                50px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            gap:
                8px;

            border:
                1px solid
                #e8e3ee;

            border-radius:
                15px;

            background:
                white;

            color:
                #766d7d;

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
                #9a80ed;

            background:
                #f4f1ff;

            color:
                #715ab7;

        }


        /* =====================================================
           AGREEMENT
        ====================================================== */

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
                #fff9ec;

            color:
                #776e63;

            font-size:
                10px;

            line-height:
                1.75;

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
        ====================================================== */

        .submit-button {

            width:
                100%;

            min-height:
                57px;

            margin-top:
                16px;

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

            border-radius:
                17px;

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
                    #ff7da8
                );

            box-shadow:
                0 15px 30px
                rgba(
                    239,
                    79,
                    130,
                    .24
                );

            transition:
                .3s ease;

        }


        .submit-button:hover {

            transform:
                translateY(-3px);

            box-shadow:
                0 20px 35px
                rgba(
                    239,
                    79,
                    130,
                    .30
                );

        }


        .submit-button:disabled {

            opacity:
                .7;

            cursor:
                not-allowed;

        }


        /* =====================================================
           SUCCESS
        ====================================================== */

        .success-box {

            display:
                none;

            padding:
                35px 20px;

            text-align:
                center;

            border-radius:
                24px;

            background:
                linear-gradient(
                    135deg,
                    #f0fff6,
                    #f5f1ff
                );

            border:
                1px solid
                #dcf4e5;

        }


        .success-box.show {

            display:
                block;

            animation:
                successPop
                .6s
                ease;

        }


        @keyframes successPop {

            from {

                opacity:
                    0;

                transform:
                    scale(.92)
                    translateY(15px);

            }


            to {

                opacity:
                    1;

                transform:
                    scale(1)
                    translateY(0);

            }

        }


        .success-icon {

            font-size:
                58px;

        }


        .success-box h3 {

            margin:
                12px 0 7px;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                29px;

        }


        .success-box p {

            max-width:
                450px;

            margin:
                auto;

            color:
                #6c776f;

            font-size:
                11px;

            line-height:
                1.8;

        }


        .registration-code {

            max-width:
                380px;

            margin:
                20px auto;

            padding:
                20px;

            border-radius:
                20px;

            background:
                white;

            box-shadow:
                0 12px 30px
                rgba(
                    60,
                    40,
                    90,
                    .08
                );

        }


        .registration-code small {

            display:
                block;

            margin-bottom:
                8px;

            color:
                #968c9d;

            font-size:
                9px;

            font-weight:
                800;

        }


        .registration-code b {

            display:
                block;

            color:
                #765fc1;

            font-size:
                26px;

            letter-spacing:
                2px;

        }


        .success-actions {

            display:
                grid;

            gap:
                10px;

            max-width:
                420px;

            margin:
                auto;

        }


        .whatsapp-button {

            min-height:
                54px;

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
                    #52df88
                );

        }


        .check-button {

            min-height:
                54px;

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

            color:
                #6d6279;

            background:
                white;

            border:
                1px solid
                #e8e3ed;

            font-size:
                11px;

            font-weight:
                900;

        }


        /* =====================================================
           SIDEBAR
        ====================================================== */

        .sidebar {

            display:
                grid;

            gap:
                18px;

            position:
                sticky;

            top:
                150px;

        }


        .side-card {

            padding:
                23px;

            border-radius:
                25px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .92
                );

            box-shadow:
                0 18px 42px
                rgba(
                    60,
                    40,
                    90,
                    .08
                );

        }


        .side-card h3 {

            margin:
                0 0 8px;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                23px;

            line-height:
                1.1;

        }


        .side-card h3 span {

            color:
                #ef4f82;

        }


        .side-card > p {

            margin:
                0;

            color:
                #857c8c;

            font-size:
                11px;

            line-height:
                1.8;

        }


        /* =====================================================
           SIDE STEPS
        ====================================================== */

        .side-steps {

            display:
                grid;

            gap:
                10px;

            margin-top:
                17px;

        }


        .side-step {

            display:
                flex;

            align-items:
                center;

            gap:
                11px;

            padding:
                11px;

            border-radius:
                17px;

            background:
                #faf9ff;

        }


        .side-step-icon {

            width:
                43px;

            height:
                43px;

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
                0 7px 17px
                rgba(
                    60,
                    40,
                    90,
                    .06
                );

        }


        .side-step b {

            display:
                block;

            font-size:
                10px;

        }


        .side-step small {

            display:
                block;

            margin-top:
                3px;

            color:
                #9b92a1;

            font-size:
                8px;

        }


        /* =====================================================
           STATUS CARD
        ====================================================== */

        .status-card {

            background:
                linear-gradient(
                    135deg,
                    #f2efff,
                    #fff0f7,
                    #ebf9ff
                );

        }


        .status-icon {

            font-size:
                45px;

            margin-bottom:
                8px;

        }


        .status-button {

            width:
                100%;

            min-height:
                50px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            margin-top:
                17px;

            border-radius:
                15px;

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
                    #a57fff
                );

            box-shadow:
                0 10px 23px
                rgba(
                    123,
                    108,
                    255,
                    .18
                );

        }


        /* =====================================================
           INFO
        ====================================================== */

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
                10px;

            padding:
                12px;

            border-radius:
                16px;

            background:
                #f9fbff;

        }


        .info-item-icon {

            font-size:
                20px;

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
                #948b9b;

            font-size:
                8px;

            line-height:
                1.6;

        }


        /* =====================================================
           MOBILE BOTTOM NAV
        ====================================================== */

        .mobile-bottom-nav {

            display:
                none;

        }


        /* =====================================================
           FOOTER
        ====================================================== */

        .footer {

            padding:
                50px 0 22px;

            background:
                linear-gradient(
                    135deg,
                    #302842,
                    #46375b
                );

            color:
                white;

        }


        .footer-grid {

            display:
                grid;

            grid-template-columns:
                1.2fr
                .8fr
                1fr;

            gap:
                35px;

        }


        .footer h3 {

            margin:
                0 0 11px;

            font-family:
                "Baloo 2",
                cursive;

            font-size:
                21px;

        }


        .footer h3 span {

            color:
                #ff91b8;

        }


        .footer p {

            margin:
                0 0 8px;

            color:
                #c7bfd2;

            font-size:
                11px;

            line-height:
                1.75;

        }


        .footer a {

            color:
                #c7bfd2;

            text-decoration:
                none;

        }


        .copyright {

            margin-top:
                35px;

            padding-top:
                20px;

            text-align:
                center;

            border-top:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .08
                );

            color:
                #aaa0ba;

            font-size:
                10px;

        }


        /* =====================================================
           REVEAL
        ====================================================== */

        .reveal {

            opacity:
                0;

            transform:
                translateY(30px);

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


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 768px) {


            /* BODY */

            body {

                padding-bottom:
                    78px;

            }


            /* CONTAINER */

            .container {

                width:
                    calc(
                        100% - 24px
                    );

            }


            /* HEADER */

            .header-inner {

                min-height:
                    65px;

            }


            .brand {

                gap:
                    9px;

            }


            .brand-logo {

                width:
                    42px;

                height:
                    42px;

                border-radius:
                    14px;

                font-size:
                    21px;

            }


            .brand-text h1 {

                font-size:
                    15px;

            }


            .brand-text p {

                font-size:
                    7px;

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


            /* NAV DESKTOP */

            .nav {

                display:
                    none;

            }


            /* MAIN */

            .main {

                padding:
                    13px 0 35px;

            }


            /* HERO */

            .blog-hero {

                min-height:
                    460px;

                padding:
                    28px 21px;

                border-radius:
                    25px;

            }


            .blog-hero::before {

                top:
                    -10px;

                right:
                    -40px;

                font-size:
                    155px;

            }


            .blog-hero::after {

                top:
                    35px;

                left:
                    22px;

                font-size:
                    48px;

            }


            .hero-dots {

                width:
                    170px;

                height:
                    170px;

                right:
                    -50px;

                bottom:
                    -70px;

            }


            .hero-category {

                padding:
                    7px 11px;

                font-size:
                    8px;

            }


            .hero-content h2 {

                margin:
                    14px 0 12px;

                font-size:
                    46px;

                line-height:
                    .95;

            }


            .hero-content p {

                font-size:
                    11px;

                line-height:
                    1.8;

            }


            .hero-info {

                gap:
                    7px;

                margin-top:
                    17px;

            }


            .hero-info span {

                padding:
                    7px 10px;

                font-size:
                    8px;

            }


            /* QUICK MENU */

            .quick-menu {

                display:
                    flex;

                gap:
                    8px;

                margin:
                    13px 0;

                overflow-x:
                    auto;

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

                padding:
                    11px 14px;

                border-radius:
                    15px;

                background:
                    white;

                box-shadow:
                    0 8px 20px
                    rgba(
                        60,
                        40,
                        90,
                        .07
                    );

                text-decoration:
                    none;

                color:
                    #716778;

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
                    0;

            }


            .content-column {

                width:
                    100%;

            }


            /* ARTICLE */

            .article-card {

                width:
                    100%;

                border-radius:
                    23px;

            }


            .article-cover {

                min-height:
                    180px;

                padding:
                    20px;

            }


            .article-cover::after {

                right:
                    18px;

                font-size:
                    70px;

            }


            .article-cover h2 {

                max-width:
                    220px;

                font-size:
                    25px;

            }


            .article-cover small {

                font-size:
                    8px;

            }


            .article-body {

                padding:
                    17px;

            }


            .article-body > p {

                font-size:
                    10px;

                line-height:
                    1.8;

            }


            /* STEPS */

            .steps-grid {

                display:
                    flex;

                gap:
                    10px;

                overflow-x:
                    auto;

                padding-bottom:
                    5px;

                scrollbar-width:
                    none;

            }


            .steps-grid::-webkit-scrollbar {

                display:
                    none;

            }


            .step-card {

                flex:
                    0 0 145px;

                min-height:
                    145px;

            }


            /* FORM */

            .form-card {

                width:
                    100%;

                margin-top:
                    15px;

                padding:
                    13px;

                border-radius:
                    23px;

            }


            .form-header {

                gap:
                    10px;

                margin-bottom:
                    16px;

                padding:
                    5px;

            }


            .form-header-icon {

                width:
                    48px;

                height:
                    48px;

                border-radius:
                    15px;

                font-size:
                    22px;

            }


            .form-header h2 {

                font-size:
                    20px;

            }


            .form-header p {

                font-size:
                    8px;

            }


            /* FORM SECTION */

            .form-section {

                padding:
                    13px;

                margin-bottom:
                    12px;

                border-radius:
                    18px;

            }


            .form-section-head {

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
                    10px;

                font-size:
                    8px;

            }


            .form-section-head h3 {

                font-size:
                    10px;

            }


            .form-section-head p {

                font-size:
                    7px;

            }


            /* FORM GRID */

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
                    47px;

                padding:
                    11px;

                border-radius:
                    13px;

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
                    8px;

            }


            .gender-box {

                min-height:
                    47px;

                border-radius:
                    13px;

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
                    15px;

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
                    53px;

                margin-top:
                    13px;

                border-radius:
                    15px;

                font-size:
                    11px;

            }


            /* SUCCESS */

            .success-box {

                padding:
                    25px 13px;

                border-radius:
                    20px;

            }


            .success-icon {

                font-size:
                    48px;

            }


            .success-box h3 {

                font-size:
                    23px;

            }


            .success-box p {

                font-size:
                    9px;

            }


            .registration-code {

                padding:
                    16px;

            }


            .registration-code b {

                font-size:
                    20px;

            }


            /* SIDEBAR */

            .sidebar {

                width:
                    100%;

                position:
                    static;

                display:
                    grid;

                gap:
                    15px;

            }


            .side-card {

                padding:
                    18px;

                border-radius:
                    22px;

            }


            .side-card h3 {

                font-size:
                    21px;

            }


            .side-card > p {

                font-size:
                    10px;

            }


            /* SIDE STEPS */

            .side-step {

                padding:
                    10px;

            }


            .side-step-icon {

                width:
                    39px;

                height:
                    39px;

                border-radius:
                    12px;

                font-size:
                    17px;

            }


            /* FOOTER */

            .footer {

                padding:
                    35px 0 22px;

            }


            .footer-grid {

                grid-template-columns:
                    1fr;

                gap:
                    23px;

                text-align:
                    center;

            }


            /* MOBILE BOTTOM NAV */

            .mobile-bottom-nav {

                position:
                    fixed;

                left:
                    0;

                right:
                    0;

                bottom:
                    0;

                z-index:
                    2000;

                min-height:
                    68px;

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        4,
                        1fr
                    );

                background:
                    rgba(
                        255,
                        255,
                        255,
                        .96
                    );

                backdrop-filter:
                    blur(20px);

                border-top:
                    1px solid
                    #ece8f1;

                box-shadow:
                    0 -10px 30px
                    rgba(
                        40,
                        30,
                        60,
                        .06
                    );

            }


            .mobile-bottom-nav a {

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

                text-decoration:
                    none;

                color:
                    #8b8292;

                font-size:
                    8px;

                font-weight:
                    800;

            }


            .mobile-bottom-nav a.active {

                color:
                    #ef4f82;

            }


            .mobile-bottom-nav strong {

                font-size:
                    18px;

                line-height:
                    1;

            }


        }


    </style>


</head>


<body>


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


            <div class="brand-text">


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
            class="header-status"
        >

            📊 Status

        </a>


    </div>


</header>


<!-- =====================================================
     NAVIGATION DESKTOP
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


        <!-- HERO -->

        <section
            class="blog-hero reveal"
        >


            <div class="hero-dots"></div>


            <div class="hero-content">


                <div class="hero-category">

                    ✨ PENDAFTARAN ONLINE

                </div>


                <h2>

                    Mulai
                    Petualangan Baru
                    Bersama Kami 🌈

                </h2>


                <p>

                    Daftarkan buah hati Anda
                    di RA Miftahul Hikmah dengan
                    mudah melalui formulir online.
                    Setelah formulir dikirim,
                    Anda akan mendapatkan kode
                    pendaftaran untuk mengecek
                    status selanjutnya.

                </p>


                <div class="hero-info">


                    <span>

                        📝 Isi Data

                    </span>


                    <span>

                        🔑 Dapat Kode

                    </span>


                    <span>

                        💬 WhatsApp Admin

                    </span>


                </div>


            </div>


        </section>


        <!-- MOBILE QUICK MENU -->

        <div class="quick-menu">


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

            <div class="content-column">


                <!-- CARA DAFTAR -->

                <article
                    class="article-card reveal"
                    id="cara"
                >


                    <div class="article-cover">


                        <div class="article-cover-content">


                            <small>

                                📖 PANDUAN PENDAFTARAN

                            </small>


                            <h2>

                                Cara Daftar
                                Sangat Mudah ✨

                            </h2>


                        </div>


                    </div>


                    <div class="article-body">


                        <p>

                            Tidak perlu datang langsung
                            hanya untuk mengisi formulir.
                            Orang tua atau wali dapat
                            melakukan pendaftaran secara
                            online melalui halaman ini.

                        </p>


                        <div class="steps-grid">


                            <div class="step-card">


                                <div class="step-number">

                                    01

                                </div>


                                <div class="step-icon">

                                    👶

                                </div>


                                <b>

                                    Isi Data

                                </b>


                                <small>

                                    Lengkapi data
                                    calon peserta didik

                                </small>


                            </div>


                            <div class="step-card">


                                <div class="step-number">

                                    02

                                </div>


                                <div class="step-icon">

                                    📤

                                </div>


                                <b>

                                    Kirim Data

                                </b>


                                <small>

                                    Kirim formulir
                                    pendaftaran

                                </small>


                            </div>


                            <div class="step-card">


                                <div class="step-number">

                                    03

                                </div>


                                <div class="step-icon">

                                    🔑

                                </div>


                                <b>

                                    Dapat Kode

                                </b>


                                <small>

                                    Simpan kode
                                    pendaftaran

                                </small>


                            </div>


                            <div class="step-card">


                                <div class="step-number">

                                    04

                                </div>


                                <div class="step-icon">

                                    💬

                                </div>


                                <b>

                                    WhatsApp

                                </b>


                                <small>

                                    Hubungi admin
                                    untuk konfirmasi

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


                    <div class="form-header">


                        <div class="form-header-icon">

                            🎒

                        </div>


                        <div>


                            <h2>

                                Formulir Pendaftaran

                            </h2>


                            <p>

                                Lengkapi data dengan benar
                                dan pastikan nomor WhatsApp aktif.

                            </p>


                        </div>


                    </div>


                    <form
                        id="registrationForm"
                    >


                        <!-- DATA ANAK -->

                        <div class="form-section">


                            <div class="form-section-head">


                                <div class="section-number">

                                    01

                                </div>


                                <div>


                                    <h3>

                                        👶 Data Calon Peserta Didik

                                    </h3>


                                    <p>

                                        Informasi dasar anak

                                    </p>


                                </div>


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


                                        <label class="gender-option">


                                            <input
                                                type="radio"
                                                name="gender"
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
                                                name="gender"
                                                value="Perempuan"
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


                            <div class="form-section-head">


                                <div class="section-number">

                                    02

                                </div>


                                <div>


                                    <h3>

                                        👨‍👩‍👧 Data Orang Tua / Wali

                                    </h3>


                                    <p>

                                        Informasi yang dapat dihubungi

                                    </p>


                                </div>


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


                                        <option value="">

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


                            <div class="form-section-head">


                                <div class="section-number">

                                    03

                                </div>


                                <div>


                                    <h3>

                                        🏠 Alamat & Informasi

                                    </h3>


                                    <p>

                                        Informasi tempat tinggal dan kelas

                                    </p>


                                </div>


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


                                        <option value="">

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

                                Saya menyatakan bahwa seluruh
                                data yang saya isi adalah benar
                                dan bersedia dihubungi oleh
                                pihak RA Miftahul Hikmah untuk
                                proses pendaftaran selanjutnya.

                            </span>


                        </label>


                        <!-- BUTTON -->

                        <button
                            type="submit"
                            class="submit-button"
                        >

                            🚀 Kirim Pendaftaran Sekarang

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

                            Data pendaftaran Anda telah
                            berhasil dibuat. Silakan simpan
                            kode berikut untuk melakukan
                            pengecekan status pendaftaran.

                        </p>


                        <div class="registration-code">


                            <small>

                                🔑 KODE PENDAFTARAN ANDA

                            </small>


                            <b
                                id="registrationCode"
                            >

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

                                💬 Lanjut ke WhatsApp Admin

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


                <!-- ALUR -->

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

                        Empat langkah sederhana
                        untuk mendaftarkan buah hati Anda.

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

                                    Lengkapi semua data

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

                                    Kirim pendaftaran

                                </small>


                            </div>


                        </div>


                        <div class="side-step">


                            <div class="side-step-icon">

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


                        <div class="side-step">


                            <div class="side-step-icon">

                                💬

                            </div>


                            <div>


                                <b>

                                    Hubungi Admin

                                </b>


                                <small>

                                    Konfirmasi melalui WA

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

                        Sudah pernah mendaftar?
                        Gunakan kode pendaftaran Anda
                        untuk melihat status proses
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


                            <div class="info-item-icon">

                                🔑

                            </div>


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


                            <div class="info-item-icon">

                                💬

                            </div>


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


                            <div class="info-item-icon">

                                📋

                            </div>


                            <div>


                                <b>

                                    Data Benar

                                </b>


                                <small>

                                    Pastikan seluruh data
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

                    Tempat belajar, bermain,
                    dan bertumbuh bersama
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
     MOBILE BOTTOM NAV
===================================================== -->

<div class="mobile-bottom-nav">


    <a href="index.html">


        <strong>

            🏠

        </strong>


        Home


    </a>


    <a href="blog.html">


        <strong>

            🖍️

        </strong>


        Blog


    </a>


    <a
        href="pendaftaran.html"
        class="active"
    >


        <strong>

            📝

        </strong>


        Daftar


    </a>


    <a href="status-pendaftaran.html">


        <strong>

            📊

        </strong>


        Status


    </a>


</div>


<!-- =====================================================
     JAVASCRIPT
===================================================== -->

<script>


    document.addEventListener(

        "DOMContentLoaded",

        function () {


            /* =============================================
               REVEAL ANIMATION
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
                                    ).value.trim();


                                const namaWali =

                                    document.getElementById(
                                        "namaWali"
                                    ).value.trim();


                                const whatsapp =

                                    document.getElementById(
                                        "whatsapp"
                                    ).value.trim();


                                /* =====================
                                   FORMAT WHATSAPP
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

                                    "Halo Admin RA Miftahul Hikmah 👋\n\n"

                                    +

                                    "Saya sudah melakukan pendaftaran online.\n\n"

                                    +

                                    "👶 Nama Anak: "

                                    +

                                    namaAnak

                                    +

                                    "\n"

                                    +

                                    "👨‍👩‍👧 Nama Wali: "

                                    +

                                    namaWali

                                    +

                                    "\n"

                                    +

                                    "🔑 Kode Pendaftaran: "

                                    +

                                    code

                                    +

                                    "\n\n"

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

                                    encodeURIComponent(
                                        message
                                    );


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
