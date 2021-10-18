
// პოსტების ჩამონათვალია
var list = document.querySelector('.list');


// ამ მასივში ვინახავ არსებულ პოსტებს ნავიგაციისთვის
var existingArray = [];

// კატეგორიის შეცვლისას პოსტების გამოტანის ფუნქცია
function createElements(arr) {
    history.pushState(null, null, 'Home');
    logOutbutton.style.display = 'unset'
    var loginPage = document.querySelector('.login-page');
    if (mainTag.contains(loginPage)) {
        mainTag.removeChild(loginPage)
    }
    // ამ ცვლადში ვინახავ შემოწმებულ სახელებს, რომ სკრიპტი არ ჩაჯდეს
    var newName;

    // ახალ გვერდზე გადასასვლელი ღილაკების მასივი
    var transferButton = [];

    pageNumber = arr.length / displayPerPage;
    if (arr % displayPerPage != 0) {
        pageNumber = Math.ceil(pageNumber);
    };
    pages.innerHTML = `${currentPage}<b> / </b>${pageNumber}`;
    arr.forEach((item, index) => {
        var listElement = document.createElement('div');
        listElement.classList.add('list-element');

        var listElementContent = document.createElement('div');
        listElementContent.classList.add('list-element-content');

        var elementInfo = document.createElement('div');
        elementInfo.classList.add('element-info');

        var elementImage = document.createElement('img');
        elementImage.src = arr[index].image;
        elementImage.alt = arr[index].name;
        elementImage.classList.add('image');
        if (arr == persons || arr == reports) {
            elementImage.classList.add('rounded-image');
        } else {
            elementImage.classList.remove('rounded-image');
        }

        var infoTxt = document.createElement('div');
        infoTxt.classList.add('info-txt');

        var infoNameParagraph = document.createElement('p');
        infoNameParagraph.classList.add('name');
        newName = arr[index].name;
        newName = newName.replace(/</g, "#lt;");
        newName = newName.replace(/>/g, "#mt;");
        newName = newName.replace(/"/g, "#quote;");
        newName = newName.replace(/&/g, "#and;");
        infoNameParagraph.innerHTML = newName;

        var infoDateParagraph = document.createElement('p');
        infoDateParagraph.classList.add('date-txt');
        var newDate = arr[index].reg;
        newDate = newDate.replace(/</g, "#lt;");
        newDate = newDate.replace(/>/g, "#mt;");
        newDate = newDate.replace(/"/g, "#quote;");
        newDate = newDate.replace(/&/g, "#and;");
        infoDateParagraph.innerHTML = newDate;

        var myButton = document.createElement('button');
        myButton.classList.add('view');
        if (arr == persons) {
            myButton.innerHTML = '<i class="far fa-user-circle"></i> View Profile <i class="fas fa-chevron-right"></i>';

        } else if (arr == ads) {
            myButton.innerHTML = '<i class="fas fa-bullhorn"></i> See The Ad <i class="fas fa-chevron-right"></i>';
        } else if (arr == reports) {
            myButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> See The Report <i class="fas fa-chevron-right"></i>';
        };

        infoTxt.appendChild(infoNameParagraph);
        infoTxt.appendChild(infoDateParagraph);
        elementInfo.appendChild(elementImage);
        elementInfo.appendChild(infoTxt);
        listElementContent.appendChild(elementInfo);
        listElementContent.appendChild(myButton);
        listElement.appendChild(listElementContent);
        list.appendChild(listElement);
        if (index >= 5) {
            listElement.remove();
        };
        transferButton.push(myButton);
        existingArray.push(listElement);
    });

    // გვერდზე გადასვლისას URL-ის შეცვლა და ახალი გვერდის გამოჩენა
    transferButton.forEach((item) => {
        item.addEventListener('click', () => {
            var imgSrc = item.parentNode.children[0].children[0].src;
            var imgAlt = item.parentNode.children[0].children[0].src;
            var datePost = item.parentNode.children[0].children[1].children[1].innerHTML;
            var pageName = document.querySelector('.selected-list').innerHTML;;
            var personalName = item.parentNode.children[0].children[1].children[0].innerHTML;
            var repComment = (item.parentNode.children[0].children[1].children[0].innerHTML);
            document.getElementById('back').style.display = 'unset';
            var authorName = item.parentNode.children[0].children[1].children[0].innerHTML;
            mainTag.removeChild(mainPage);
            displayPersonalPageTitle(pageName, authorName, datePost, imgSrc, imgAlt);
            if (arr == reports) {
                reportComponent(repComment, imgSrc, personalName, imgAlt);
            };
            mainTag.appendChild(personalPage);
            history.pushState(null, null, 'Personal');
        });
    });
};

// ამაში ამახსოვრებინებ რომელ მენიუზე იდგა. ბრაუზერის გამორთვის გარეშე თუ გავა და შემოვა ანგარიშიდან იგივე დახვდება.
var checkClick = {
    isTrue: false,
    index: 0
}

// კატეგორიის არჩევისას გამოვა შესაბამისი პოსტი
var listTitle = document.querySelectorAll('.list-title');
listTitle.forEach((item, index) => {
    item.addEventListener('click', () => {
        // After ელემენტი-ს დადება/მოშორება
        listTitle.forEach((addAfter) => {
            addAfter.classList.remove('remove-after');
        });
        if (index != 0) {
            listTitle[index - 1].classList.add('remove-after');
        }

        existingArray = [];
        currentPage = 1;
        elementId = 0;

        for (var i = 0; i < listTitle.length; i++) {
            listTitle[i].classList.remove('selected-list');
        };
        item.classList.add('selected-list');
        if (item.classList.contains('profiles')) {
            clearElements();
            createElements(persons);
            checkClick.isTrue = true;
            checkClick.index = 0;
        }
        else if (item.classList.contains('ads')) {
            clearElements();
            createElements(ads);
            checkClick.isTrue = true;
            checkClick.index = 1;
        } else if (item.classList.contains('reports')) {
            clearElements();
            createElements(reports);
            checkClick.isTrue = true;
            checkClick.index = 2;
        };
    });
});

// History API
window.addEventListener('popstate', () => {
    if (window.location.pathname.includes('Personal')) {
        document.getElementById('back').style.display = 'unset';
        personalPage.innerHTML = personalPageDetails;
        mainTag.appendChild(personalPage);
        if (mainTag.contains(mainPage)) {
            mainTag.removeChild(mainPage);
        };
    };
    if (!window.location.pathname.includes('LogIn') && !window.location.pathname.includes('Personal')) {
        document.getElementById('back').style.display = 'none';
        personalPage.innerHTML = '';
        mainTag.appendChild(mainPage);
        if (mainTag.contains(personalPage)) {
            mainTag.removeChild(personalPage);
        };
    };
    if (window.location.pathname.includes('LogIn')) {
        if (mainTag.contains(mainPage)) {
            mainTag.removeChild(mainPage);
        };
        if (mainTag.contains(personalPage)) {
            mainTag.removeChild(personalPage);
        };
        mainPage.children[3].innerHTML = ' '
        personalPage.innerHTML = '';
        loginPageCreation();
    };
});

// უკან გასვლის ღილაკი
var backButton = document.getElementById('back')
backButton.addEventListener('click', () => {
    history.back();
});

mainTag.removeChild(mainPage)
mainTag.removeChild(personalPage)