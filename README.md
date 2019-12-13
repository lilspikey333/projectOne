# projectOne

Preview: https://lilspikey333.github.io/projectOne/

## "Medal Plans"

### Bronze

1. Plain styling
1. 10 randomly generated questions
1. Clicking on the answer will determine if answer is correct
1. Messages are displayed on screen
1. Timer for each question

### Silver

1. Better CSS styling with possible bootstrap
1. Modals that display messages when answer is correct or not
1. Final score displayed

### Gold

1. Hover button capabilities
1. Drop-down that allows user to select question categories
1. Drop-down that enables different difficulties
1. All messages to the user are displayed in modals

## Technologies Used

- I decided to utilize and API for the trivia questions and answers that would be pulled in. This
  created a number of issues in regards to data and scope. Because I was utilizing the same list of
  questions that was produced from the beginning, I ultimately had to next all functions in the main function due to the data not existing elsewhere. Given more time, I would see if there were a way to refactor to resolve that 'messy' code.

- To randomize which possible answers were correct versus incorrect, I utilized the Fisher-Yates shuffle to randomize an array of possible answers. There are more details below including a reference to the link and my decision to use this function.

- To prevent users from using Google to cheat in this game, I implemented a timer byt using setInterval and clearInterval. I found the W3Schools documentation to be extremely helpful in figuring out how to best write this function. I ran into several issues along the way with the use of this timer:

  - Almost anytime I added functionality (correct answer, incorrect answer, time running out, repeatability of the game...), there was always a bug in which the timer was running multiple times and 'skipping' numbers as a result. I have many repeated clearIntervals strategically placed throughout my code to reset the timer under all of these conditions.

  - Due to the need to place clearInterval multiple places, I several issues with the timer scope and placement. I had to have it within the scope of the main function to communicate properly with my other functionality.

- I utilized the newest version of Bootstrap for my styling of this Trivia game.

  - The way my game works is almost 'card-like' so each question became a bootstrap card with the questions using the Bootstrap button classes for aesthetics.

  - The Bootstrap modals that popup in the middle of game-play purposefully are different than the modals at the beginning and end of the game so that separate styling could take place without the need of multiple lines of javascript. the game initiation modal does not use Bootstrap due to some styling issues - given more time, I would have resolved that so that they all used Bootstrap for consistency.

## Resources Used

- https://getbootstrap.com/

  - I used Bootstrap as my primary styling utility and overwrote it as I saw fit

- https://git.generalassemb.ly/wdi-nyc-algorithms/whiteboarding-meetup/blob/master/algorithms.md#randomize-an-array

  - After struggling for 6 hours to try and figure out how to randomize my array to append my
    answer HTML elements in a random way, Joe gave me the following link to get the proper code
    snippet from this site.
  - Essentially the Fisher-Yates shuffle says that while there are items in the array needing to be shuffled, take one of those remaining items and switch it out with the current item.

- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://www.w3schools.com/jsref/met_win_clearinterval.asp

  - I used the W3Schools sites to learn how to implement my timer using setInterval and clearInterval
