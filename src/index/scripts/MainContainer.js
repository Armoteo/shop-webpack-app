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

    data.forEach((element, index)=>{
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
            count = index;
            togleCount()
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
    console.log(count);
    togleCount()
}, 5000);

function togleCount(){
    if(count === data.length-1){
        count = 0;
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
    }

createProduct = () => {

}
};

