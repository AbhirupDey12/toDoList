// event bubbling / event propagation
// event capturing
// event delegation

const todoForm = document.querySelector(".form-todo");

const todoInput = document.querySelector(".form-todo input[type='text']");

const ul = document.querySelector('.todo-list');

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newinnerHTML =
        `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newinnerHTML;
    console.log(newLi);
    ul.append(newLi);
    todoInput.value = "";
});

ul.addEventListener('click', (e) => {
    // check if user clicked on the done button 
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi) ;
        targetedLi.remove();
    }

    if (e.target.classList.contains("done")) {
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }



})