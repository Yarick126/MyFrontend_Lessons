const form = document.querySelector('form');

function User(firstName,secondName,login,password){
  this.firstName = firstName;
  this.secondName = secondName;
  this.login = login;
  this.password = password;
}



function chekName(firtName, secondName){
  let isValid = true;
  if(/\d/.test(firtName) || /\d/.test(secondName)){
    isValid = false;
  }
  if(/^[\u0400-\u04FF]+$/.test(firtName) || /^[\u0400-\u04FF]+$/.test(secondName)){
    isValid = false;
  }
  return isValid;
}


function createUser(event) {
  event.preventDefault();

  let userFName = document.getElementById('firstName').value;
  let userSName = document.getElementById('secondName').value;
  let userPassword = document.getElementById("password").value;
  let userRepPassword = document.getElementById("repPassword").value;


  if(!chekName(userFName,userSName)){
    alert("Invalid username");
  }
  else{
    alert(userSName);
  }

}

form.addEventListener('submit',createUser);