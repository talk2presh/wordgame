window.addEventListener('load', init);


//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}
//change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//im using DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful",
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful",
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful",
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful",
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful",
"anemone",
"acquiesce",
"phablet",
"arcane",
"Photobomb",
"elasticity",
"productivity",
"recreativity",
"beautiful"
];

//initialize
function init() {
//show number of seconds in UI
seconds.innerHTML = currentLevel;
//load  word from array
showWord(words);
//Start matching on word input
wordInput.addEventListener('input', startMatch);
//call countdown every second
setInterval(countdown, 1000); 
//check status
setInterval(checkStatus, 50);
}
//start match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}

	//score is -1,display 0
	if(score === -1){
	 scoreDisplay.innerHTML = 0;
	} else {
	 scoreDisplay.innerHTML = score;
   }
}
//match currentWord to wordInput
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct!';
		return true;
	}else{
		message.innerHTML = '';
		return false;
	}
}

//pick/show random word
function showWord(words) {
	//henerate arrays
const randIndex = Math.floor(Math.random()* words.length);
//output random word
currentWord.innerHTML = words[randIndex];
}  

 // countdown timer
 function countdown(){
 //make sure time is not run out
 if(time > 0){
 time--;
  } else if(time === 0){
 	//Game is over
 isPlaying = false;
  }
 //show time
 timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
	if(!isPlaying && time === 0){
	  message.innerHTML = "Game Over!!";
		score = -1;
	}
}