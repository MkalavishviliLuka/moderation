var logOutbutton = document.querySelector('#log-out');
function loginPageCreation() {
    history.pushState(null, null, 'LogIn');
    var loginPage = document.createElement('div');
    loginPage.classList.add('login-page');

    var loginHeader = document.createElement('h2');
    loginHeader.classList.add('login-header');
    loginHeader.innerHTML = 'Log In';

    var loginForm = document.createElement('form');
    loginForm.classList.add('login-form');
    loginForm.action = 'index.php';
    loginForm.method = 'POST';

    var loginEmailINput = document.createElement('input');
    loginEmailINput.classList.add('loginEmailInput');
    loginEmailINput.name = 'Login-email';
    loginEmailINput.placeholder = 'Email adress';
    loginEmailINput.required = true

    var loginPasswordINput = document.createElement('input');
    loginPasswordINput.classList.add('loginPasswordInput');
    loginPasswordINput.name = 'Login-password';
    loginPasswordINput.placeholder = 'Password';
    loginPasswordINput.required = true

    var loginButton = document.createElement('button');
    loginButton.classList.add('login-button');
    loginButton.innerHTML = 'confirm';


    loginPage.appendChild(loginHeader);
    loginForm.appendChild(loginEmailINput);
    loginForm.appendChild(loginPasswordINput);
    loginForm.appendChild(loginButton);
    loginPage.appendChild(loginForm);
    loginPageDetails = loginPage;
    mainTag.appendChild(loginPage);

    loginButton.addEventListener('click', (e) => {
        emailWhiteSpace = /\s/g.test(loginEmailINput.value)
        passwordWhiteSpace = /\s/g.test(loginPasswordINput.value)
        if (loginEmailINput.value != '' && loginPasswordINput.value != '' && emailWhiteSpace != true && passwordWhiteSpace != true) {
            e.preventDefault();
            existingArray = [];
            currentPage = 1;
            elementId = 0;
            if (checkClick.isTrue == true && checkClick.index == 0) {
                createElements(persons);
            } else if (checkClick.isTrue == true && checkClick.index == 1) {
                createElements(ads);
            } else if (checkClick.isTrue == true && checkClick.index == 2) {
                createElements(reports);
            } else {
                createElements(persons);
            }
            mainTag.appendChild(mainPage);
        } else {
            alert("Please type valid Email/Password")
        }
    })
    logOutbutton.style.display = 'none'
    activeListButton = document.querySelectorAll('.list-title');
};

loginPageCreation();

function logOut() {
    backButton.style.display = 'none';
    if (mainTag.contains(mainPage)) {
        // ლისტს ასუფთავებს
        clearElements();
        mainTag.removeChild(mainPage);
    };
    if (mainTag.contains(personalPage)) {
        mainPage.children[3].innerHTML = ' '
        personalPage.innerHTML = '';
        mainTag.removeChild(personalPage);
    };
    loginPageCreation();
};

logOutbutton.addEventListener('click', logOut);