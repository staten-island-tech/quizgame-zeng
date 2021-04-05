var score = 0;
const questionContent = [
  {
    questionOne: "What is 5 + 5?",
    a: "10",
    b: "8",
    c: "20",
    d: "15",
    correctChoice: "a",
  },
  {
    questionTwo: "What is 10 + 30?",
    a: "30",
    b: "20",
    c: "50",
    d: "40",
    correctChoice: "d",
  },
  {
    questionThree: "What is 25 + 50?",
    a: "70",
    b: "80",
    c: "75",
    d: "65",
    correctChoice: "c",
  },
  {
    questionFour: "What is 60 + 80?",
    a: "110",
    b: "140",
    c: "86",
    d: "130",
    correctChoice: "b",
  },
  {
    questionFive: "What is 589 + 876?",
    a: "1365",
    b: "1465",
    c: "1565",
    d: "1665",
    correctChoice: "b",
  },
];

function check() {
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  if (questionOne == "a") {
    score++;
  }
  if (questionTwo == "d") {
    score++;
  }
  if (questionThree == "c") {
    score++;
  }
  if (questionFour == "b") {
    score++;
  }
  if (questionFive == "b") {
    score++;
  }

  if (score <= 3) {
    result.textContent = "Your result is $(score). You did poorly!";
  } else {
    result.textContent = "Your result is $(score). You did great!";
  }
}
