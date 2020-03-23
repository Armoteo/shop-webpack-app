// toggleMenuIcon
let menuIcon = document.querySelector('i');
let menuItems = document.querySelector('.nav-bar');
let menuIconClass = document.querySelector('.menu-icon');

// toggleMenu
menuIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuIcon.className === 'fas fa-bars') {
        menuIcon.className = 'fas fa-times';
        menuItems.style.left = '0';
        menuIconClass.style.left = '70%';
        menuIconClass.style.top = '10%';
        menuIconClass.style.color = '#000';
        menuIconClass.style.fontSize = '2em';

    } else {
        menuIcon.className = 'fas fa-bars';
        menuItems.style.left = '-100%';
        menuIconClass.style.left = '0';
        menuIconClass.style.top = '0';
        menuIconClass.style.color = '#fff';
        menuIconClass.style.fontSize = '1.2em';
    }
});


//toggle tabs and drop list
let tabs = document.querySelectorAll('.tab');
let contentTab = document.querySelectorAll('.list-container ul');
let containerTab = document.querySelector('.tab-container');
let catalogButton = document.querySelector('.catalog');

let tabDrop = document.querySelectorAll('.tab-drop');
let dropListInput = document.querySelector('.drop-list-input');


//click tabs and toggle tab content
containerTab.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    for (let i = 0; i < tabs.length; i++) {
        if (target === tabs[i]) {
            tabs[i].className = 'tab active';
            contentTab[i].className = '';
        } else {
            tabs[i].className = 'tab';
            contentTab[i].className = 'hide-list';
        }
    }
});

//change value drop-list (spinner)
dropListInput.addEventListener('change', (event) => {
    event.preventDefault();
    let target = event.target.value;
    for(let i =0; i<tabDrop.length; i++){
        if(target === tabDrop[i].value){
            contentTab[i].className = '';
        }else{
            contentTab[i].className = 'hide-list';
        }
    }
});


//download catalog
catalogButton.addEventListener('click', (e) => {
    console.log(e.target);
});

//search form - post on server for request search
let searchForm = document.querySelector('.search-header'),
    inputSearch = document.querySelector('.search-header input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputSearch.value !== '') {
        console.log(inputSearch.value);
        inputSearch.value = '';
    } else {
        alert('введите в поиск ключевое слово');
    }

});

