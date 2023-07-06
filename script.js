const questions = [
  {
    question: "Which language run in the Web Browser?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correctOption: "d"
  },
  {
    question: "What does HTML Stand For?",
    a: "HyperText MarkUp Language",
    b: "HyperText MarkDown Language",
    c: "HyperLoop Text Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis ",
    correctOption: "a"
  },
  {
    question: "What does CSS Stand For?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correctOption: "b"
  },
  {
    question: "WWhat year was JavaScript Launched?",
    a: "1945",
    b: "1954",
    c: "1994",
    d: "None of the Above",
    correctOption: "c"
  },
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deSelectAnswers = () => {
    answers.forEach((answer) => answer.checked = false);
}

const selectAnswer = () => {
  let answer; 
  answers.forEach((answerElement) => {
    if(answerElement.checked) answer = answerElement.id;
  })
  return answer;
}

const loadQuiz = () => {
  deSelectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionElement.innerText =  currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();

submit.addEventListener('click' , () => {
 let answer = selectAnswer();
 if(answer){
  if(answer === questions[currentQuiz].correctOption)  score++; currentQuiz++;
  if(currentQuiz < questions.length){
    loadQuiz();
  } else {
   quiz.innerHTML = `<h2>You answered ${score}/${questions.length} questions Correctly.</h2> 
                      <button onclick='window.location.reload()'>Play Again</button>`
  }
 }

});
