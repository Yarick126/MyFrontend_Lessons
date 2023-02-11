let addMessage = document.querySelector('.message'), 
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

todoList = [];

if(localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'))
  displayMessages();
}


addButton.addEventListener('click', function(){
  newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  }

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem('todo',JSON.stringify(todoList));
});

function displayMessages(){
  let displayMessage = '';
  todoList.forEach(function(item, i){
    displayMessage += `
      <li> 
        <input type = 'checkbox' id ='item_${i}' ${item.checked? 'checked' : ''}  />
        <label for = 'item_${i}' class = "${item.important? 'important': ''}">${item.todo}</label>
      </li>
    `;
    todo.innerHTML = displayMessage;
  }) 
}

todo.addEventListener('change', function(e){
  let content = todo.querySelector('[for = ' + e.target.getAttribute('id')+']').innerHTML;
  
  todoList.forEach(function(item){
    if(content === item.todo){
      item.checked = !item.checked;
      localStorage.setItem('todo',JSON.stringify(todoList));
    }
  });
})

todo.addEventListener('contextmenu', function(e){
  e.preventDefault();

  todoList.forEach(function(item,i){
    if(item.todo === e.target.innerHTML){
      if(e.ctrlKey){
        todoList.splice(i,1);
      }
      else{
        item.important = !item.important;
      }
      displayMessages();
      localStorage.setItem('todo',JSON.stringify(todoList));
    }
  })
});