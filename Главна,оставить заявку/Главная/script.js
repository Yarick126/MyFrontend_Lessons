let btn = document.querySelector('#btn_1');
let f = document.getElementById('form_1');

let btn_2 = document.querySelector('#btn_2');
let f_2 = document.getElementById('form_2');

btn.addEventListener('click', function(){
  if(btn.getAttribute('value')== 'close'){
    f.style.display = 'flex';
    btn.setAttribute('value','open');
  }
  else{
    f.style.display = 'none';
    btn.setAttribute('value','close');
  }
})

btn_2.addEventListener('click', function(){
  if(btn_2.getAttribute('value')== 'close'){
    f_2.style.display = 'flex';
    btn_2.setAttribute('value','open');
  }
  else{
    f_2.style.display = 'none';
    btn_2.setAttribute('value','close');
  }
})