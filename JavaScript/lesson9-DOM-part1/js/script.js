// console.log(document);
// document.getElementsByTagName('h1')[0].innerHTML = "new value";

// document.getElementsByTagName('li')[0].innerHTML = "new value";
// document.getElementsByTagName('li')[1].innerHTML = "new value";
// document.getElementsByTagName('li')[2].innerHTML = "new value";

// const mylist = document.getElementsByTagName('li');
// console.log(mylist.length);

// for(let i=0;i<mylist.length;i++){
//     mylist[i].innerHTML = 'new value'
// }



const langData = {
    az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en:["Home","About","Services","Blog","Contact"],
}

const navLink  = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang');


const multiLang =()=>{
    if (langBtn.innerHTML === "AZ") {
        for(let i=0;i<navLink.length;i++){
            navLink[i].innerHTML = langData.az[i];
        }
        langBtn.innerHTML = "EN";
    }else{
        for(let i=0;i<navLink.length;i++){
            navLink[i].innerHTML = langData.en[i];
        }
        langBtn.innerHTML = "AZ";
    }
}

// langBtn.addEventListener('click',multiLang);
// langBtn.onmouseup = multiLang;



// document.querySelector(".changeTag").innerText = "<h1>Hello</h1>";





























// document.getElementsByClassName('list-one')[1].innerHTML = 'new value';
// document.querySelectorAll('li')[3].innerHTML = 'new value';

// const text = document.querySelector('h1');
// const btn = document.querySelector('button');

// const showCapital =()=>{
//     if (btn.innerHTML == "capital") {
//         text.innerHTML = "London";
//         btn.innerHTML = "country";
//     }else{
//         text.innerHTML = "England";
//         btn.innerHTML = "capital";
//     }
// }

// btn.onclick = showCapital;





