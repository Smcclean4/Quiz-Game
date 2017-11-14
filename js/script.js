$(document).ready(function() {
  var questions = ["Name the largest freshwater lake in the world?",
    "What item of clothing was named after its Scottish inventor?",
    "What kind of weapon is a falchion?", "Name the seventh planet from the sun.",
    "What is the capital city of Spain?", "Who played Neo in The Matrix?",
    "What colour jersey is worn by the winners of each stage of the Tour De France?",
    "Which chess piece can only move diagonally?", "How many times was the Men's Tennis Singles at Wimbledon won by Bjorn Borg?",
    "At what age did Kobe Bryant retire? and how much points did he score in his final game ?"
  ];

  var answers = [
    ["Lake Superior", "Lake Tahoe", "Lake Elsenoir", "Lake Michigan"],
    ["A Scarf", "Socks", "A Sweater", "A Mackintosh"],
    ["Hammer", "Axe", "Sword", "Shield"],
    ["Pluto", "Jupiter", "Saturn", "Uranus"],
    ["France", "Gwom", "Madrid", "Spain"],
    ["Denzel Washington", "Robin Williams", "Keanu Reeves", "Will Barton"],
    ["Blue", "Red", "Yellow", "Green"],
    ["Bishop", "Pawn", "Queen", "King"],
    ["Four", "Five", "Three", "One"],
    ["36, and 45", "40, and 25", "37, and 50", "39, and 60"]
  ];

  var rightAnswers = ["Lake Superior", "A Mackintosh", "Sword", "Uranus", "Madrid", "Keanu Reeves", "Yellow", "Bishop", "Five", "39, and 60"];

  var timer;
  var score = 0;

  $("#start").click(function() {
    var timeLimit;
    var userDifficulty = prompt("easy, medium or hard?");
    if (userDifficulty == "easy") {
      timeLimit = 90;
    } else if (userDifficulty == "medium") {
      timeLimit = 60;
    } else if (userDifficulty == "hard") {
      timeLimit = 30;
    } else {
      alert("that wasnt a valid input, try again");
      var userDifficulty = prompt("easy, medium or hard?");
      timerStart(timeLimit);
    }
    alert("The game is up to ten answers! try to get all correct!");
    timerStart(timeLimit);
    initGame();
  });

  function timerStart(val) {
    var count = val;

    timer = setInterval(function() {
      if (count >= 0) {
        document.getElementById('timer').innerHTML = count;
      }
      if (count < 0) {
        document.getElementById('timer').innerHTML = "times up!";
        alert("times up! you lost, try again?");
        clearInterval(timer);
      }
      count--;
    }, 1000);
  }

  function checkWin(ans, val, choice) {
    var arr = [];

    for (var i = 0; i < rightAnswers.length; i ++) {
      for (var j = 0; j < ans.length; j ++) {
        if (rightAnswers[i] == ans[j]){
          arr.push(rightAnswers[i]);
          if (arr == val) {
            $("#" + choice).css('background-color', 'green');
            score ++;
            reset();
          } else if (arr !== val){
            $("#" + choice).css('background-color', 'red');
          }
        }
      }
    }

    if (score === 10) {
      alert('you won!, congratulations you answered 10 question correctly!');
    }
}

  function initGame() {
    var randomNumber = Math.floor(Math.random() * questions.length);
    var randomQuestion = questions[randomNumber];
    var randomAnswer = answers[randomNumber];

    document.getElementById('question').innerHTML = randomQuestion;
    document.getElementById('answer0').innerHTML = randomAnswer[0];
    document.getElementById('answer1').innerHTML = randomAnswer[1];
    document.getElementById('answer2').innerHTML = randomAnswer[2];
    document.getElementById('answer3').innerHTML = randomAnswer[3];

    $(".answer").one('click', function() {
      var slot = $(this).attr('id');
      var value = $(this).text();
      checkWin(randomAnswer, value, slot);
    });

  }

  function reset() {
    $('#answer0, #answer1, #answer2, #answer3').css('background-color', 'rgba(255, 255, 255, 0.5)');
    initGame();
  }

});
