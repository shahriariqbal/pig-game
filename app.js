/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;





//initial dice
document.querySelector('.dice').style.display = 'none';


//getElementById only works for id   *faster than querySelector*
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



//***********Event handler********//

//callback function
//document.querySelector('.btn-roll').addEventListener('click', btn ); //btn callback function


//Anonymous function dosen't have name 
//can't be reuse
// document.querySelector('.btn-roll').addEventListener('click', function(){               } );
//here function => anonymus function



//************RollDice Button**********************//
document.querySelector('.btn-roll').addEventListener('click', function(){

	//1. Random Number
	var dice =  Math.floor(Math.random()*6)+1;

	//2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-'+ dice + '.png';
	//3. Update the round score if the rolled number was not a 1
	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else{
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;

      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      // document.querySelector('.player-0-panel').classList.remove('active');
      // document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.dice').style.display = 'none';


	}

} );




//Setter

//document.querySelector('#current-'+ activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'; 


//Getter (read from html)

//var x = document.querySelector('#score-0').textContent;


//**********************************Updating Scores and Changing the Active Player********************************//
