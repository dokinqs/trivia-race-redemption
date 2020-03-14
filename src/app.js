$(document).ready(() => {
  const QUESTIONS = [{
      question: "Most expensive domain name of all time?",
      choices: [
        "CarInsurance.com",
        "Internet.com",
        "Business.com",
        "PrivateJet.com"
      ],
      correctAns: 0
    },
    {
      question: "Nephelococcygia is the practice of doing what?",
      choices: [
        "Finding shapes in clouds",
        "Sleeping with eyes open",
        "Breaking glass with voice",
        "Swimming in cold water"
      ],
      correctAns: 0
    },
    {
      question: "NOT a lifeline in Who Wants to be a Millionaire?",
      choices: [
        "Ask the Audience",
        "Get a Hint",
        "Phone a Friend",
        "50:50"
      ],
      correctAns: 1
    },
    {
      question: "What color is Amaranth?",
      choices: [
        "Green",
        "Blue",
        "Red",
        "Silver"
      ],
      correctAns: 2
    },
    {
      question: "Who is John Cena?",
      choices: [
        "Wrestler, actor, rapper",
        "Who? I don't see anyone",
        "Incorrect answer",
        "BUM BA DUM BUMM"
      ],
      correctAns: 0
    }
  ];
  let username,
    currentQ = 0,
    correctScore = 0,
    timeCount = 30;

  //// 1. show landing page
  $('.reset').hide();
  $('.reset').click(() => {
    location.reload();
  });
  $('.lastpage').hide();

  //// 2. click on start
  $('.startform').submit((e) => {
    e.preventDefault();
    getUsername();
    $('.firstpage').hide();
    playGame();
    timerVar = setInterval(timer, 1000);
  });
  // save submitted username
  function getUsername() {
    if ($('input').val() === undefined || $('input').val() === null || $('input').val() === "") {
      username = "Harey";
    } else {
      username = $('input').val();
    }
    // console.log(`Hi ${username}`);
    return username;
  }
  
  //// 3. start game and show quiz
  function playGame() {
    $('body').show();
    $('body').css('background-color', "#9cd3a3");
    $('.quiz').show();
    $('.icons').show();
    showQuestionsAns();
    moveTurtle();
  }

  function timer() {
    timeCount -= 1;
    if (timeCount === 0) {
      clearInterval(timerVar);
      console.log("time's up!");
      showAns();
    } else {
      $('.timer').html(`${timeCount} seconds left`);
      // console.log(`${timeCount} sec left`);
    }
  }

  // load one question at a time
  function showQuestionsAns() {
    // if end of quiz
    if (currentQ === QUESTIONS.length || timeCount === 0) {
      clearInterval(timerVar);
      console.log('end of questions');
      showAns();
      return;
    }
    // seconds left in timer
    $('.timer').html(`${timeCount} seconds left`);
    // show question and answer choices
    $('.questions').html(QUESTIONS[currentQ].question);

    $('.a').html(QUESTIONS[currentQ].choices[0]);
    $('.b').html(QUESTIONS[currentQ].choices[1]);
    $('.c').html(QUESTIONS[currentQ].choices[2]);
    $('.d').html(QUESTIONS[currentQ].choices[3]);

    // console.log(`Question #${currentQ+1}`)
    // console.log(QUESTIONS[currentQ].choices);
    // console.log(`Correct ans: ${QUESTIONS[currentQ].correctAns}`);
  }

  // move turtle timer right
  function moveTurtle() {
    $('.turtle').animate({
      left: "+=80vw"
    }, 100);
  }
  // move rabbit right if correct answer
  function moveRabbit() {
    $('.rabbit').animate({
      left: "+=17vw"
    }, 400);
  }

  //// 4. show next question after answer clicked
  $('.ans').click(({currentTarget}) => {
    // (event, event.currentTarget destructured)
    // if JOHN CENA
    if (currentQ === 4 && parseInt($(currentTarget).val()) == 3) {
      window.location = "https://www.youtube.com/watch?v=4k1xY7v8dDQ";
    }
    // if clicked last answer of quiz
    if (currentQ === 5 && parseInt($(currentTarget).val()) === QUESTIONS[currentQ].correctAns) {
      moveRabbit();
      console.log('last answer correct');
      return;
    } else if (currentQ === 5) {
      console.log('last answer wrong');
      return;
    // not last answer and is correct answer 
    } else if (parseInt($(currentTarget).val()) === QUESTIONS[currentQ].correctAns) {
      moveRabbit();
      correctScore += 1;
      // console.log("User ans: " + $(currentTarget).val());
      console.log(`Correct! Current score: ${correctScore}`);
    // not last answer and is wrong answer
    } else {
      // console.log("User ans: " + $(currentTarget).val());
      console.log(`Wrong. Current score: ${correctScore}`);
    }
    currentQ += 1;
    showQuestionsAns();
  });

  //// 5. show total score and answers at end
  function showAns() {
    // console.log(`TOTAL correct score: ${correctScore}`);
    $('.quiz').hide();
    $('.icons').hide();
    $('.lastpage').show();
    // if won
    if (correctScore === QUESTIONS.length) {
      $('h1').appendTo('body').text('You Won!');
      $('body').css('background-image', "url('https://giftsandmiracles.com/wp-content/uploads/2016/04/happy-bunny.jpg')");
      console.log('Wow, perfect score!');
    // if lost
    } else {
      $('h1').appendTo('body').text('You Lost...');
      $('body').css('background-image', "url('https://cdn-images-1.medium.com/max/1600/1*b2yqUDKglMbMlsnYKCCLnw.jpeg')");
      console.log('Wanna try again?');
    }
    let results = `${username}, you got ${correctScore} out of ${QUESTIONS.length} questions correct in ${30-timeCount} seconds!`;
    console.log(results);
    $('h2').appendTo('body').html(results);
    $('.reset').show();
  }

});
