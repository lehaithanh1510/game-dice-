/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var currentCount = 0
var score = [0,0] 
var player = 0
var isplaying= true 
//function playing (){
//
//}
function btnPressToRoll () { // KHI AN ROLL DICE 
    if (isplaying == true ){
     var random = Math.floor(Math.random()*6 +1)
     var randomBefore = random 
     document.querySelector('.dice').src='dice-' + random + '.png'
        
     if (random == 1) {// KHI TUNG RA 1 
         currentCount = 0
        if (player == 1) {
            document.querySelector('#current-1').textContent = 0
            player = 0
            document.querySelector('.player-1-panel').classList.remove('active')
            document.querySelector('.player-0-panel').classList.add('active')
        }
        else if (player == 0){
            document.querySelector('#current-0').textContent = 0
            player = 1
            document.querySelector('.player-0-panel').classList.remove('active')
            document.querySelector('.player-1-panel').classList.add('active')
        }
        random = 0 
     }
     if (randomBefore)    
     if (player == 0) {
      document.querySelector('#current-0').textContent = currentCount + random
      currentCount = currentCount +random
    }
    else if (player == 1) {
      document.querySelector('#current-1').textContent = currentCount + random
      currentCount = currentCount +random
    }
 }
}
function btnPressToHold () { //KHI AN HOLD
    if (isplaying == true){
     score[player] = score[player] + currentCount 
     currentCount = 0
     if (score[0] > 100 || score[0] == 100) {
        document.querySelector('#name-0').textContent = 'WINNER'
        document.querySelector('#score-0').textContent = 100
        isplaying = false
         player =3
     } 
     if (score[1] > 100 || score[1] == 100) {
        document.querySelector('#name-1').textContent = 'WINNER'
        document.querySelector('#score-1').textContent = '100'
        isplaying = false 
         player = 3
     }
     if (player == 0) {
        document.querySelector('#score-0').textContent = score[player] + currentCount
        document.querySelector('#current-0').textContent = 0
        player = 1
        document.querySelector('.player-0-panel').classList.remove('active') 
        document.querySelector('.player-1-panel').classList.add('active')
    }
    else if (player == 1) {
        document.querySelector('#score-1').textContent = score[player] + currentCount
        document.querySelector('#current-1').textContent = 0
        player = 0
        document.querySelector('.player-1-panel').classList.remove('active')
        document.querySelector('.player-0-panel').classList.add('active') 
    }
 }
}
function btnPressToNewGame (){ //KHI AN NEW GAME 
    document.querySelector('#score-1').textContent = 0
    document.querySelector('#score-0').textContent = 0
    document.querySelector('#current-1').textContent = 0
    document.querySelector('#current-0').textContent = 0
    document.querySelector('#name-0').textContent = 'PLAYER 1'
    document.querySelector('#name-1').textContent = 'PLAYER 2'
    currentCount = 0
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    player = 0
    isplaying = true 
    score [0]=0
    score [1]=0
    
}
document.querySelector('.btn-roll').addEventListener('click',btnPressToRoll) // NUT ROLL
document.querySelector('.btn-hold').addEventListener('click',btnPressToHold) // NUT HOLD
document.querySelector('.btn-new').addEventListener('click',btnPressToNewGame) // NUT NEW GAME