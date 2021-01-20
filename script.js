const todoInput = document.querySelector('.text');
const todoBtn = document.querySelector('.btn');
const todoList = document.querySelector('.list');

todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newList = document.createElement('li');
    newList.innerText = todoInput.value;
    newList.classList.add('item');
    todoDiv.appendChild(newList);

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class = "fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);

   todoList.appendChild(todoDiv); 
   todoInput.value = '';
}

function deleteCheck(e){
    
    const item = e.target;

    if(item.classList[0] === "delete-btn"){
       
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === "complete-btn"){
       
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}