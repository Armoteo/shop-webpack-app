import {dataImgSlider, hitsProduct, newProductPrice} from './Helper';

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

        index === this.count ? itemSlider.className = 'item-slider visible': itemSlider.className = 'item-slider close';
        imgSlide.className = 'img-slide';
        imgSlide.alt = element.title;
        imgSlide.src = element.img;
        itemSlider.append(imgSlide);

        index === this.count ? dot.className = 'slider-dots_item dotActive' : dot.className = 'slider-dots_item';
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
        index === this.count ? element.className = 'item-slider visible' : element.className = 'item-slider close';
    });
    dot.forEach((element, index) => {
        index === this.count ? element.className = 'slider-dots_item dotActive' : element.className = 'slider-dots_item';
    });
};

setInterval(()=>{
    togleCount();
}, 8000);

function togleCount(index){
    if(this.count === this.data.length-1){
        this.count = 0;
    }else if(String(index) !== 'undefined'){
        this.count = index;
    }else{
        this.count++;
    }
    toggleSlide();
}
};
};

function response() {
    let request = new XMLHttpRequest();
    let url_my = 'https://my-json-server';
    let count=0;
    request.open("GET", url_my);
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
    request.send();
   request.addEventListener('readystatechange', function(){
      if( request.readyState === 4 && request.status === 200){
          
           let data = JSON.parse(request.responseText);
           let slider = new Slider(data, count);
           slider.createSlider();
           
        }else{
        let data = dataImgSlider;
           let slider = new Slider(data, count);
           slider.createSlider();
   }
});
};

response();

class ProductModel {
    constructor(product, root){
        this.product = product;
        this.root = root;
    }

createProduct = () => {
console.log(this.product);

this.product.forEach(element=>{
    let divCardProduct = document.createElement('div');
    let imgProduct = document.createElement('img');
    let priceProduct = document.createElement('span');

    divCardProduct.className = 'card-product';
    divCardProduct.id = element.id;
    divCardProduct.addEventListener('click', ()=>{
       console.log(element.id, element.name);
    });

    imgProduct.src = element.imSrc;
    imgProduct.alt = element.name;
   
    priceProduct.innerHTML = `${element.name} за ${element.price} грн`;
   
    divCardProduct.append(imgProduct);
    divCardProduct.append(priceProduct);

    let hitContainer= ( this.root === 'hits')?document.querySelector('.main-hits'): document.querySelector('.content-product');
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
         let product = hitsProduct;
          let  root = 'hits';
            let hits = new ProductModel(product, root);
            hits.createProduct();
        };
   });
};

responseProduct();


function responseNewProduct() {
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
         let  product = newProductPrice;
          let  root = 'newProduct';
            let newProduct = new ProductModel(product, root);
            newProduct.createProduct();
        };
   });
};

responseNewProduct();


