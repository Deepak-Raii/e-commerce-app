const searchProducts = async () =>{
    console.log("function called...");
    const data = await fetch("https://dummyjson.com/products/search?q=Laptop");
    const jsonData = await data.json();
    return jsonData;
}

export {searchProducts};