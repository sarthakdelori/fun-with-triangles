const base = document.querySelector('#base');
const height = document.querySelector('#height');
const submit = document.querySelector('#submit');
const display = document.querySelector('#display');

function calcHypotenuse(){
  let bs = base.value;
  let ht = height.value;
  let hypo = 0;

  hypo = Math.sqrt(bs**2 + ht**2);

  display.innerHTML = `The length of Hypotenuse is ${hypo.toFixed(2)}`;
}

submit.addEventListener('click', calcHypotenuse);