const todos = [];

window.onload = () => {
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todoText = document.getElementById("todo");
    //const todoText = todo.value;
    
    todos.push(todoText.value);
    todoText.value = "";
    const todoList = document.getElementById("todo-list");
    //const todoTemplate = todos.map(t => `<li>${t}</li>`);
    todoList.innerHTML = todos.map(t => `<li>${t}</li>`).join("");
    
  };
};
