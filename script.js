let correctAnswer = document.querySelector(".correct-answer");
const gameBoard = document.querySelector(".game-board");
const searchBtn = document.querySelector("#start-button");
let url = "https://opentdb.com/api.php?amount=10";
let answerOption;
// get that timer number from the DOM

// this is going to get the questions and answers
let fetchData = () => {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let data = res;
      createQuestion(data);
      // Put res data into a variable
      // put in function that takes in res and does stuff with it => createQuestion()
      // start your timer => call timer function
    });
};
let createQuestion = data => {
  let question = document.querySelector(".question");
  question.textContent = data.results[0].question;
  correctAnswer.textContent = data.results[0].correct_answer;

  data.results[0].incorrect_answers.forEach(answer => {
    let answerDiv = document.createElement("div");
    answerDiv.classList.add("wrong-answer", "answer");
    gameBoard.appendChild(answerDiv);
    answerDiv.textContent = answer;
  });

  answerOption = document.querySelectorAll(".answer");
  console.log(answerOption); // this is a nodeList! cant loop over them

  answerOption.forEach(answer => {
    answer.addEventListener("click", verifyAnswer);
  });
};

// timer function
// setTimeout(()=>{
// reverse for loop?
// .innerHTML set to i
// }, 1000)
// if timer runs out=> call createQuestion +1

// createQuestion() =>  create divs for: question;
// declare dummy variables
// let something = document.createElement('div').classList.add(`res.correct_answer`)
// let something = document.createElement('div').classList.add(`res.incorrect_answer`)
// .textContent(answer.results[0])
// answers. save these in a variables
// put them into an array, to randomize them
// append

// Math.random for randomizer of divs - separate function

let verifyAnswer = e => {
  selectedDiv = e.target;
  console.log(selectedDiv);
  if (selectedDiv.classList.contains("wrong-answer")) {
    alert("Sorry - That was not the right answer");
  } else if (selectedDiv.classList.contains("correct-answer")) {
    alert("Congrats! That was correct!");
  }
};

searchBtn.addEventListener("click", fetchData);

/*Next step is to add event listener to the answer divs and have 
it cycle through the results array each time it's clicked */
