console.log('JS');

$(document).ready(function () {
  console.log('JQuery');
  const QUESTIONS = 
  [
    {
      question: "Who invented champagne?",
      choices: [
        "Carlos Herrera",
        "Nicholas Feuillate",
        "Dom Perignon",
        "G.H.Mumm"
      ],
      correctAns: 2
    },
    {
      question: "What's the world's biggest island?",
      choices: [
        "Iceland",
        "Japan",
        "Australia",
        "Greenland"
      ],
      correctAns: 3
    },
    {
      question: "What color is Absynthe?",
      choices: [
        "Green",
        "Blue",
        "Red",
        "Silver"
      ],
      correctAns: 0
    },
    {
      question: "What is true of Cointreau?",
      choices: [
        "It's the name of the French president",
        "It's not orange-flavored",
        "It's made of triple sec",
        "It has a 10% alcoholic content."
      ],
      correctAns: 2
    },
    {
      question: "When is the moon the closest to the Earth?",
      choices: [
        "at perihelion",
        "at apogee",
        "at perigee",
        "at 300,000 miles"
      ],
      correctAns: 2
    }
  ];
  let currentQ = 0;
  let correctScore = 0;
  // let timeCount = 30;

  // 1. bkgd image on load
  $('body').css('background-image', "url('https://cdn-images-1.medium.com/max/1600/1*3SAWEV0Q5P8x2i6eY6ht1A.jpeg')");

  // show total score and answers at end
  function showAns() {
    console.log(`TOTAL correct score: ${correctScore}`);
    if (correctScore === QUESTIONS.length) {
      $('h1').appendTo('html').text('You won!');
    } else {
      $('h1').appendTo('html').text('You lost...');
    }
  }

  // 4. load one question at a time
  function showQuestionsAns() {
    // if end of quiz
    if (currentQ === QUESTIONS.length) {
      $('.quiz').hide();
      showAns();
      return;
    }
    // show question and answer choices
    $('.questions').html(QUESTIONS[currentQ].question);
    // $('.timer').html(`${timeCount}secs left`);

    $('.a').html(QUESTIONS[currentQ].choices[0]);
    $('.b').html(QUESTIONS[currentQ].choices[1]);
    $('.c').html(QUESTIONS[currentQ].choices[2]);
    $('.d').html(QUESTIONS[currentQ].choices[3]);

    console.log(`Question #${currentQ+1}`)
    console.log(QUESTIONS[currentQ].choices);
    console.log(`Correct ans: ${QUESTIONS[currentQ].correctAns}`);
  }

  // 3. start game and show quiz
  function playGame() {
    $('body').show();
    $('.ans').show();
    showQuestionsAns();
  }

  // save username after start button clicked
  function getUsername() {
    let username = $('input').val();
    console.log(`Hi, ${username}`);
    return username;
  }

  // 2. click event listener on start button
  $('.start').click(function () {
    getUsername();
    $('.firstpage').hide();
    playGame();
  });

  // 5. show next question after answer clicked
  $('.ans').click(function () {
    if (currentQ === 5) {
      return;
    } else if (parseInt($(this).val()) === QUESTIONS[currentQ].correctAns) {
      correctScore += 1;
      console.log("User ans: " + $(this).val());
      console.log(`CORRECT SCORE: ${correctScore}`);
    } else {
      console.log("User ans: " + $(this).val());
      console.log("Wrong");
    }
    currentQ += 1;
    showQuestionsAns();
  });


});