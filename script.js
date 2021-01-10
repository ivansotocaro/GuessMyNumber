'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}


const scoreMessage = function(score){
  document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function(){

  const guess  = Number(document.querySelector('.guess').value);
  
  // When there is no input  
  if(!guess){
    displayMessage("📛 No number!");
  
    // When player wins
  }else if(guess === secretNumber){
  
    displayMessage("🎉 Correct Number!");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor  = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
   
  
  }else if(guess !== secretNumber){
    
      if(score > 1){

      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreMessage(score);
     
    }else{
      
      displayMessage("💥 You last the game!");
      scoreMessage(0);
      document.querySelector('.check').disabled = true;
    }
  }

 
});


document.querySelector('.again').addEventListener('click', function(){
  score = 10;
  secretNumber =  Math.trunc(Math.random() * 20) + 1;

 
  displayMessage("Start guessing...");
  scoreMessage(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor  = '#222';
  document.querySelector('.number').style.width = '15rem'; 

  document.querySelector('.highscore').textContent = highscore;
  
  document.querySelector('.check').disabled = false;
});
