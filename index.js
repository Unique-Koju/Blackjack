

let player ={
  name:"Unique",
  chips:200,

  
}
let cards = []  // array with list of items
let hasBlackJack = false
let isAlive =false

let sum =0

let message=""

let messageEl =document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
//let sumEl=document.querySelector("#sum-el") Same thing as above which can done for 
//secific class id body and many more
let cardEl=document.querySelector("#cards-el")



let playerEl =document.querySelector("#player-el")
playerEl.textContent=player.name + " : $ "+ player.chips





function startGame(){
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards=[firstCard, secondCard]
  sum= firstCard + secondCard
  isAlive=true
  renderGame()
}
function getRandomCard(){
  let randomNumber = Math.floor(Math.random() *13) + 1

  if(randomNumber>10){
    return 10
  }
  else if(randomNumber===1){
    return 11
  }
  else{
    return randomNumber
  }

}
function renderGame(){
  // render out 1st and 2nd card
  cardEl.textContent="Cards:" 


  // render out all card
  for (let i=0; i<cards.length; i++){
    cardEl.textContent+= cards[i]+ "   "
    }

  sumEl.textContent = "Sum:" + sum

  if (sum < 21)
  {
    message="Do you want to draw a new card!"
  }

  else if (sum === 21){
    message="You've got Blackjack!"
    hasBlackJack=true
  }

  else if(sum > 21){
    message="You're out the game!"
    isAlive=false
  }

  messageEl.textContent=message

}

function newCard(){

  //only alive and no blackjack
  if(isAlive===true && hasBlackJack===false){
    console.log("Draw a new card")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
  }

}





















/*


let age = 21

if(age<= 20)
{
  console.log(" You cann't enter the club!")
}
else{
  console.log(" You're welcome")
}
*/