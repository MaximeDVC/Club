// ====== script_portes.js ======
const questions = [
  {
    question: "Quel peintre a créé la Joconde ?",
    answer: "léonard de vinci",
    hint: "L"
  },
  {
    question: "Quel instrument a des touches noires et blanches ?",
    answer: "piano",
    hint: "U"
  },
  {
    question: "Qui a écrit Les Misérables ?",
    answer: "victor hugo",
    hint: "M"
  },
  {
    question: "Quelle danse se pratique souvent en tutu ?",
    answer: "ballet",
    hint: "I"
  },
  {
    question: "Quel art utilise une caméra ?",
    answer: "cinéma",
    hint: "È"
  },
  {
    question: "Quel art construit des maisons ?",
    answer: "architecture",
    hint: "R"
  },
  {
    question: "Quel art consiste à sculpter la pierre ou le bois ?",
    answer: "sculpture",
    hint: "E"
  }
];

let currentIndex = null;
let collectedHints = Array(7).fill('_');

function openDoor(index) {
  currentIndex = index;
  document.getElementById('question-text').textContent = questions[index].question;
  document.getElementById('answer-input').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('question-box').classList.remove('hidden');
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
  const correctAnswer = questions[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    collectedHints[currentIndex] = questions[currentIndex].hint;
    document.getElementById('feedback').textContent = "✅ Bonne réponse ! Indice ajouté.";
  } else {
    document.getElementById('feedback').textContent = "❌ Mauvaise réponse. Essaie encore !";
  }

  updateFinalCode();
}

function updateFinalCode() {
  const display = collectedHints.map(letter => `<span>${letter}</span>`).join('');
  document.getElementById('final-code').innerHTML = display;
}
