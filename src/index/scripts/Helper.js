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
   
    