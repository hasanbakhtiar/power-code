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
document.querySelector('button').onclick = () => {
    // let li = document.createElement('li');
    // li.innerHTML = input.value;
    // ul.appendChild(li);


    todoData.push(input.value);
    let li = "";

    todoData.map(item => {
        li += `<li>${item}</li>`
    })
    ul.innerHTML = li;
    localStorage.setItem('todo', JSON.stringify(todoData));
    input.value = ""

}
const localData = JSON.parse(localStorage.getItem('todo'));
let li = "";
localData.map(item => {
    li += `<li>${item}</li>`
})
ul.innerHTML = li;




