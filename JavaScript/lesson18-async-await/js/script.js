
const fetchApi = async()=>{


    const api = await fetch('https://fakestoreapi.com/products')
    const apia = await fetch('https://dummyjson.com/products')
    
    
    const collectApia = await apia.json();
    const collectApi = await api.json();


    console.log(collectApi);
    console.log(collectApia);



}

fetchApi()