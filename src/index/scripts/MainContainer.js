// @ts-nocheck
import {dataImgSlider, hitsProduct} from './Helper';

let data = '',
    product = '',
      count = 0;


class Slider {
    constructor(data, count) {
        this.data = data;
        this.count = count;
    }

createSlider = ()=> {
    let divSlider = document.querySelector('.slider');
    let checkItemSlider = document.querySelectorAll('.item-slider')
    let dotsSlider = document.createElement('div');
    dotsSlider.className = 'dots-slider';
    divSlider.append(dotsSlider);

    if(checkItemSlider.length >0){
    checkItemSlider.forEach(element=>divSlider.removeChild(element));
    }

    this.data.forEach((element, index)=>{
        let itemSlider = document.createElement('div');
        let imgSlide = document.createElement('img');
        let dot = document.createElement('span');

        index === count ? itemSlider.className = 'item-slider visible': itemSlider.className = 'item-slider close';
        imgSlide.className = 'img-slide';
        imgSlide.alt = element.title;
        imgSlide.src = element.img;
        itemSlider.append(imgSlide);

        index === count ? dot.className = 'slider-dots_item dotActive' : dot.className = 'slider-dots_item';
        dot.addEventListener('click', ()=>{
            togleCount(index)
        });

        dotsSlider.append(dot)
        divSlider.append(itemSlider);
});

function toggleSlide(){
    let checkItemSlider = document.querySelectorAll('.item-slider');
    let dot = document.querySelectorAll('.slider-dots_item');
    checkItemSlider.forEach((element, index)=>{
        index === count ? element.className = 'item-slider visible' : element.className = 'item-slider close';
    });
    dot.forEach((element, index) => {
        index === count ? element.className = 'slider-dots_item dotActive' : element.className = 'slider-dots_item';
    });
};
setInterval(()=>{
    togleCount();
}, 8000);

function togleCount(index){
    if(count === data.length-1){
        count = 0;
    }else if(String(index) !== 'undefined'){
        count = index;
    }else{
        count++;
    }
    toggleSlide();
}
};
};

function response() {
    let request = new XMLHttpRequest();
    // let url_my = 'https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads';
    let url_my = 'https://my-json-server';
    request.open("GET", url_my);
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send();
   request.addEventListener('readystatechange', function(){
      if( request.readyState === 4 && request.status === 200){
           data = JSON.parse(request.responseText);
           let slider = new Slider(data, count);
           slider.createSlider();
           
        }else{
           data = dataImgSlider;
           let slider = new Slider(data, count);
           slider.createSlider();
           
        };
   });
};

response();

class ProductModel {
    constructor(product){
        this.product = product;
        this.root = root;
    }
num = ()=>{
    console.log(product);
}

createProduct = () => {
    
product.forEach(element=>{
    let divCardProduct = document.createElement('div');
    let imgProduct = document.createElement('img');
    let nameProduct = document.createElement('h3');
    let priceProduct = document.createElement('span');

    divCardProduct.className = 'card-product';
    imgProduct.src = element.imSrc;
    imgProduct.alt = element.name;
    priceProduct.innerHTML = element.price;
    nameProduct.title = element.name;
    divCardProduct.append(imgProduct);
    divCardProduct.append(nameProduct);
    divCardProduct.append(priceProduct);

    let hitContainer= ( root === 'hits')?document.querySelector('.main-hits'): document.querySelector('.content-product');
    hitContainer.append(divCardProduct);
});

}
};

function responseProduct() {
    let request = new XMLHttpRequest();
    // let url_my = 'https://my-json-server.typicode.com/IlyaLytvynov/ads-box-server/ads';
    let url_my = 'https://my-json-server';
    request.open("GET", url_my);
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send();
   request.addEventListener('readystatechange', function(){
      if( request.readyState === 4 && request.status === 200){
        //    data = JSON.parse(request.responseText);
        //    let slider = new Slider(data, count);
        //    slider.createSlider();
           
        }else{
            product = hitsProduct;
            root = 'hits';
           let hits = new ProductModel(product, root);
        //    hits.createProduct();
           hits.num();
        };
   });
};

responseProduct();
