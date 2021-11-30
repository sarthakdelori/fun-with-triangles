const submit = document.querySelector('#submit');
const quizForm = document.querySelector('#quiz-form');
const display = document.querySelector('#display');

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calcScore(){
  let score = 0;
  let index = 0;

  const formData = new FormData(quizForm); 

  for(let value of formData.values()){
    if(value === correctAnswers[index]){
      score++;
    }
    index++;
  } 

  display.innerHTML = `Final Score: ${score}.`;
}

submit.addEventListener('click', calcScore);