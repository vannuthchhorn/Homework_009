
const LIST_HTML = document.querySelector("#card");
const INPUT_HTML = document.querySelector("#input");

let todoItems = [];
let id = 0;
let data = localStorage.getItem("TODO");
if (data) {
  todoItems = JSON.parse(data);
  id = todoItems.length;
  updateList();
}

document.addEventListener("keyup", event => {
	if (event.code === "Enter") {
    const inputValue = INPUT_HTML.value;

    if(inputValue ===""){
      INPUT_HTML.value = "";
    }else{
      addTodo(inputValue);
      clearInput();
    }
    
  }
});
const addIcon = document.querySelector('#btnAdd');
addIcon.addEventListener("click", event => {
    const inputValue = INPUT_HTML.value;
    if(inputValue ===""){
      INPUT_HTML.value = "";
    }else{
      addTodo(inputValue)
      clearInput();
    }
  
});

function clearInput() {
	INPUT_HTML.value = "";
}
function getTodoFromId(id) {
  for(let item of todoItems) {
    if(item.id === id) {
      return  item;
    }
  }
  return null;
}

function addTodo(todoName) {
  todoItems.push({name: todoName, id : id, done: false});
  id++;
  saveJson() 
	updateList();
}

function updateList() {
  let code = "";
  for(let item of todoItems) {
    code += `
    <div class="col-3">
        <h2>${item.name}</h2>
        <button id="btn">card</button>
    </div>`;
  }
  LIST_HTML.innerHTML = code;
}

function saveJson() {
   localStorage.setItem("TODO", JSON.stringify(todoItems));
}