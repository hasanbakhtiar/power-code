// const text = document.querySelector('h1');
// const btn = document.querySelector('button');

// btn.onclick=()=>{
//     // text.style.color = 'red';
//     // text.style.backgroundColor = 'black';
//     // text.className = 'colorFull';
//     // text.classList.add('colorFull')
//     // text.classList.remove('colorFull')
//     // text.classList.toggle('colorFull')
// document.querySelector('img').attributes[1].value = "https://wallup.net/wp-content/uploads/2019/09/56899-landscapes-nature.jpg"
// }



const nav  =  document.querySelector("nav");
const modeBtn = document.querySelector("#mode");

modeBtn.onclick=()=>{
    if (modeBtn.innerHTML === "Dark") {
        nav.className="navbar navbar-expand-lg bg-dark navbar-dark";
    modeBtn.innerHTML = "Light";
    }else{
        nav.className="navbar navbar-expand-lg bg-light navbar-light";
    modeBtn.innerHTML = "Dark";
    }
}


document.querySelector("#menu-btn").onclick=()=>{
    if (document.querySelector("#menu").className == "hide") {
        document.querySelector('#menu').className="show";
    }else{
        document.querySelector('#menu').className="hide";
    }
}






