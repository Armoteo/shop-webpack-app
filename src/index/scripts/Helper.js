//emulation server
 export const server =  function server (callback){
    let response = {
        status: 200,
        readyState: 4,
    } 
    setTimeout(callback(response), 5000); 
    }
    
    export const request = function request(response){
        console.log(response.status);
    }

    export const listCategories = [
        {"id":0,"name":"Компьютеры и ноутбуки",
         "CategoriesProduct": [
            {
            "id": 0,
            "name" : "Компьютеры",
            },
            {
                "id": 1,
                "name" : "Планшеты",
            },
            {
                "id": 2,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":1,"name":"Смартфоны и аксессуары",
        "CategoriesProduct": [
            {
            "id": 0,
            "name" : "Смартфоны",
            },
            {
                "id": 1,
                "name" : "Чехлы и стекла",
            },
            {
                "id": 2,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":2,"name":"Бытовая техника",
        "CategoriesProduct": [
            {
            "id": 0,
            "name" : "Кухонная техника",
            },
            {
                "id": 1,
                "name" : "Бытовая техника",
            },
            {
                "id": 2,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":3,"name":"Товары для дома",
        "CategoriesProduct": [
            {
            "id": 0,
            "name" : "Одеяла",
            },
            {
            "id": 1,
            "name" : "Лампы",
            },
            {
            "id": 2,
            "name" : "Сервизы",
            }
        ]
    }
    ]

export const dataImgSlider = [
    {"title" : "Girl",
    "img" : "../../src/assets/images/girl.jpg"
    },
    {"title" : "jackets",
    "img" : "../../src/assets/images/jackets.jpg"
    },
    {
    "title" : "Shirts",
    "img" : "../../src/assets/images/shirts.jpg"
    },
    {
    "title" : "Smile",
    "img" : "../../src/assets/images/smile.jpg"
    },
    {
    "title" : "Sweatshirts",
    "img" : "../../src/assets/images/sweatshirts.jpg"
    }
]

export const hitsProduct = [
    {
    "id": 0,
    "name": "Asus ZenBoock",
    "price": 12000,
    "imSrc": "../../src/assets/images/asus_zen.jpg"
    },
    {
        "id": 1,
        "name": "Dell Ultra 182",
        "price": 9800,
        "imSrc": "../../src/assets/images/dell_ultra.png"
        },
    {
        "id": 2,
        "name": "HP Pavilion",
        "price": 11800,
        "imSrc": "../../src/assets/images/hp_pavilion.png"
        },
    {
        "id": 3,
        "name": "Lenovo L340",
        "price": 19900,
        "imSrc": "../../src/assets/images/lenovo_thinkbook.jpg"
        },

]

export const newProductPrice = [
    {
        "id": 0,
        "name": "Asus ZenBoock",
        "price": 12000,
        "imSrc": "../../src/assets/images/asus_zen.jpg"
        },
        {
            "id": 1,
            "name": "Dell Ultra 182",
            "price": 9800,
            "imSrc": "../../src/assets/images/dell_ultra.png"
            },
        {
            "id": 2,
            "name": "HP Pavilion",
            "price": 11800,
            "imSrc": "../../src/assets/images/hp_pavilion.png"
            },
        {
            "id": 3,
            "name": "Lenovo L340",
            "price": 19900,
            "imSrc": "../../src/assets/images/lenovo_thinkbook.jpg"
            },
            {
                "id": 4,
                "name": "Asus ZenBoock",
                "price": 12000,
                "imSrc": "../../src/assets/images/asus_zen.jpg"
                },
                {
                    "id": 5,
                    "name": "Dell Ultra 182",
                    "price": 9800,
                    "imSrc": "../../src/assets/images/dell_ultra.png"
                    },
                {
                    "id": 6,
                    "name": "HP Pavilion",
                    "price": 11800,
                    "imSrc": "../../src/assets/images/hp_pavilion.png"
                    },
                {
                    "id": 7,
                    "name": "Lenovo L340",
                    "price": 19900,
                    "imSrc": "../../src/assets/images/lenovo_thinkbook.jpg"
                    },
                    {
                        "id": 8,
                        "name": "Asus ZenBoock",
                        "price": 12000,
                        "imSrc": "../../src/assets/images/asus_zen.jpg"
                        },
                        {
                            "id": 9,
                            "name": "Dell Ultra 182",
                            "price": 9800,
                            "imSrc": "../../src/assets/images/dell_ultra.png"
                            },
]
   
    