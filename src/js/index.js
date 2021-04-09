function check() {
  const question1 = document.quiz.question1.value;
  const question2 = document.quiz.question2.value;
  const question3 = document.quiz.question3.value;
  const question4 = document.quiz.question4.value;
  const question5 = document.quiz.question5.value;
  let correct = 0;

  if (question1 == "10") {
    correct++;
  }

  if (question2 == "40") {
    correct++;
  }

  if (question3 == "75") {
    correct++;
  }

  if (question4 == "140") {
    correct++;
  }

  if (question5 == "1465") {
    correct++;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
}
