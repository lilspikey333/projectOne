let correctAnswer = document.querySelector(".correct-answer");
const gameBoard = document.querySelector(".game-board");
const searchBtn = document.querySelector("#start-button");
let url = "https://opentdb.com/api.php?amount=10";

let fetchData = () => {
  let question = document.querySelector(".question");
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);

      question.textContent = res.results[0].question;
      correctAnswer.textContent = res.results[0].correct_answer;
      res.results[0].incorrect_answers.forEach(answer => {
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("wrong-answer");
        answerDiv.classList.add("answer");
        gameBoard.appendChild(answerDiv);
        answerDiv.textContent = answer;
      });
    });
};

searchBtn.addEventListener("click", fetchData);

/*Next step is to add event listener to the answer divs and have 
it cycle through the results array each time it's clicked */
