// ნავიგაციის ღილაკები
var navButton = document.querySelectorAll('.nav-button');

navButton.forEach((item) => {
    item.addEventListener('click', () => {

        if (item.classList.contains('previous')) {
            currentPage--
            if (currentPage < 1 || currentPage > pageNumber) {
                currentPage++
                return
            }
            pages.innerHTML = `${currentPage}<b> / </b>${pageNumber}`
            pageDecrease(existingArray)
        } else {
            currentPage++
            if (currentPage < 1 || currentPage > pageNumber) {
                currentPage--
                return
            }
            pages.innerHTML = `${currentPage}<b> / </b>${pageNumber}`
            pageIncrease(existingArray)
        }
    })
})

var navCounter = displayPerPage;
var perPage = displayPerPage * 2;
var elementId = 0;

function pageIncrease(arr) {
    elementId += displayPerPage;
    arr.forEach((item) => {
        item.remove();
    });
    for (var i = 0; i < displayPerPage; i++) {
        if (!arr[elementId + i]) {
            return;
        }
        list.appendChild(existingArray[elementId + i]);
    }
}

function pageDecrease(arr) {
    elementId -= displayPerPage;
    if (elementId == 0 || elementId < 0) {
        elementId == displayPerPage;
    };
    arr.forEach((item) => {
        item.remove();
    });
    for (var i = 0; i < displayPerPage; i++) {
        if (!arr[elementId + i]) {
            return;
        }
        list.appendChild(existingArray[elementId + i]);
    }
}