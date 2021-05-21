// to do application...

// select Element and assgin them to variable....

// let form = document.querySelector('form');
let newTask = document.querySelector("#new-task");
let ToDoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-box ul");
let li = document.querySelector(".item");

// create function.....

let createTask = function(task) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.className = "check";
    let label = document.createElement("label");
    label.innerHTML = task;
    checkbox.type = "checkbox";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
};

let addTask = function(e) {
    e.preventDefault();
    let listItem
        // avoiding empty task
    if (newTask.value) {
        listItem = createTask(newTask.value);
    }
    ToDoUl.appendChild(listItem);
    newTask.value = "";

    // Bind the new list Item to the incomplete list...
    //console.log(listItem)
    BindIncompleteListItem(listItem, completeTask);
};

let completeTask = function(e, taskItem) {
    //let listItem = this.parentNode;
    //let deleteBtn = document.createElement('button');
    //deleteBtn.className = 'Delete';
    //deleteBtn.innerText = 'Remove';
    //console.log(listItem)
    //listItem.appendChild(deleteBtn);

    taskItem.className = "item";
    let button = e.childNodes[3].cloneNode(true);
    //button.textContent = 'DELETE'
    let checkbox = taskItem.querySelector(".check");
    checkbox.remove();
    taskItem.appendChild(button);
    completeUl.appendChild(taskItem);
    //BindcompleteListItem(listItem, deleteTask)
    BindcompleteListItem(taskItem);
};

//console.log(completeTask())
let deleteTask = function() { // // this function not in use
    let listItem = this.parentNode;
    let Ul = listItem.parentNode;

    Ul.removeChild(listItem);
    console.log("list" + listItem);
};

// create function bind checkbox Incomplete List.....

let BindIncompleteListItem = function(taskItem, clickBox) {
    let checkbox = taskItem.querySelector(".check"); // mistake -> listItem.querySelector('.check')
    checkbox.onChange = clickBox;
    checkbox.addEventListener("change", checkBoxHandler);

    function checkBoxHandler(e) {
        clickBox(li, taskItem);
    }
};

let BindcompleteListItem = function(taskItem /*, deleteBtnClick*/ ) {
    let deleteItems = document.querySelectorAll(".Delete");
    //deleteItem.onclick = deleteBtnClick;
    deleteItems.forEach((deleteItem) => {
        deleteItem.addEventListener(
            "click",
            (e) => deleteHandler(e, taskItem)
        );
    });
};

// Function to delete complete tasks

function deleteHandler(e, taskItem) {
    e.stopImmediatePropagation();

    parent = document.querySelector("#items-complete-box");
    parent.removeChild(taskItem);
}

btn.addEventListener("click", addTask);

// SuccessFull...