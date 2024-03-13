const row = document.querySelector('.row');
const pagiBtn  = document.querySelectorAll('.pagi');





const fetchApi = (start,end)=>{

fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((data) => {
  let col = "";
  data.slice(start,end).map((item) => {
    col += `
      <div class="col-12 col-sm-6 col-md-4">
      <div class="card" >
          <img style="object-fit:contain" src="${item.image}" class="card-img-top" alt="err" height="300">
           <div class="card-body">
             <h5 class="card-title">${item.title.slice(0,10)}...</h5>
             <p class="card-text">${item.description.slice(0,30)}...</p>
             <p class="btn btn-primary">${item.price}$</p>
           </div>
      </div>
      </div>
      `;
      row.innerHTML = col;
  });
})
.catch((err) => console.log(err));
}

pagiBtn[0].onclick=()=>{
    fetchApi(0,6)
}

pagiBtn[1].onclick=()=>{
    fetchApi(6,12)
}
pagiBtn[2].onclick=()=>{
    fetchApi(12,18)
}
pagiBtn[3].onclick=()=>{
    fetchApi(18,24)
}

fetchApi(0,6)
  
  
  
  
  

// const configPro = new Promise((resolve,reject)=>{
//     const api = false;
//     if (api) {
//         resolve('successfully')
//     }else{
//         reject('wrong!')
//     }
// })

// configPro
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// try {
//     const dataa = 5;
//     console.log(data);

// } catch (err) {
//     console.log(err);
//     console.log('something is wrong!');
// }

// console.log(fetch());
