// index-დან მაქვს აღებული ამ 3 ცვლადის მნიშვნელობა, რომლებსაც მერე DOM-დან ვშლი main.js-ში
var mainPage = document.querySelector('.main-page');
var personalPage = document.querySelector('.personal-page');
var mainTag = document.querySelector('main');
var activeListButton;
// ცვლადი, რომელიც ინფორმაციას ინახავს personal page-ზე დაბრუნებისთივს
var personalPageDetails;

function reportComponent(comment, img, name, imgAlt) {
    var reportCommentField = document.createElement('div');
    reportCommentField.classList.add('report-comment-field');

    var reportCommentHeader = document.createElement('div');
    reportCommentHeader.classList.add('report-comment-header');

    var reportCommentTitle = document.createElement('h4');
    reportCommentTitle.classList.add('report-comment-title');
    reportCommentTitle.innerHTML = 'Report comment';

    var reportComment = document.createElement('p');
    reportComment.innerHTML = comment;

    var reportedPageContainer = document.createElement('div');
    reportedPageContainer.classList.add('reported-page-container');

    var reportPageTitle = document.createElement('div');
    reportPageTitle.classList.add('report-page-title');
    reportPageTitle.innerHTML = 'Reported page';

    var reportedPage = document.createElement('div');
    reportedPage.classList.add('reported-page');

    var reportedPageImg = document.createElement('img');
    reportedPageImg.classList.add('reported-page-img');
    reportedPageImg.src = img;
    reportedPageImg.alt = imgAlt;

    var reportedPageInfo = document.createElement('div');
    reportedPageInfo.classList.add('reported-page-info');

    var reportedPageTitle = document.createElement('h4');
    reportedPageTitle.classList.add('reported-page-title');
    reportedPageTitle.innerHTML = name;

    var reportedPageType = document.createElement('p');
    reportedPageType.classList.add('reported-page-type');
    reportedPageType.innerHTML = `Page Type: <span class="page-type">TYPE</span>`;

    var verifyButton = document.createElement('button');
    verifyButton.classList.add('verify-button');
    verifyButton.innerHTML = '<span class="verify-span">Verify</span> <i class="fas fa-chevron-right" ></i > ';

    reportCommentHeader.appendChild(reportCommentTitle);
    reportCommentHeader.appendChild(reportComment);
    reportCommentField.appendChild(reportCommentHeader);

    reportedPageInfo.appendChild(reportedPageTitle);
    reportedPageInfo.appendChild(reportedPageType);
    reportedPage.appendChild(reportedPageImg);
    reportedPage.appendChild(reportedPageInfo);
    reportedPage.appendChild(verifyButton);
    reportedPageContainer.appendChild(reportPageTitle);
    reportedPageContainer.appendChild(reportedPage);

    personalPage.appendChild(reportCommentField);
    personalPage.appendChild(reportedPageContainer);
    personalPageDetails = personalPage.innerHTML;
};

// ასუფთავებს პოსტებს მანამ შესაბამისი კატეგორიის პოსტები დაემატება და მათ შორის გვერდზე გადასასვლელ ღილაკებსაც ანულებს
function clearElements() {
    var allElement = document.querySelectorAll('.list-element');
    allElement.forEach((item) => {
        item.remove();
    })
    transferButton = [];
}

// გვერდზე გადასვლსი ზოგადი ფუნქცია
function displayPersonalPageTitle(pageName, name, date, img, alt) {
    var personalContainerHeader = document.createElement('div');
    personalContainerHeader.classList.add('personal-container-header');

    var personalTitleArea = document.createElement('div');
    personalTitleArea.classList.add('personal-title-area');

    var personalTitleAreaH4 = document.createElement('h4');
    personalTitleAreaH4.classList.add('personal-title');
    personalTitleAreaH4.innerHTML = pageName;

    var personalTitleAreaP = document.createElement('p');
    personalTitleAreaP.classList.add('personal-id');
    personalTitleAreaP.innerHTML = `<i class="fas fa-exclamation-circle"></i> #076534`;

    var personalPageInfo = document.createElement('div');
    personalPageInfo.classList.add('personal-info');

    var personalFirstWrapper = document.createElement('div');
    personalFirstWrapper.classList.add('personal-first-wrapper');

    var personalNameInfo = document.createElement('h4');
    personalNameInfo.classList.add('personal-name-info');
    personalNameInfo.src = 'Reported By';

    var personal = document.createElement('div');
    personal.classList.add('personal');

    var personalImg = document.createElement('img');
    personalImg.classList.add('personal-img');
    personalImg.src = img;
    personalImg.alt = alt;

    var personalSecondWrapper = document.createElement('div');
    personalSecondWrapper.classList.add('personal-second-wrapper');

    var personalName = document.createElement('span');
    personalName.classList.add('personal-name');
    personalName.innerHTML = `${name}`;

    var lineBreak = document.createElement('br');

    var personalDate = document.createElement('span');
    personalDate.classList.add('personal-date');
    personalDate.innerHTML = `${date}`;

    personalTitleArea.appendChild(personalTitleAreaH4);
    personalTitleArea.appendChild(personalTitleAreaP);
    personalSecondWrapper.appendChild(personalName);
    personalSecondWrapper.appendChild(lineBreak);
    personalSecondWrapper.appendChild(personalDate);
    personal.appendChild(personalImg);
    personal.appendChild(personalSecondWrapper);

    personalFirstWrapper.appendChild(personalNameInfo);
    personalPageInfo.appendChild(personalFirstWrapper);
    personalPageInfo.appendChild(personal);

    personalContainerHeader.appendChild(personalTitleArea);
    personalContainerHeader.appendChild(personalPageInfo);
    personalPage.appendChild(personalContainerHeader);
    personalPageDetails = personalPage.innerHTML;
};
