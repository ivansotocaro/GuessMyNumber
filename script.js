'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){

  const guess  = Number(document.querySelector('.guess').value);
  
  // When there is no input  
  if(!guess){
    document.querySelector('.message').textContent = "📛 No number!";
  
    // When player wins
  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = "🎉 Correct Number!";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor  = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
   
  // When gess is too high 
  }else if(guess > secretNumber){
   
    if(score > 1){
      document.querySelector('.message').textContent = "📈 Too high!";
      score--;
      document.querySelector('.score').textContent = score;
     
    }else{
      document.querySelector('.message').textContent = "💥 You last the game!";
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
    }

  //  When gess is too low
  }else if(guess < secretNumber){

     if(score > 1){
      document.querySelector('.message').textContent = "📉 Too low!";
      score--;
      document.querySelector('.score').textContent = score;
     
    }else{
      document.querySelector('.message').textContent = "💥 You last the game!";
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
    }
  
  }
 
});


document.querySelector('.again').addEventListener('click', function(){
  score = 10;
  secretNumber =  Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor  = '#222';
  document.querySelector('.number').style.width = '15rem'; 

  document.querySelector('.highscore').textContent = highscore;
  
  document.querySelector('.check').disabled = false;
});