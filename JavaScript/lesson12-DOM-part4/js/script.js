// const ul  = document.querySelector('ul');

// console.log(ul.childNodes[3].firstChild.parentNode.parentNode.firstChild.nextSibling.firstChild.nodeValue);


// const ul  = document.createElement('ul');
// const liOne = document.createElement('li');
// const liTwo = document.createElement('li');
// const liOnetext = document.createTextNode("Hello HTML 1 2 3");
// const liTwotext = document.createTextNode("Hello HTML 1 ");
// liOne.appendChild(liOnetext);
// liTwo.appendChild(liTwotext);
// ul.appendChild(liOne);
// ul.appendChild(liTwo);
// document.body.appendChild(ul);





const todoData = [];
const input = document.querySelector('input');
const ul = document.querySelector('ul');
document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    



    if (!input.value) {
        alert('please fill ibput')
    } else {
        todoData.push(input.value);
        let li = "";
        todoData.map(item => {
            li += `<li>${item}</li>`
        
        })
        ul.innerHTML = li;
        localStorage.setItem('todo', JSON.stringify(todoData));
        input.value = ""
        
    }
    
}

const localData = JSON.parse(localStorage.getItem('todo'));
let li = "";
localData.map(item => {
    li += `<li class="list-item">${item}</li>`
    
})
ul.innerHTML = li;

const list = document.querySelectorAll('.list-item');


for(let i =0;i<list.length;i++){
    document.querySelectorAll('.list-item')[i].onclick=()=>{
        document.querySelectorAll('.list-item')[i].style.textDecoration = "line-through";
    }
    list[i].ondblclick=()=>{
        list[i].remove()
    }
}






// const userData = {
//     email: "info@meta.com",
//     pass: "meta123"
// }

// const input = document.querySelectorAll('input')
// document.querySelector('form').onsubmit = e => {
//     e.preventDefault();
//     if (!input[0].value || !input[1].value) {
//         alert('please fill input')
//     } else {
//         if (input[0].value === userData.email && input[1].value === userData.pass) {
//             window.location.assign('https://google.com')
//         } else {
//             alert('email or password is wrong')
//         }
//     }




// }





