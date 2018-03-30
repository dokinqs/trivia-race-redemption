$(document).ready(function () {
  let currentQ = 0;
  const QUESTIONS = [
    {
      question: "Who invented champagne?",
      choices: {
        a: "Carlos Herrera",
        b: "Nicholas Feuillate",
        c: "Dom Perignon",
        d: "G.H.Mumm"
      },
      correctAns: 2
    },
    {
      question: "What's the world's biggest island?",
      choices: {
        a: "Iceland",
        b: "Japan",
        c: "Australia",
        d: "Greenland"
      },
      correctAns: 3
    },
    {
      question: "What color is Absynthe?",
      choices: {
        a: "Green",
        b: "Blue",
        c: "Red",
        d: "Silver"
      },
      correctAns: 0
    },
    {
      question: "What is true of Cointreau?",
      choices: {
        a: "It's the name of the French president",
        b: "It's not orange-flavored",
        c: "It's made of triple sec",
        d: "It has a 20% alcoholic content."
      },
      correctAns: 2
    }
  ];

  // function homePage() {
    // $('body').css('background-image', "url('https://cdn-images-1.medium.com/max/1600/1*3SAWEV0Q5P8x2i6eY6ht1A.jpeg')");
    // $('body').css('background-image', "url('https://media.licdn.com/dms/image/C5112AQH21eT2aOC4lQ/article-inline_image-shrink_1500_2232/0?e=2121451200&v=alpha&t=M2KVdipEMX8nVvmAnkO-kcNjdDEDnolLBNUxL9ffuEU')");

    // $('html').css('background-image', "url('https://thumbs.dreamstime.com/b/checkered-flag-flying-gray-gradient-design-race-sport-championship-background-vector-illustration-91861754.jpg')");

    $('html').css('background-image', "url('https://outrunthezombeez.files.wordpress.com/2016/05/egj0x.gif?w=355&zoom=2')");

    function playGame() {
      $('body').load('game.html');
    }

    $('.start').click(function (e) {
      playGame();
    });

  // }

  // homePage();
    function showQuestions () {
      QUESTIONS.forEach(function (e) {
        $('.quiz').html(`<h1>${e.question}</h1>`);
        // $('.timer').html(`${timeCount}secs`);

        $('.a').text(e.choices['a']);
        $('.b').text(e.choices.b);
        $('.c').html(e.choices.c);
        $('.d').html(e.choices['d']);

        console.log(`Choice a: ${e.choices.a}`);
        let choicesList = e.choices;
        console.log(choicesList);
        // $('.button .a').text(QUESTIONS[currentQ].choices[0]).show();
        // $('.button .b').text(QUESTIONS[currentQ].choices[1]).show();
        // $('.button .c').text(QUESTIONS[currentQ].choices[2]).show();
        // $('.button .d').text(QUESTIONS[currentQ].choices[3]).show();
      });
    }
  // function timer() {

  // }

    $('.ans').click(function(e) {
      // let userAns = $(this).text();
      // let userAns = e;
      // $(.ans)
      // console.log(`userAns: ${userAns}`);
      // if (questionResult) {
      // if ($(this).indexof(userAns) === QUESTIONS.correctAns) {
      //   console.log('yes');
      //   correctScore += 1;
      //   // $('.rabbit').style.left = "200px";
      //   // let rabbitpos = $('.rabbit').style.left;
      //   // console.log(`left:${rabbitpos}`);
      // } else {
      //   console.log('no');
      //   // let rabbitpos = $('.rabbit');
      //   // console.log(`left wrong:${rabbitpos}`);
      // }
      // currentQ += 1;
    });
    
      // function questionResult() {
      //   QUESTIONS.forEach(function() {
      //     if (userAns === QUESTIONS.correctAns) {
      //       correctScore += 1;
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   });
      // }

      function showResult() {
        $('body').load('result.html');
        let results = `Congrats, ${name}, you got ${gotCorrect} out of ${QUESTIONS.length} questions correct!`;
        console.log(results);
        // QUESTIONS.forEach(function () {

        // });
      }

   });



  // function resetGame() {
  //   $(document).click(function() { location.reload(); });
  // }

  // https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple

// GET http://trivia.propernerd.com/api/questions?limit=2&random=true&offset=2&style=jeopardy

// });

