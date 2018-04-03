# trivia-race-redemption

# Technologies used

jQuery
.click() when user selects an answer button

if (parseInt($(this).val()) === QUESTIONS[currentQ].correctAns) {
      moveRabbit();

HTML 
put elements

# Approach taken

click event to trigger game, hide and show divs to change from page to page
setInterval and clearInterval to set and end 30 second timer
for each click on answer button, keeps track of score and increments current question index
move progress bar of correct answers with rabbit, $('.rabbit').animate({left: "+=17vw"}, 400); to make it responsive, compared to $('.turtle').animate({left: "+=80vw"}, 100); 

# Installation Instructions

user enters name
user chooses answers to questions as they appear
either 30 second timer runs out or user attempts all five questions
result page - win or lose, option to replay

# Unsolved Problems
div to blur background image
game is rather ugly and random, maybe should have used simple backgrounds
