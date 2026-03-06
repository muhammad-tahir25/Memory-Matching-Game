var emojis = ['🍕', '🍔', '🌮', '🍜', '🍣', '🧁', '🍩', '🍓'];

var bestMoves = Infinity;


var matched = 0;
var moves = 0;
var timer = 0;
var timerInterval = null;
var lock = false;

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(function() {
    timer++;
    $('#timer').text(timer);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function initGame() {
  flipped = [];
  matched = 0;
  moves = 0;
  lock = false;
  timer = 0;
  stopTimer();

  $('#moves').text(0);
  $('#timer').text(0);
  $('#winMessage').removeClass('show');
  $('#gameBoard').empty();

  var cards = shuffle(emojis.concat(emojis));

  for (var i = 0; i < cards.length; i++) {
    var card = $('<div class="card"></div>');
    card.attr('data-emoji', cards[i]);
    card.append('<div class="card-face card-back">?</div>');
    card.append('<div class="card-face card-front">' + cards[i] + '</div>');
    $('#gameBoard').append(card);
  }
}

$(document).on('click', '.card', function() {
  var card = $(this);

  if (lock) return;
  if (card.hasClass('flipped') || card.hasClass('matched')) return;
  if (flipped.length >= 2) return;

  startTimer();
  card.addClass('flipped');
  flipped.push(card);

  if (flipped.length === 2) {
    moves++;
    $('#moves').text(moves);
    lock = true;

    var first = flipped[0];
    var second = flipped[1];

    if (first.attr('data-emoji') === second.attr('data-emoji')) {
      first.addClass('matched');
      second.addClass('matched');
      matched++;
      flipped = [];
      lock = false;

      if (matched === emojis.length) {
        stopTimer();
        if (moves < bestMoves) bestMoves = moves;
        setTimeout(function() {
          $('#winMoves').text(moves);
          $('#winTime').text(timer);
          $('#winBest').text(bestMoves === Infinity ? '-' : bestMoves);
          $('#winMessage').addClass('show');
        }, 400);
      }

    } else {
      first.addClass('wrong');
      second.addClass('wrong');

      setTimeout(function() {
        first.removeClass('flipped wrong');
        second.removeClass('flipped wrong');
        flipped = [];
        lock = false;
      }, 1000);
    }
  }
});

$('#playAgainBtn').on('click', function() {
  initGame();
});

$(document).ready(function() {
  initGame();
});