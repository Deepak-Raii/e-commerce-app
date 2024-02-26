const New_Arrivals = [
    {
        title:"Jeans",
        image:require("./images/jeans1.jpeg"),
        price:1300,
        rating:4
    },
    {
        title:"Shirt",
        image:require("./images/shirts1.jpg"),
        price:850,
        rating:4.1
    },
    {
        title:"Jacket",
        image:require("./images/men-suit1.jpg"),
        price:3200,
        rating:4.3
    },
    {
        title:"Shoes",
        image:require("./images/shoes1.jpg"),
        price:1649,
        rating:4.8
    },
]


const Category = [
    {
        title:"Jeans",
        image:require("./images/jeans1.jpeg"),

    },
    {
        title:"Shirts",
        image:require("./images/shirts1.jpg"),

    },
    {
        title:"Suit",
        image:require("./images/men-suit1.jpg"),

    },
    {
        title:"Shoes",
        image:require("./images/shoes1.jpg"),

    },

    {
        title:"Jeans",
        image:require("./images/jeans1.jpeg"),

    },
    {
        title:"Shirts",
        image:require("./images/shirts1.jpg"),

    },
    {
        title:"Shuits",
        image:require("./images/men-suit1.jpg"),

    },
    {
        title:"Shoes",
        image:require("./images/shoes1.jpg"),

    },

]


const getProducts = async()=>{
    const data = await fetch('https://dummyjson.com/products');
    const jsonData = await data.json();
    return jsonData;
}

const category = async()=>{
    const data = await fetch('https://dummyjson.com/products/categories',{
        method:'Get',
        headers:{
            'Content-Type':"application/json"
        }
    });
    const jsonData = await data.json();
    return jsonData;
} 

const getItems = async(param)=>{
    const data = await fetch(`https://dummyjson.com/products/category/${param}`,{
        method:'Get',
        headers:{
            'Content-Type':"application/json"
        }
    });
    const jsonData = await data.json();
    return jsonData;
} 

export {New_Arrivals, Category, getProducts, getItems, category};