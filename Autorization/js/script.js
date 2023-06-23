const inpt = document.getElementsByTagName('input');
const btn = document.querySelector('button');

let id =0;

function User(name,password) {
  this.name = name;
  this.password = password;
}

window.onload = function() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(localStorage.getItem(key));
  }
}

btn.addEventListener('click', 
function(){
  const name = inpt[0].value;
  const password = inpt[1].value;
  if(name || password){
    localStorage.setItem('name'+id,name);
    localStorage.setItem('password'+id,password);
    id++;
  }
});

