const base = document.querySelector('#base');
const height = document.querySelector('#height');
const submit1 = document.querySelector('#submit1');
const submit2 = document.querySelector('#submit2');
const display = document.querySelector('#display');
const contType = document.querySelector('#formula-list');
const choose = document.querySelector('#choose-btn');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');


container1.style.display = 'none';
container2.style.display = 'none';

function choice(){
  let chse = contType.value;
  if(chse === 'nothing'){
    alert('Choose the number of sides first');
    container1.style.display = 'none';
    container2.style.display = 'none';
  }
  else if(chse === 'base-height'){
    container1.style.display = 'block';
    container2.style.display = 'none';
  }
  else if(chse === 'herons'){
    container2.style.display = 'block';
    container1.style.display = 'none';
  }
}

choose.addEventListener('click', choice);

function baseheight(){
  let bs = base.value;
  let ht = height.value;
  let area = 0;

  area = (bs * ht)/2;

  display.innerHTML = `The area of triangle is ${area.toFixed(2)}  units`;
  // console.log(hypo);
}

submit1.addEventListener('click', baseheight);

function herons(){
  let frst = parseInt(first.value);
  let scnd = parseInt(second.value);
  let thrd = parseInt(third.value);
  let s = 0;
  let area = 0;
  
  s += (frst+scnd+thrd);
  s/=2;

  area = Math.sqrt((s*(s-frst)*(s-scnd)*(s-thrd)));

  // console.log(s);
  display.innerHTML = `The area of triangle is ${area.toFixed(2)} units`;
  // console.log(hypo);
}

submit2.addEventListener('click', herons);
