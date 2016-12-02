'use strict';

var counter = 0;

var question1 = prompt('Do you think that I have a black belt (Please answer Yes/Y or No/N)');
if (question1 === 'Yes' || 'Y') {
  console.log('Yup! ');
  counter += 1;
} else {
  console.log('');
}

var question2 = prompt('Do you thinkt that I can become a professional coder? (Please answer Yes/Y or No/N)');
if (question2 === 'Yes' || 'Y') {
  console.log('Yay! I enjoy the faith :)');
  counter += 1;
} else {
  console.log('Oh that\'s cold. Ice cold. I can\'t hear ya!!! I say I say I say, what\'s cooler than being cold? ICEEEEE COLD');
}

var question3 = prompt('Do you think that soccer is my favorite sport?(Please answer Yes/Y or No/N)');
if (question3 === 'Yes' || 'Y') {
  console.log('Lawl unfortunately not I struggle to kick a ball without tripping over it');
  counter += 1;
} else {
  console.log('You would be correct! I\'m going with that ballislife vibe');
}

var question4 = prompt('Do you think that I am over 6 foot 4?(Please answer Yes/Y or No/N)');
if (question4 === 'Yes' || 'Y') {
  console.log('Son. I\'d be living that millionaire life warming the benches in the NBA then');
  counter += 1;
} else {
  console.log('True. Sad day :(');
}

var question5 = prompt('Do you think that I have any pets?(Please answer Yes/Y or No/N)');
if (question5 === 'Yes' || 'Y') {
  console.log('Sadly no. I definitely would love to have a little doggie in my life');
  counter += 1;
} else {
  console.log('True. My strange awkwardness may exemplify that.');
}

alert(counter);

var guesses = 5;
var idolsQuestion = prompt('Do you think you can list one of my idols? I have 5');
var myIdols = ['Kobe Bryant', 'Conan O\'Brien', 'Bruce Lee', 'Louis CK', 'Jimmi Hendrix'];

while (guesses > 0) {
  for (var i; i < myIdols[i]; i--) {
    if (idolsQuestion === myIdols[i]) {
      console.log('Correct! Nice job!');
      guesses -= 1;
    } else {
      console.log('Sorry! Good guess though!');
      guesses -= 1;
    }
  }
}

var numberGuess = 4;
var favoriteNumber = 1;
var userNumber = prompt('Pick a number between 1 and 10');
for (var j; j > 0; j--) {
  if (userNumber === favoriteNumber) {
    console.log('Good guess');
    numberGuess -= 1;
  } else {
    console.log('Sorry man');
    numberGuess -= 1;
  }
}
