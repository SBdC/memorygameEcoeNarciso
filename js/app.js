/*
 * Create a list that holds all of your cards
 */
const imgsCards = [
  "img/eco-1x.jpg", "img/ecoForest-1x.jpg", "img/eiche-1x.jpg", "img/fish-1x.jpg", "img/frame-1x.jpg", "img/narciso-1x.jpg", "img/robinia-1x.jpg", "img/skull-1x.jpg", "img/eco-1x.jpg", "img/ecoForest-1x.jpg", "img/eiche-1x.jpg", "img/fish-1x.jpg", "img/frame-1x.jpg", "img/narciso-1x.jpg", "img/robinia-1x.jpg", "img/skull-1x.jpg"
];

const imgsCards = [];

const game = document.querySelector(".game");
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const card = document.querySelectorAll('.card');

start.addEventListener("click", function() {

this.classList.add("hide");

  deckBuilder();

}, true);



//Display the cards on the page
 // shuffle the list of cards using the provided "shuffle" method below
 // loop through each card and create its HTML
 // add each card's HTML to the page



function deckBuilder() {
       const deck = document.createElement('ul');
       deck.className ="deck";
        game.appendChild(deck);

    const fragment = document.createDocumentFragment();

    shuffle(imgsCards);

    for (let i = 0; i < imgsCards.length; i++) {

        const listItem = document.createElement('li');
        listItem.className = 'card';
        listItem.innerHTML = '<img id="image" class="hidden" src= ' + imgsCards[i] + '></img>';

        fragment.appendChild(listItem);
    }
    deck.appendChild(fragment);

}



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }


  return (array);
}

 //
 // set up the event listener for a card. If a card is clicked:
click();

 function click() {
     game.addEventListener('click', event => {
        const showImg = event.target.getAttribute="image";
         if (showImg) {

             const arraySize = imgsCards.length;
             console.log( imgsCards.length)
             //  Set the maximum of 2 cards revealed, before compared
             if (arraySize < 2) {

                 // Reveal card on click

                showImg.classList.remove("hidden");



             };

              showImages.push(event.target);
             // Push the selected cards to a new array - showImgs

             if (arraySize === 1) {
                 // Compare the cards to see if they match
                 if ("img/eiche-1x.jpg"==="img/eiche-1x.jpg") {
                     console.log("matched");
                     //make match function

                 } else {
                      console.log("didn't match")
                        //make not matchedfunction
                 }
             }
         }
     })
 };

 // display the card's symbol (put this functionality in another function that you call from this one)


// add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//if the list already has another card, check to see if the two cards match
 // if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 // if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 //increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 //if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
