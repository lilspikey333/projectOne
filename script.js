const answer = document.querySelector(".answer");
const gameBoard = document.querySelector(".game-board");
let url = "https://opentdb.com/api.php?amount=10";





let fetchData = () => {
  let question = document.querySelector(".question");
  fetch(url)
    .then(res => res.json())
    .then(res => {
      
      question.textContent = res.results[0].question;
      res.results[0].incorrect_answers.forEach(answer => {
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("wrong-answer");
        gameBoard.appendChild(answerDiv);
        answerDiv.textContent = answer;
      });
      answer.innerHTML = res.results[0].correct_answer;
    });
};

fetchData();

