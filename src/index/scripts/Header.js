// toggleMenuIcon
import {listCategories} from './Helper';

let menuIcon = document.querySelector('i');
let menuItems = document.querySelector('.nav-bar');
let menuIconClass = document.querySelector('.menu-icon');

// toggleMenu (gamburger)
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

//create tabs
let containerTab = document.querySelector('.tab-container');
createTabs();
createDropList();
createListCategories();
let tabs = document.querySelectorAll('.tab');

function createTabs(){
        listCategories.forEach((item)=>{
            let tab = document.createElement('div');
            tab.innerHTML = item.name;
            tab.addEventListener('click', (event)=>{
               event.preventDefault(); 

               tabs.forEach((elem, index)=>{
                event.target === elem? (elem.className = 'tab active', createListCategories(index)) : elem.className = 'tab';
               });
            });
            item.id === 0 ? tab.className = 'tab active': tab.className = 'tab';
            containerTab.append(tab);
        });
    };

//create listProductCategoies
function createListCategories(id = 0){
let listItem = document.querySelectorAll('.listCategoriesProduct li');
let listCategoriesProduct = document.querySelector('.listCategoriesProduct');
const {CategoriesProduct} = listCategories[id];
if(listItem){
listItem.forEach((item)=>{
    listCategoriesProduct.removeChild(item);
});
}
CategoriesProduct.forEach((item)=>{
    let listItem = document.createElement('li');
    listItem.innerHTML = item.name;
    listItem.addEventListener('click', (event)=>{
                event.preventDefault();
                console.log(event.target)
            })
            listCategoriesProduct.append(listItem); 
});
};

// change value drop-list (spinner)
function createDropList(){
    let dropListInput = document.querySelector('.drop-list-input');
    listCategories.forEach((item, index)=>{
        let itemDrop = document.createElement('option');
        itemDrop.innerHTML = item.name;
        itemDrop.className = 'tab-drop';
        itemDrop.id = index;
        dropListInput.append(itemDrop);
    });
    clickOptionDropList (dropListInput);
};

function clickOptionDropList (dropListInput){
    dropListInput.addEventListener('change', (event)=>{
    event.preventDefault();
    const index =  listCategories.find (item => item.name === event.target.value);
    createListCategories(index.id);
    });
}

//download catalog
let catalogButton = document.querySelector('.catalog');
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


