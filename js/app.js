/*
 * Create a list that holds all of your cards
 */
const cards = [{
    name: 'skull',
    source: 'img/skull-1x.jpg'
  },
  {
    name: 'robinia',
    source: 'img/robinia-1x.jpg'
  },
  {
    name: 'narciso',
    source: 'img/narciso-1x.jpg'
  },
  {
    name: 'frame',
    source: 'img/frame-1x.jpg'
  },
  {
    name: 'fish',
    source: 'img/fish-1x.jpg'
  },
  {
    name: 'eiche',
    source: 'img/eiche-1x.jpg'
  },
  {
    name: 'ecoForest',
    source: 'img/ecoForest-1x.jpg'
  },
  {
    name: 'eco',
    source: 'img/eco-1x.jpg'
  },
  {
    name: 'skull',
    source: 'img/skull-1x.jpg'
  },
  {
    name: 'robinia',
    source: 'img/robinia-1x.jpg'
  },
  {
    name: 'narciso',
    source: 'img/narciso-1x.jpg'
  },
  {
    name: 'frame',
    source: 'img/frame-1x.jpg'
  },
  {
    name: 'fish',
    source: 'img/fish-1x.jpg'
  },
  {
    name: 'eiche',
    source: 'img/eiche-1x.jpg'
  },
  {
    name: 'ecoForest',
    source: 'img/ecoForest-1x.jpg'
  },
  {
    name: 'eco',
    source: 'img/eco-1x.jpg'
  }
];


let openCards = [];
let time = document.getElementById("timer");
let seconds = 0,
  minutes = 0,
  t;

let moves = 0;

const elMoves = document.querySelector(".moves");


const game = document.querySelector(".game");
const start = document.getElementById('start');
const restart = document.getElementById('restart');
const card = document.querySelectorAll('.card');
const deck = document.getElementById('deck');


start.addEventListener("click", function() {

  this.classList.add("hide");

  deckBuilder();
  timer()

}, true);



//Display the cards on the page
// shuffle the list of cards using the provided "shuffle" method below
// loop through each card and create its HTML
// add each card's HTML to the page



function deckBuilder() {

  const fragment = document.createDocumentFragment();

  shuffle(cards);

  deck.classList.remove("hide");
  deck.classList.add("deck");

  for (let i = 0; i < cards.length; i++) {

    const li = document.createElement("li");
    li.className = "card";
    li.setAttribute('data-type', cards[i].name);
    li.innerHTML = '<img id="image" src= ' + cards[i].source + '></img>'
    fragment.appendChild(li);
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


deck.addEventListener("click", clickCard, false);

function clickCard(e) {

  if (e.target.tagName === "LI") {
    let image = e.target.firstChild;


    const size = openCards.length;

    if (size < 2) {

      e.target.classList.add('open');
      image.classList.add('show');
      moves += 1;
      elMoves.textContent = moves;

    };
    // add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    openCards.push(e.target);

    if (size === 1) {

      //if the list already has another card, check to see if the two cards match

      if (openCards[0].getAttribute("data-type") === openCards[1].getAttribute("data-type")) {
        match();

        setTimeout(congrats, 200);
      } else {
        // Extended visibility for unmatch cards
        setTimeout(unmatch, 1000);

      }
    }
  }

};



// if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
function match() {

  openCards[0].classList.add("match");
  openCards[1].classList.add("match");
  openCards[0].classList.remove("open");
  openCards[1].classList.remove("open");

  openCards = [];
};


// display the card's symbol (put this functionality in another function that you call from this one)
function unmatch() {
  let image1 = openCards[0].firstChild;
  let image2 = openCards[1].firstChild;
  image1.classList.remove("show");
  image2.classList.remove("show");
  // if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  openCards[0].classList.remove("open");
  openCards[1].classList.remove("open");
  openCards = [];
};


function congrats() {
  console.log("whoop whoop")
};


//set stopwatch


function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;

    }
  }

  time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer()
}

function timer() {
  t = setTimeout(add, 1000);
}






//if the list already has another card, check to see if the two cards match
// if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
// if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
