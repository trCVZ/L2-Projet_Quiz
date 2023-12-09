const form = document.getElementById("quiz-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAnswers();
});

// Fonction qui vérifie les réponses, qui change les couleurs des questions en fonction des réponses et affiche le message si tout est bon
function checkAnswers() {
  const questions = document.querySelectorAll('.question-item');
  let allCorrect = true;

  questions.forEach((question, index) => {
    const answers = question.querySelectorAll('.answer');
    let answerSelected = false;

    answers.forEach(answer => {
      if (answer.checked) {
        answerSelected = true;
        if (answer.value === 'true') {
          question.style.color = 'green';
        } else {
          question.style.color = 'red';
          allCorrect = false;
        }
      }
    });


  });

  if (allCorrect) {
    congratulationsAlert.style.display = 'block';
  }
}

// Pour que le message n'apparaisse pas
const congratulationsAlert = document.getElementById('alert');
congratulationsAlert.style.display = 'none';

//Pour que le message disparaisse, peu importe là où l'on clique sur le document
document.addEventListener('click', function (event) {
  congratulationsAlert.style.display = 'none';
})