<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="personal.css" id="personalCss">
    <link rel="stylesheet" href="personal-media.css" id="personalMediaCss">
    <link rel="stylesheet" href="login.css" id="loginCss">
    <link rel="stylesheet" href="login-media.css" id="loginMediaCss">
    <link rel="stylesheet" href="style.css" id="mainCss">
    <link rel="stylesheet" href="style-media.css" id="mainMediaCss">
    <title>Moderation</title>
</head>

<body>
    <header>
        <div id="back">
            <i class="fas fa-chevron-left"></i>
            <span class="back-txt">Back</span>
        </div>
        <div class="header-title">
            <h2>moderation</h2>
        </div>
        <div id="log-out">
            <i class="fas fa-arrow-circle-left"></i>
            <span class="log-txt">Log out</span>
        </div>
    </header>
    <main>
        <div class="main-page">
            <div class="welcome-txt">
                <h2>Welcome To Your Moderation Interface</h2>
            </div>
            <div class="member-search">
                <label for="search-input">Search a specific member</label>
                <form action="index.php" method="POST" class="search-form">
                    <input name="SEARCH" type="text" id="search-input" placeholder="Enter name, company or email">
                    <button id="search-button"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="list-titles">
                <div class="list-title selected-list profiles">
                    <p>Profiles</p>
                </div>
                <div class="list-title ads">
                    <p>Ads</p>
                </div>
                <div class="list-title reports">
                    <p>Abuse Reports</p>
                </div>
            </div>
            <div class="list"></div>
            <div class="navigation">
                <button class="previous nav-button">Previous</button>
                <p class="pages"></p>
                <button class="next nav-button">Next</button>
            </div>
        </div>
        <div class="personal-page"></div>
    </main>
    <script src="data.js"></script>
    <script src="navigation.js"></script>
    <script src="functions.js"></script>
    <script src="log.js"></script>
    <script src="main.js"></script>
</body>

</html>