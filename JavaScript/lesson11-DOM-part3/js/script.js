
const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
btn.onclick = () => {
    if (btn.innerHTML == "AZ") {
        li[0].innerHTML = "Ana Sehife";
        li[1].innerHTML = "Haqqimizda";
        btn.innerHTML = 'EN';
        localStorage.setItem('lang', 'az');
    } else {
        li[0].innerHTML = "Home";
        li[1].innerHTML = "About";
        btn.innerHTML = 'AZ';
        localStorage.setItem('lang', 'en');
    }
}

if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'az');
} else {
    if (localStorage.getItem('lang') === 'az') {
        li[0].innerHTML = "Ana Sehife";
        li[1].innerHTML = "Haqqimizda";
        btn.innerHTML = 'EN';
    } else {
        li[0].innerHTML = "Home";
        li[1].innerHTML = "About";
        btn.innerHTML = 'AZ';
    }
}





// const text = document.querySelector('h1');
// const btn  = document.querySelector('button');

// btn.onclick=()=>{
//     if (btn.innerHTML ==='dark') {
//         btn.innerHTML = 'light';
//         text.className = 'dark';
//         localStorage.setItem('mode','dark');
//     }else{
//         text.className = 'light';
//         btn.innerHTML = 'dark';
//         localStorage.setItem('mode','light');

//     }
// }
// if (localStorage.getItem('mode') === null) {
//     localStorage.setItem('mode','light')
// }else{
//     if (localStorage.getItem('mode')==='light') {
//         text.className = 'light';
//         btn.innerHTML = 'dark';
//     }else{
//         btn.innerHTML = 'light';
//         text.className = 'dark';
//     }
// }



// localStorage.setItem("a","1")
// localStorage.setItem("b","2")

// document.querySelector('h1').innerHTML = localStorage.getItem('data');
// localStorage.removeItem('data')
// localStorage.clear()




// const leftbtn = document.querySelector('.left');
// const right = document.querySelector('.right');
// let turnSwitch = true;


// leftbtn.onclick = () => {
//     if (turnSwitch) {
//         right.style.left = "0px";
//         turnSwitch = false;
//     } else {
//         right.style.left = "-50%";
//         turnSwitch = true;

//     }
// }