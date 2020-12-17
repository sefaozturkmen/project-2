//UI Elements
const form = document.querySelector('form');
var input = document.getElementById("search");
const taskList = document.getElementById('taskList');

eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);
}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
        return;
    }
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = "<img src='assets/clock.svg'>"
    li.appendChild(document.createTextNode(input.value));

    //      create button
    const button = document.createElement('button');
    button.classList = 'btn float-end';

    // create img 
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/close.svg')
    img.className = 'delete'

    //add img to button 
    button.appendChild(img);

    //add button to li

    li.appendChild(button);


    // add li to ul 
    taskList.appendChild(li);

    input.value = '';
    e.preventDefault();
}

// delete an item
function deleteItem(e) {

    if (e.target.className === 'delete') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}