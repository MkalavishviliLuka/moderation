// Data
// Profiles
var persons = [
    {
        "image": 'Images/1-person.jpg',
        "name": 'Person 1',
        "reg": 'Person-1 Reg: 28-01-2021',
    },
    {
        "image": 'Images/2-person.jpg',
        "name": 'Person 2',
        "reg": 'Person-2 Reg: 28-02-2021',
    },
    {
        "image": 'Images/3-person.jpg',
        "name": 'Person 3',
        "reg": 'Person-3 Reg: 28-02-2021',
    },
    {
        "image": 'Images/4-person.jpg',
        "name": 'Person 4',
        "reg": 'Person-4 Reg: 28-02-2021',
    },
    {
        "image": 'Images/5-person.jpg',
        "name": 'Person 5',
        "reg": 'Person-5 Reg: 28-02-2021',
    },
    {
        "image": 'Images/6-person.jpg',
        "name": 'Person 6',
        "reg": 'Person-6 Reg: 28-02-2021',
    },
    {
        "image": 'Images/7-person.jpg',
        "name": 'Person 7',
        "reg": 'Person-7 Reg: 28-02-2021',
    },
    {
        "image": 'Images/8-person.jpg',
        "name": 'Person 8',
        "reg": 'Person-8 Reg: 28-02-2021',
    },
    {
        "image": 'Images/9-person.jpg',
        "name": 'Person 9',
        "reg": 'Person-9 Reg: 28-02-2021',
    },
    {
        "image": 'Images/10-person.jpg',
        "name": 'Person 10',
        "reg": 'Person-10 Reg: 28-02-2021',
    },
    {
        "image": 'Images/11-person.jpg',
        "name": 'Person 11',
        "reg": 'Person-11 Reg: 28-02-2021',
    },
    {
        "image": 'Images/12-person.jpg',
        "name": 'Person 12',
        "reg": 'Person-12 Reg: 28-02-2021',
    },
    {
        "image": 'Images/13-person.jpg',
        "name": 'Person 13',
        "reg": 'Person-13 Reg: 28-02-2021',
    },
    {
        "image": 'Images/14-person.jpg',
        "name": 'Person 14',
        "reg": 'Person-14 Reg: 28-02-2021',
    },
    {
        "image": 'Images/15-person.jpg',
        "name": 'Person 15',
        "reg": 'Person-15 Reg: 28-02-2021',
    },
    {
        "image": 'Images/8-person.jpg',
        "name": 'Person 16',
        "reg": 'Person-18 Reg: 28-02-2021',
    }
]


var ads = [
    {
        "image": 'Images/1-ad.jpg',
        "name": 'ad 1',
        "reg": 'ad-1 Reg: 28-01-2021',
    },
    {
        "image": 'Images/2-ad.jpg',
        "name": 'ad 2',
        "reg": 'ad-2 Reg: 28-02-2021',
    },
    {
        "image": 'Images/3-ad.jpg',
        "name": 'ad 3',
        "reg": 'ad-3 Reg: 28-02-2021',
    },
    {
        "image": 'Images/4-ad.jpg',
        "name": 'ad 4',
        "reg": 'ad-4 Reg: 28-02-2021',
    },
    {
        "image": 'Images/5-ad.jpg',
        "name": 'ad 5',
        "reg": 'ad-5 Reg: 28-02-2021',
    },
    {
        "image": 'Images/6-ad.jpg',
        "name": 'ad 6',
        "reg": 'ad-6 Reg: 28-02-2021',
    },
    {
        "image": 'Images/7-ad.jpg',
        "name": 'ad 7',
        "reg": 'ad-7 Reg: 28-02-2021',
    },
    {
        "image": 'Images/8-ad.jpg',
        "name": 'ad 8',
        "reg": 'ad-8 Reg: 28-02-2021',
    },
    {
        "image": 'Images/9-ad.jpg',
        "name": 'ad 9',
        "reg": 'ad-9 Reg: 28-02-2021',
    },
    {
        "image": 'Images/10-ad.jpg',
        "name": 'ad 10',
        "reg": 'ad-10 Reg: 28-02-2021',
    }
]

var reports = [
    {
        "image": 'Images/1-person.jpg',
        "name": 'Picture is offensive',
        "reg": 'report-1 Reg: 28-01-2021',
    },
    {
        "image": 'Images/2-person.jpg',
        "name": 'Spamming',
        "reg": 'report-2 Reg: 28-02-2021',
    },
    {
        "image": 'Images/3-person.jpg',
        "name": 'Another reason',
        "reg": 'report-3 Reg: 28-02-2021',
    },
    {
        "image": 'Images/4-person.jpg',
        "name": 'Just a reason',
        "reg": 'report-4 Reg: 28-02-2021',
    },
    {
        "image": 'Images/5-person.jpg',
        "name": 'Do not like him',
        "reg": 'report-5 Reg: 28-02-2021',
    },
    {
        "image": 'Images/6-person.jpg',
        "name": 'Report him',
        "reg": 'report-6 Reg: 28-02-2021',
    },
    {
        "image": 'Images/7-person.jpg',
        "name": 'Fake account',
        "reg": 'report-7 Reg: 28-02-2021',
    },
    {
        "image": 'Images/8-person.jpg',
        "name": 'Just doing it',
        "reg": 'report-8 Reg: 28-02-2021',
    },
    {
        "image": 'Images/9-person.jpg',
        "name": 'Did not like his comment',
        "reg": 'report-9 Reg: 28-02-2021',
    },
    {
        "image": 'Images/10-person.jpg',
        "name": 'He is spamming',
        "reg": 'report-10 Reg: 28-02-2021',
    }
]
// გვერდები

var pages = document.querySelector('.pages');
var currentPage;
currentPage = 1;
var displayPerPage = 5;

var pageNumber = persons.length / displayPerPage;
pages.innerHTML = `${currentPage}<b> / </b>${pageNumber}`;