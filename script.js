let gameBoard = document.querySelector(".game-board");
let time = document.querySelector(".timer");
let scoreDisplay = document.querySelector("#score");
let url = "https://opentdb.com/api.php?amount=10";
let answerOptions;
let score = 0;
// get that timer number from the DOM

let fetchData = () => {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let data = res.results;
      createQuestion(data);
    });
};
fetchData();

let createQuestion = data => {
  if (!document.querySelector(".question")) {
    timer();
    // Build question
    let combinedAnswers = [];
    let question = document.createElement("div");
    question.classList.add("question");
    question.innerHTML = `${data[0].question}`;
    gameBoard.appendChild(question);
    // Build correct answer
    let correctAnswer = document.createElement("div");
    correctAnswer.classList.add("correct-answer", "answer");
    correctAnswer.innerHTML = `${data[0].correct_answer}`;
    combinedAnswers.push(correctAnswer);
    // Build incorrect answers
    data[0].incorrect_answers.forEach(answer => {
      let wrongAnswer = document.createElement("div");
      wrongAnswer.classList.add("wrong-answer", "answer");
      wrongAnswer.innerHTML = answer;
      combinedAnswers.push(wrongAnswer);
    });
    data.shift(); // Remove the first item from the data array so that the new data[0] is the next in line

    let verifyAnswer = e => {
      selectedDiv = e.target;
      if (selectedDiv.classList.contains("wrong-answer")) {
        alert("Sorry - That was not the right answer");
      } else if (selectedDiv.classList.contains("correct-answer")) {
        alert("Congrats! That was correct!");
        score = score + 1;
      }
      scoreDisplay.innerHTML = `${score}/10`;
      gameBoard.innerHTML = "";
      time.textContent = `${counter} sec`;
      createQuestion(data);
    };
    /* After struggling for 6 hours to try and figure out how to randomize my array to append my 
    amnswer HTML elements in a random way, Joe gave me the following link to get the proper code 
    snippet from: https://git.generalassemb.ly/wdi-nyc-algorithms/whiteboarding-meetup/blob/master/algorithms.md#randomize-an-array
    I have studied it though and understand now that it is  */
    let randomizeAnswers = array => {
      let len = array.length;
      let last;
      let random;
      while (len) {
        random = Math.floor(Math.random() * (len -= 1));
        last = array[len];
        array[len] = array[random];
        array[random] = last;

        return array;
      }
    };
    randomizeAnswers(combinedAnswers);
    combinedAnswers.forEach(answer => {
      gameBoard.appendChild(answer);
      answer.addEventListener("click", verifyAnswer);
    });
  }
};

let counter = 10;
let timer = () => {
  setInterval(() => {
    counter--;
    if (counter <= 0) {
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
