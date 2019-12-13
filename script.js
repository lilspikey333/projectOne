let gameBoard = document.querySelector(".game-board");
let time = document.querySelector(".timer");
let scoreDisplay = document.querySelector("#score");
let startBtn = document.querySelector(".modal-button");
let modal = document.querySelector("#modal");
let modalTitle = modal.querySelector("#modal-header");
let modalText = modal.querySelector("p");
let resultsModal = document.querySelector("#results-modal");
let resultsModalText = resultsModal.querySelector("p");
const resultsBtn = document.querySelector(".results-button");
let url = "https://opentdb.com/api.php?amount=10";
let answerOptions;
let score = 0;
let wrong = 0;
let counter = 10;
let t;
let playing = false;
let resultsToggled = false;

let closeModal = () => {
  clearInterval(t);
  counter = 10;
  score = 0;
  wrong = 0;
  scoreDisplay.innerHTML = `0/10`;
  playing = true;
  modal.style.display = "none";
  fetchData();
};
let openModal = () => {
  modal.style.display = "block";
  modalTitle.textContent = `Congratulations! Your score is ${score} / 10!`;
  modalText.textContent = `Would you like to play again?`;
};

startBtn.addEventListener("click", closeModal);

let fetchData = () => {
  fetch(url)
    .then(res => res.json())
    .then(res => {
      let data = res.results;
      createQuestion(data);
    });
};

let createQuestion = data => {
  let closeResults = () => {
    resultsModal.style.display = "none";
    resultsToggled = false;
    clearInterval(t);
    createQuestion(data);
  };
  if (score + wrong === 0) {
    resultsBtn.removeEventListener("click", closeResults);
    resultsBtn.addEventListener("click", closeResults);
  }
  let timer = () => {
    t = setInterval(() => {
      counter--;
      if (counter < 0) {
        clearInterval(t);
        wrong = wrong + 1;
        gameBoard.innerHTML = "";
        resultsModalText.textContent = `Time's Up! Next Question!`;
        resultsModal.style.display = "block";
        resultsToggled = true;
        counter = 11;
      } else {
        time.innerHTML = `${counter} sec`;
      }
    }, 1000);
  };

  if (playing === true) {
    timer();
    // Build question
    let combinedAnswers = [];
    let question = document.createElement("div");
    question.classList.add("question", "card-title");
    question.innerHTML = `${data[0].question}`;
    gameBoard.appendChild(question);
    // Build correct answer
    let correctAnswer = document.createElement("div");
    correctAnswer.classList.add(
      "correct-answer",
      "answer",
      "btn",
      "btn-primary"
    );
    correctAnswer.innerHTML = `${data[0].correct_answer}`;
    combinedAnswers.push(correctAnswer);
    // Build incorrect answers
    data[0].incorrect_answers.forEach(answer => {
      let wrongAnswer = document.createElement("div");
      wrongAnswer.classList.add("wrong-answer", "answer", "btn", "btn-primary");
      wrongAnswer.innerHTML = answer;
      combinedAnswers.push(wrongAnswer);
    });
    data.shift(); // Remove the first item from the data array so that the new data[0] is the next in line

    let verifyAnswer = e => {
      selectedDiv = e.target;
      // console.log("this is verify answer");
      // resultsBtn.removeEventListener("click", closeResults);
      // resultsBtn.addEventListener("click", closeResults);
      if (selectedDiv.classList.contains("wrong-answer")) {
        resultsModalText.textContent = `Sorry - That was not the right answer`;
        resultsModal.style.display = "block";
        resultsToggled = true;
        wrong = wrong + 1;
        clearInterval(t);
        counter = 11;
      } else if (selectedDiv.classList.contains("correct-answer")) {
        resultsModalText.textContent = `Congrats! That was correct!`;
        resultsModal.style.display = "block";
        resultsToggled = true;
        score = score + 1;
        clearInterval(t);
        counter = 11;
      }
      combinedScore = score + wrong;
      if (combinedScore === 10) {
        playing = false;
        clearInterval(t);
        openModal();
      }
      scoreDisplay.innerHTML = `${score}/10`;
      gameBoard.innerHTML = "";
      if (resultsToggled === true) {
        counter = 10;
      }
    };
    /* After struggling for 6 hours to try and figure out how to randomize my array to append my 
      answer HTML elements in a random way, Joe gave me the following link to get the proper code 
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
