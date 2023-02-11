let descripction = document.querySelector('.description'), addButton = document.querySelector('.addToDo'),todo = document.querySelector('.list');

let check = document.getElementById('radio_1');
toDoList = [];

if(localStorage.getItem('todo')){
  toDoList = JSON.parse(localStorage.getItem('todo'))
  displayToDOList();
}

addButton.addEventListener('click', function(){
  newToDo = {
    todo: descripction.value,
    checked: false,
    important: check.checked == true? true:false,
  }
  
  toDoList.push(newToDo);
  displayToDOList();
  localStorage.setItem('todo', JSON.stringify(toDoList));
});

function displayToDOList(){
  let displayToDo = '';
  toDoList.forEach(function(item,i){
    displayToDo += `
    <li class= "todoItem">
        <button class="deleteToDo" id=${i} type="button">X</button>
        <input type="checkbox" id= "item_${i}" ${item.checked? 'checked' : ''} value=${item.important?'i':''}>
        <label for="item_${i}">${item.todo}</label>
    </li>
  `;
  todo.innerHTML = displayToDo;

  })
}

todo.addEventListener('change', function(e){
  let content = todo.querySelector('[for='+e.target.getAttribute('id')+']').innerHTML;

  toDoList.forEach(function(item){
    if(content === item.todo){
      item.checked = !item.checked;
      localStorage.setItem('todo',JSON.stringify(toDoList));
    }
  })
});

if(todo.querySelector('.deleteToDo')){
  let deleteToDo = todo.querySelector('.deleteToDo');
  
  deleteToDo.addEventListener('click', function(e){
    let idEl = todo.querySelector('[id='+ e.target.getAttribute('id')+']').id;

    console.log(idEl);

    toDoList.forEach(function(item,i){
      if(idEl==i){
        toDoList.slice(i,1);
      }
    })
  });
}
