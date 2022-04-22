const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-form input");
let toDos = [];
const TODOS_KEY = "todos"


function deleteTodo(event) {
    const liDelete = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(liDelete.id));
    liDelete.remove();
    saveTodos();
    const checkTodos = localStorage.getItem(TODOS_KEY);
    if (checkTodos === '[]') {
        todoList.style.display = "none";
        console.log('No List!')
    }
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `${newTodo.text}`;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
    todoList.classList.remove('hidden')
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text : newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    todoInput.value = "";
    todoList.style.display = "block"
    paintTodo(newTodoObj);
    saveTodos();
}



todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
} 


