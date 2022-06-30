const cardArray = [
  {
    name: "burger",
    img: "burger.jpg",
  },
  {
    name: "home",
    img: "home.jpg",
  },
  {
    name: "ice-cream",
    img: "ice-cream.jpg",
  },
  {
    name: "laptop",
    img: "laptop.jpg",
  },
  {
    name: "pizza",
    img: "pizza.png",
  },
  {
    name: "shoe",
    img: "shoe.jpg",
  },
  {
    name: "burger",
    img: "burger.jpg",
  },
  {
    name: "home",
    img: "home.jpg",
  },
  {
    name: "ice-cream",
    img: "ice-cream.jpg",
  },
  {
    name: "laptop",
    img: "laptop.jpg",
  },
  {
    name: "pizza",
    img: "pizza.png",
  },
  {
    name: "shoe",
    img: "shoe.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChoosen = [];
let cardChooseId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "background.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChooseId[0];
  const optionTwoId = cardChooseId[1];
  console.log("check for match!");

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same card");
    cards[optionOneId].setAttribute("src", "background.jpg");
    cards[optionTwoId].setAttribute("src", "background.jpg");
  }

  if (cardChoosen[0] == cardChoosen[1]) {
    alert("you found a match!");
    cards[optionOneId].setAttribute("src", "white.jpg");
    cards[optionTwoId].setAttribute("src", "white.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChoosen);
  } else {
    cards[optionOneId].setAttribute("src", "background.jpg");
    cards[optionTwoId].setAttribute("src", "background.jpg");
    alert("sorry try again!");
  }

  resultDisplay.textContent = cardsWon.length;

  cardChoosen = [];
  cardChooseId = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChoosen.push(cardArray[cardId].name);
  cardChooseId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  console.log("cardChoosen");
  console.log("cards");

  if (cardChoosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
