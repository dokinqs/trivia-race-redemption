$(document).ready(() => {
  const QUESTIONS = [{
      question: "Which URL is the most expensive domain name of all time?",
      choices: [
        "Insurance.com",
        "Internet.com",
        "Business.com",
        "Beer.com"
      ],
      correctAns: 0
    },
    {
      question: "Nephelococcygia is the practice of doing what?",
      choices: [
        "Finding shapes in clouds",
        "Sleeping with your eyes open",
        "Breaking glass with your voice",
        "Swimming in freezing water"
      ],
      correctAns: 0
    },
    {
      question: "In the game Who Wants to be a Millionaire, which option was NOT a lifeline a contestant had?",
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
        "WWE superstar, actor, and rapper",
        "Who? I don't see anyone",
        "Don't pick this answer",
        "BUM BA DUM BUMM"
      ],
      correctAns: 0
    }
    // {
    //   question: "What is true of Cointreau?",
    //   choices: [
    //     "It's the name of the French president",
    //     "It's not orange-flavored",
    //     "It's made of triple sec",
    //     "It has a 10% alcoholic content."
    //   ],
    //   correctAns: 2
    // },
    // {
    //   question: "When is the moon the closest to the Earth?",
    //   choices: [
    //     "at perihelion",
    //     "at apogee",
    //     "at perigee",
    //     "at 300,000 miles"
    //   ],
    //   correctAns: 2
    // }
  ];
  let username,
    currentQ = 0,
    correctScore = 0,
    timeCount = 30;

  // 1. bkgd image on load
  // $('body').css('background-image', "url('https://outrunthezombeez.files.wordpress.com/2016/05/egj0x.gif')");
  
  // $('.game').hide();
  $('.reset').hide();
  $('.reset').click(() => {
    location.reload();
  });
  $('.lastpage').hide();

  // 2. click on start button
  $('.form').submit((e) => {
    e.preventDefault();
    getUsername();
    $('.firstpage').hide();
    playGame();
    timerVar = setInterval(timer, 1000);
  });

  // save username after start button clicked
  function getUsername() {
    console.log('input: ' + $('input').val());
    if ($('input').val() === undefined || $('input').val() === null || $('input').val() === "") {
      username = "Harey";
    } else {
      username = $('input').val();
    }
    console.log(`Hi ${username}`);
    return username;
  }
  
  // 3. start game and show quiz
  function playGame() {
    $('body').show();
    $('body').css('background-image', "url('https://i.ytimg.com/vi/h9N60GCN1iY/maxresdefault.jpg')");
    $('.quiz').show();
    $('.timer').show();
    $('.ans').show();
    $('.game').show();
    showQuestionsAns();
    moveTurtle();
  }

  function timer() {
    timeCount -= 1;
    if (timeCount === 0) {
      clearInterval(timerVar);
      console.log('clear interval');
      showAns();
      return;
    }
    $('.timer').html(`Seconds left: ${timeCount}`);
    console.log(`time count: ${timeCount}`);
  }

  // 4. load one question at a time
  function showQuestionsAns() {
    // if end of quiz
    if (currentQ === QUESTIONS.length || timeCount === 0) {
      showAns();
      console.log('end');
      clearInterval(timerVar);
      return;
    }
    // show question and answer choices
    $('.questions').html(QUESTIONS[currentQ].question);
    // 30 second timer
    $('.timer').html(`Seconds left: ${timeCount}`);

    $('.a').html(QUESTIONS[currentQ].choices[0]);
    $('.b').html(QUESTIONS[currentQ].choices[1]);
    $('.c').html(QUESTIONS[currentQ].choices[2]);
    $('.d').html(QUESTIONS[currentQ].choices[3]);

    console.log(`Question #${currentQ+1}`)
    console.log(QUESTIONS[currentQ].choices);
    console.log(`Correct ans: ${QUESTIONS[currentQ].correctAns}`);
  }

  // move turtle timer right
  function moveTurtle() {
    $('.turtle').animate({
      left: "+=80vw"
    }, 100);
  }

  // move rabbit right every correct answer
  function moveRabbit() {
    // $('.rabbit').animate({left: "20%"}, 400);
    // $('.rabbit').animate({left: "50%", transform: 'translateX(-50%)'}.animate({top: '100px'}, 700);
    $('.rabbit').animate({
      left: "+=17vw"
    }, 400);
  }

  // 5. show next question after answer clicked
  $('.ans').click(function() {
    // need 'this' for jquery val
    // if JOHN CENA
    if (currentQ === 4 && parseInt($(this).val()) == 3) {
      window.location = "https://www.youtube.com/watch?v=4k1xY7v8dDQ";
    }

    // if clicked last answer of quiz
    if (currentQ === 5) {
      return;
      // correct answer 
    } else if (parseInt($(this).val()) === QUESTIONS[currentQ].correctAns) {
      moveRabbit();
      correctScore += 1;
      console.log("User ans: " + $(this).val());
      console.log(`CORRECT SCORE: ${correctScore}`);
      // wrong answer
    } else {
      console.log("User ans: " + $(this).val());
      console.log("Wrong");
    }
    currentQ += 1;
    showQuestionsAns();
  });

  // show total score and answers at end
  function showAns() {
    console.log(`TOTAL correct score: ${correctScore}`);
    $('.quiz').hide();
    $('.game').hide();
    $('.lastpage').show();

    // if win
    if (correctScore === QUESTIONS.length) {
      $('h1').appendTo('body').text('You Won!');
      $('body').css('background-image', "url('https://giftsandmiracles.com/wp-content/uploads/2016/04/happy-bunny.jpg')");
    // if lose
    } else {
      $('h1').appendTo('body').text('You Lost...');
      $('body').css('background-image', "url('https://cdn-images-1.medium.com/max/1600/1*b2yqUDKglMbMlsnYKCCLnw.jpeg')");
    }
    let results = `${username}, you got ${correctScore} out of ${QUESTIONS.length} questions right in ${30-timeCount} seconds!`;
    console.log(results);
    $('h2').appendTo('body').html(results);
    $('.reset').show();
  }

});
