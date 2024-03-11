const form = document.querySelector('form');
const input = document.querySelector("input");
const ul = document.querySelector('ul');
const clearBtn = document.querySelector('#btnClear');
form.onsubmit = e => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<span>${input.value}</span> <button class="btn btn-danger" id="trashBtn"><i  class="fa-solid fa-trash"></i></button> `
    li.setAttribute('class', 'list-group-item d-flex justify-content-between');
    ul.append(li);
    input.value = "";

    const btnTrash = document.querySelectorAll('#trashBtn');
    const lia = document.querySelectorAll('li');

    for (let i = 0; i < btnTrash.length; i++) {
        btnTrash[i].onclick = () => {
            lia[i].remove();
        }

    }

    clearBtn.onclick = () => {
        for (let i = 0; i < lia.length; i++) {
            lia[i].remove();

        }
    }


    for (let i = 0; i < lia.length; i++) {
        lia[i].onclick=()=>{
            lia[i].style.textDecoration = "line-through"
        };

    }

    for (let i = 0; i < lia.length; i++) {
        lia[i].ondblclick=()=>{
            lia[i].style.textDecoration = "none"
        };

    }




}

