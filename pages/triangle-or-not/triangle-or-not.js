const inputs = document.querySelectorAll('.inputs');
const submit = document.querySelector('#submit');
const display = document.querySelector('#display');

function solve(){
  let sum = 0;
  inputs.forEach(angle => {
    if(parseInt(angle.value)>0){
      sum += parseInt(angle.value)
    }
    else if(parseInt(angle.value)<=0){
      sum = -1;
    }
  });
  if(sum === 180){
    display.innerHTML = "Angles form a triangle 📐";
  }else{
    display.innerHTML = "Nooo, Triangle doesn't form 😕";
  }
}

submit.addEventListener('click', solve);