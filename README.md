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

### API

I decided to utilize and API for the trivia questions and answers that would be pulled in. This
created a number of issues in regards to data and scope. Because I was utilizing the same list of
questions that was produced from the beginning, I ultimately had to next all functions in the main function due to the data not existing elsewhere. Given more time, I would see if there were a way to refactor to resolve that 'messy' code.

### Fisher-Yates Shuffle

To randomize which possible answers were correct versus incorrect, I utilized the Fisher-Yates shuffle to randomize an array of possible answers. There are more details below including a reference to the link and my decision to use this function.

### setInterval and clearInterval

To prevent users from using Google to cheat in this game, I implemented a timer by using setInterval and clearInterval. I found the W3Schools documentation to be extremely helpful in figuring out how to best write this function. I ran into several issues along the way with the use of this timer:

- Almost anytime I added functionality (correct answer, incorrect answer, time running out, repeatability of the game...), there was always a bug in which the timer was running multiple times and 'skipping' numbers as a result. I have many repeated clearIntervals strategically placed throughout my code to reset the timer under all of these conditions.

- Due to the need to place clearInterval multiple places, I several issues with the timer scope and placement. I had to have it within the scope of the main function to communicate properly with my other functionality.

### Bootstrap

I utilized the newest version of Bootstrap for my styling of this Trivia game.

- The way my game works is almost 'card-like' so each question became a bootstrap card with the questions using the Bootstrap button classes for aesthetics.

- The Bootstrap modals that popup in the middle of game-play purposefully are different than the modals at the beginning and end of the game so that separate styling could take place without the need of multiple lines of javascript. the game initiation modal does not use Bootstrap due to some styling issues - given more time, I would have resolved that so that they all used Bootstrap for consistency.

## Resources Used

- https://opentdb.com/api_config.php

  - Early on, I found this amazing trivia API and relied on it exclusively for the data for this game

- https://getbootstrap.com/

  - With Kenny's advice, I used Bootstrap as my primary styling utility and overwrote it as I saw fit

- https://git.generalassemb.ly/wdi-nyc-algorithms/whiteboarding-meetup/blob/master/algorithms.md#randomize-an-array

  - From the API, I had both one correct answer and any number incorrect answers coming in. I placed those in an array and wanted to append them to the parent div in a random way.
  - After struggling for 6 hours to try and figure out how to randomize my array to append my
    answer HTML elements, Joe gave me this link to get the proper code
    snippet from this site.
  - Essentially the Fisher-Yates shuffle says that while there are items in the array needing to be shuffled, take one of those remaining items and switch it out with the current item.

- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://www.w3schools.com/jsref/met_win_clearinterval.asp

  - I used the W3Schools sites to learn how to implement my timer using setInterval and clearInterval

## Future Plans / Possible Improvements

Looking at my initial plan, I ended up being halfway through with completing my Gold - I'm very happy with that!!!
If I had the time to refactor (and deal with the inevitable bugs along the way), I would expand on the following:

- I really wanted to get those drop-downs created and working to allow the user to choose their quiz questions better. Honestly, I will probably do this soon anyway because I think the user experience will be much better

- Although I focused on mobile functionality primarily (where my users will most likely be), I think I could have improved the responsiveness with media queries. I don't love the desktop version of my game and see possible improvements there

- As I mentioned above, I'm not too happy that everything had to be in one major function because of the nature of the API data. It would take me a while to see if that is even possible to refactor, but it's something that I would try at least.

- I think I have interacting with the DOM and changing DOM element properties in javascript down, but I would like to get better at transferring those DOM elements to JS objects and properties instead. I think this program could be improved in that way.
