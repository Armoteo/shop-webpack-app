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
        {"id":1,"name":"Компьютеры и ноутбуки",
         "CategoriesProduct": [
            {
            "id": 1,
            "name" : "Компьютеры",
            },
            {
                "id": 2,
                "name" : "Планшеты",
            },
            {
                "id": 3,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":2,"name":"Смартфоны и аксессуары",
        "CategoriesProduct": [
            {
            "id": 1,
            "name" : "Смартфоны",
            },
            {
                "id": 2,
                "name" : "Чехлы и стекла",
            },
            {
                "id": 3,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":3,"name":"Бытовая техника",
        "CategoriesProduct": [
            {
            "id": 1,
            "name" : "Кухонная техника",
            },
            {
                "id": 2,
                "name" : "Бытовая техника",
            },
            {
                "id": 3,
                "name" : "Аксессуары",
            }
        ]
    },
        {"id":4,"name":"Товары для дома",
        "CategoriesProduct": [
            {
            "id": 1,
            "name" : "Одеяла",
            },
            {
            "id": 2,
            "name" : "Лампы",
            },
            {
            "id": 3,
            "name" : "Сервизы",
            }
        ]
    }
    ]
   
    