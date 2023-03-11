let box_1 = document.querySelector('#box_1'),
box_2 = document.querySelector('#box_2'),
box_3 = document.querySelector('#box_3');

function addWith(a,b,c,){
    a.style.width = '70%';
    let img = a.querySelector('img');
    img.style.transform = 'rotate(45deg)';
    
    img.style.height = '440px';
    img.style.width = '900px';
    let str = a.querySelector('span');
    str.style.fontSize = '330px';

    a.setAttribute('title', 'wide');

    b.style.width = '15%';
    b.setAttribute('title', 'narrow');

    let str_1 = b.querySelector('span');
    str_1.style.fontSize = '56px';

    let img_1 = b.querySelector('img');
    img_1.style.height = '155px';
    img_1.style.width = '155px';
    img_1.style.top ='310px';

    c.style.width = '15%';
    c.setAttribute('title', 'narrow');

    let str_2 = c.querySelector('span');
    str_2.style.fontSize = '56px';

    let img_2 = c.querySelector('img');
    img_2.style.height = '200px';
    img_2.style.width = '155px';
    img_2.style.top ='310px';

}

function lessWidth(a, b,c) {
    a.style.width = '33.3%';

    let img = a.querySelector('img');
    img.style.transform = 'rotate(0deg)'
    img.style.height = '400px';
    img.style.width = '367px';
    img.style.left ='10px';

    let str = a.querySelector('span');
    str.style.fontSize = '135px';
    a.setAttribute('title', 'narrow');

    b.style.width = '33.3%';
    b.setAttribute('title', 'narrow');

    let str_1 = b.querySelector('span');
    str_1.style.fontSize = '135px';

    let img_1 = b.querySelector('img');
    img_1.style.height = '400px';
    img_1.style.width = '367px';
    img_1.style.top ='20%';
    img_1.style.left ='25px';

    c.style.width = '33.3%';
    c.setAttribute('title', 'narrow');

    let str_2 = c.querySelector('span');
    str_2.style.fontSize = '135px';

    let img_2 = c.querySelector('img');
    img_2.style.height = '400px';
    img_2.style.width = '367px';
    img_2.style.top ='20%';
    img_2.style.left ='25px';
}

box_1.addEventListener('click', function(){
  if(box_1.getAttribute('title')=='narrow'){
    addWith(box_1,box_2,box_3);
  }
  else{
    lessWidth(box_1,box_2,box_3);
  }
   
})

box_2.addEventListener('click', function(){
  if(box_2.getAttribute('title')=='narrow'){
    addWith(box_2,box_1,box_3);
  }
  else{
    lessWidth(box_2,box_1,box_3);
  }
})

box_3.addEventListener('click', function(){
  if(box_3.getAttribute('title')=='narrow'){
    addWith(box_3,box_2,box_1);
  }
  else{
    lessWidth(box_3,box_2,box_1);
  }
})