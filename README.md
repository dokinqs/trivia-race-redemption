# trivia-race-redemption

[game demo site](https://dokinqs.github.io/trivia-race-redemption/)

### Game

user answers all 5 questions and rabbit wins or 30 second timer runs out and turtle wins

### Notes

jQuery, click event to trigger game, hide and show divs to change from page to page
setInterval and clearInterval to set and end 30 second timer
for each click on answer button, keeps track of score and increments current question index
move progress bar of correct answers with rabbit, responsive
$('.rabbit').animate({left: "+=17vw"}, 400); 
$('.turtle').animate({left: "+=80vw"}, 100);

if (parseInt($(this).val()) === QUESTIONS[currentQ].correctAns) {
      moveRabbit(); 
