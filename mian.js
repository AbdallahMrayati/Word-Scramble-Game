let wordArray = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "raneem",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part",
];
// Get all the element
let inputWord = document.querySelector("#input");
let randomWord = document.querySelector(".randomWord");
let theScore = document.querySelector(".theScore");
let thetime = document.querySelector(".thetime");
let startbutton = document.querySelector(".startbutton");
let startdiv = document.querySelector(".startdiv");
let scramble_Game = document.querySelector(".scramble-Game");
let letGo = document.querySelector(".letGo");
let result = document.querySelector(".result");
let theReScore = document.querySelector(".theReScore");
let scoreEvaluation = document.querySelector(".scoreEvaluation");
let try_again = document.querySelector(".try-again");
let theEnd = document.querySelector(".theEnd");
let good = document.querySelector(".good");
let normal = document.querySelector(".normal");
let exc = document.querySelector(".exc");
let level = document.querySelectorAll(".level button");
let scoreFrom = document.querySelector(".scoreFrom");

// Move class active from one to another
for (i = 0; i <= level.length; i++) {
  if (level[i]) {
    level[i].addEventListener("click", function () {
      document.querySelector(".active").classList.remove("active");
      this.classList.add("active");
      chakAttributes();
    });
  }
}

function chakAttributes() {
  if (good.classList.contains("active") == true) {
    scoreFrom.innerHTML = 44;
  } else if (normal.classList.contains("active") == true) {
    scoreFrom.innerHTML = 88;
  } else if (exc.classList.contains("active") == true) {
    scoreFrom.innerHTML = 132;
  }
}

let evaluation = {
  bad: "Bad luck",
  good: "Good",
  well: "Very Well",
  exc: "Excellent work",
};
startbutton.onclick = function () {
  startdiv.classList.add("hide");
};
inputWord.onpaste = () => {
  return false;
};

letGo.onclick = function () {
  // Change backgroundColor of the buttom
  this.classList.remove;
  this.classList.add("active");
  inputWord.removeAttribute("disabled");
  inputWord.focus();
  startPlay();
  letGo.remove();
};

function startPlay() {
  let start = setInterval(() => {
    thetime.innerHTML--;
    if (randomWord.innerHTML.toLowerCase() === inputWord.value.toLowerCase()) {
      document.getElementById("audio").play();
      theScore.innerHTML++;
      inputWord.value = "";
      //   get random word from the array
      let random = wordArray[Math.floor(Math.random() * wordArray.length)];
      randomWord.innerHTML = random;
      //   drop word index from the array
      wordindex = wordArray.indexOf(random);
      wordArray.splice(wordindex, 1);
      //   back ti the first
      thetime.innerHTML = "10";
    }

    if (thetime.innerHTML === "0") {
      clearInterval(start);
      theReScore.innerHTML = theScore.innerHTML;
      if (theScore.innerHTML == 0) {
        scoreEvaluation.innerHTML = evaluation.bad;
      } else if (theScore.innerHTML < 44) {
        scoreEvaluation.innerHTML = evaluation.good;
      } else if (theScore.innerHTML < 88 && theScore.innerHTML >= 44) {
        scoreEvaluation.innerHTML = evaluation.well;
      } else if (theScore.innerHTML < 132 && theScore.innerHTML >= 88) {
        scoreEvaluation.innerHTML = evaluation.exc;
      }
      letGo.remove();
      try_again.classList.add("block");
      result.classList.add("block");
    }

    if (theScore.innerHTML === scoreFrom.innerHTML) {
      clearInterval(start);
      startdiv.classList.add("none");
      scramble_Game.classList.add("none");
      theEnd.classList.remove("none");
      theEnd.classList.add("block");
      window.location.href =
        "file:///E:/Training%20projects/javaScript/Practical%20projects/Word%20Scramble%20Game/end.html ";
    }
  }, 1000);
}

function again() {
  randomWord.innerHTML = "Write me";
  thetime.innerHTML = "10";
  startPlay();
  try_again.classList.remove("block");
  result.classList.remove("block");
  inputWord.focus();
  theScore.innerHTML = "0";
}

function liveViews(response) {
  document.getElementById("visits").innerText = response.value;
}

document.onkeyup = function (e) {
  if (e.key === "Enter") {
    startdiv.classList.add("hide");
  }
};

// document.getElementById("audio").play();
