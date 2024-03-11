const ul = document.querySelector('ul');
fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then(data=>{
    let li = "";
    data.map(i=>{
        li+=`<li><img width="100" src="${i.image}" />${i.title}</li>`
    })
    ul.innerHTML = li;
})