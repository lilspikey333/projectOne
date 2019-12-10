const gameBoard = document.querySelector(".game-board");
let time = document.querySelector(".timer");
let url = "https://opentdb.com/api.php?amount=10";
let answerOptions;

// get that timer number from the DOM

// this is going to get the questions and answers
let fetchData = () => {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let data = res.results;
      console.log(data);
      createQuestion(data);
      timer();
      // Put res data into a variable
      // put in function that takes in res and does stuff with it => createQuestion()
      // start your timer => call timer function
    });
};
fetchData();

let round = 0;
let createQuestion = data => {
  for (let i = round; i < data.length; i++) {
    // Build question
    let question = document.createElement("div");
    question.classList.add("question");
    console.log(question);
    question.textContent = `${data[i].question}`;
    gameBoard.appendChild(question);
    // Build correct answer
    let correctAnswer = document.createElement("div");
    correctAnswer.classList.add("correct-answer", "answer");
    correctAnswer.textContent = `${data[i].correct_answer}`;
    gameBoard.appendChild(correctAnswer);
    // Build incorrect answers
    data[i].incorrect_answers.forEach(answer => {
      let answerDiv = document.createElement("div");
      answerDiv.classList.add("wrong-answer", "answer");
      gameBoard.appendChild(answerDiv);
      answerDiv.textContent = answer;
    });
    let answerOptions = [];
    answerOptions = document.querySelectorAll(".answer");
    console.log(answerOptions); // this is a nodeList! cant loop over them
    answerOptions.forEach(answer => {
      answer.addEventListener("click", verifyAnswer);
    });
  }
};

let counter = 10;
let timer = () => {
  setInterval(() => {
    counter--;
    if (counter <= 0) {
      // createQuestion(round + 1);
      clearInterval(timer);
    } else {
      time.textContent = `${counter} sec`;
    }
  }, 1000);
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

/*Next step is to add event listener to the answer divs and have 
it cycle through the results array each time it's clicked */
