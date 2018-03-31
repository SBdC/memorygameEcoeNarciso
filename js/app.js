//mycards
const cards = [{
    name: "skull",
    source: "img/skull-1x.jpg"
  },
  {
    name: "robinia",
    source: "img/robinia-1x.jpg"
  },
  {
    name: "narciso",
    source: "img/narciso-1x.jpg"
  },
  {
    name: "frame",
    source: "img/frame-1x.jpg"
  },
  {
    name: "fish",
    source: "img/fish-1x.jpg"
  },
  {
    name: "eiche",
    source: "img/eiche-1x.jpg"
  },
  {
    name: "ecoForest",
    source: "img/ecoForest-1x.jpg"
  },
  {
    name: "eco",
    source: "img/eco-1x.jpg"
  },
  {
    name: "skull",
    source: "img/skull-1x.jpg"
  },
  {
    name: "robinia",
    source: "img/robinia-1x.jpg"
  },
  {
    name: "narciso",
    source: "img/narciso-1x.jpg"
  },
  {
    name: "frame",
    source: "img/frame-1x.jpg"
  },
  {
    name: "fish",
    source: "img/fish-1x.jpg"
  },
  {
    name: "eiche",
    source: "img/eiche-1x.jpg"
  },
  {
    name: "ecoForest",
    source: "img/ecoForest-1x.jpg"
  },
  {
    name: "eco",
    source: "img/eco-1x.jpg"
  }
];


let openCards = [];

let seconds = 0;
let minutes = 0;
let t;

let moves = 0;
let matches = 0;

const time = document.getElementById("timer");
const elMoves = document.querySelector(".moves");
const starOne = document.getElementById("starOne");
const starTwo = document.getElementById("starTwo");
const starThree = document.getElementById("starThree");
const starsBoard = document.querySelector(".starsBoard");
const game = document.querySelector(".game");
const intro = document.getElementById("intro");
const scoreBox = document.getElementById("scoreBox");
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const card = document.querySelectorAll(".card");
const deck = document.getElementById("deck");
const elBody = document.querySelector("body");
const elScoreBox = document.getElementById("scoreBox");
const celebrateMatch = document.getElementById("celebrate");



//event listener for start button - game begins

start.addEventListener("click", function() {

  intro.classList.add("hide");
  elBody.setAttribute("style", "background:url('img/pattern_bege.jpg') repeat fixed;");
  scoreBoardMoves();

  deckBuilder();
  timer();

}, true);

//event listener to restart the game
restart.addEventListener("click", function() {
  rebuild();
  resetTimer();
  deckBuilder();
  timer();
  scoreBoardMoves();

}, true);

//function to reset variables and styles for restart

function rebuild() {

  stopTimer();
  time.textContent = "00:00";
  moves = 0;
  openCards = [];
  matches = 0;
  elMoves.textContent = moves;
  start.classList.remove("hide");
  deck.innerHTML = "";
  deck.classList.add("hide");
  deck.classList.remove("deck");
  starThree.setAttribute("style", "color:var(--offwhite);");
  starTwo.setAttribute("style", "color:var(--offwhite);");
  starOne.setAttribute("style", "color:var(--offwhite);");

}

//function to make scoreboard slide

function scoreBoardMoves() {

  let pos = 0;
  let id = setInterval(frame, 1);

  function frame() {
    if (pos == 180) {
      clearInterval(id);
    } else {
      pos++;
      elScoreBox.style.top = pos + "px";

    }
  }
}


// Function to display, shuffle, and loop through, the cards and add each one the html


function deckBuilder() {

  const fragment = document.createDocumentFragment();

  shuffle(cards);

  deck.classList.remove("hide");
  deck.classList.add("deck");

  for (let card in cards) {

    const li = document.createElement("li");
    li.className = "card";
    li.setAttribute("data-type", cards[card].name);
    li.innerHTML = `<img id="image" src="${cards[card].source}">`

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


// Event listener for cards


deck.addEventListener("click", clickCard, false);

function clickCard(e) {

  if (e.target.tagName === "LI") {
    let image = e.target.firstChild;

    // array for open cards
    const size = openCards.length;

    if (size < 2) {

      e.target.classList.add("open");
      image.classList.add("show", "flip-2-ver-right-1");



    }
    // adds cards to the opencards array
    openCards.push(e.target);

    if (size === 1) {

      //if two cards are open, count one move
      moves += 1;
      elMoves.textContent = moves;
      stars();

      //if the list already has another card, check to see if the two cards match

      if (openCards[0].getAttribute("data-type") === openCards[1].getAttribute("data-type")) {
        match();
        matches += 1;

        setTimeout(wonGame, 200);

        //adds smiley illustration to celebrate and count matches
        celebrateMatch.classList.remove("hide");
        celebrateMatch.classList.add("bounce-top");
        celebrateMatch.innerHTML = " <div class='container2'><div class='facefinal'><div class='eyefinal'></div><div class='eyefinal2'></div><div class='centerfinal'></div><div class='nosefinal'></div></div> " + matches;


      } else {
        // Extended visibility for unmatch cards
        setTimeout(unMatch, 800);
        celebrateMatch.classList.add("hide");
        celebrateMatch.classList.remove("bounce-top");

      }
    }
  }

}

// if the cards do match, lock the cards in the open position
function match() {

  openCards[0].classList.add("match", "bounce-top");
  openCards[1].classList.add("match", "bounce-top");
  openCards[0].classList.remove("open");
  openCards[1].classList.remove("open");

  openCards = [];
};

// if the cards do not match, flipback again

function unMatch() {
  let image1 = openCards[0].firstChild;
  let image2 = openCards[1].firstChild;
  image1.classList.remove("show");
  image2.classList.remove("show");
  openCards[0].classList.remove("open");
  openCards[1].classList.remove("open");


  openCards = [];
};


//functions to remove stars according to amount of moves


function stars() {
  if (moves >= 24) {
    starOne.setAttribute("style", "color:var(--greyblue);")
    starsBoard.innerHTML = "no stars :("

  } else if (moves >= 18) {
    starTwo.setAttribute("style", "color:var(--greyblue);")

  } else if (moves >= 12) {
    starThree.setAttribute("style", "color:var(--greyblue);")
  }
}



//functions for timer

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


function stopTimer() {
  clearTimeout(t);
}

function resetTimer() {
  time.textContent = "00:00";
  seconds = 0;
  minutes = 0;
}

function wonGame() {
  if (matches === 8) {

    stopTimer();
    modal();
  }

}

//Modal


function modal() {
  const modal = document.getElementById("myModal");
  const modScoreResults = document.getElementById("modScoreResults");
  const modScoreStars = document.getElementById("modScoreStars");

  const span = document.getElementsByClassName("close")[0];
  const playAgain = document.getElementById("playAgain");


  modal.setAttribute("style", "display:block;");
  modScoreStars.innerHTML = starsBoard.innerHTML;
  modScoreResults.innerHTML = `<p > You completed the game in <br> ${minutes} minutes, ${seconds} seconds and ${moves} moves.</p>`;

  playAgain.onclick = function() {
    location.reload();

  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }


}



//copyright footer
let today = new Date();
let year = today.getFullYear();


let copy = document.getElementById("copyright");
copy.innerHTML = `<p> <a id="image" href="mailto:hello@sarabentodecastro.com">Sara Bento de Castro</a>&copy;  ${year} All rights reserved<p>`


//if the list already has another card, check to see if the two cards match
// if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
// if the cards do not match, remove the cards from the list and hide the card"s symbol (put this functionality in another function that you call from this one)
//increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
