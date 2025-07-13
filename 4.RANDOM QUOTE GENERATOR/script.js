const quotes = [
  {
    quote:
      "The day you dont quit, you get one day closer to being unstoppable.",
    By: "David Goggins",
  },
  {
    quote: "Dreams don’t work unless you do.",
    By: "John Maxwell",
  },
  {
    quote: "The only limit is the one you refuse to break through.",
    By: "Unknown",
  },
  {
    quote: "Success is not for the lucky, its for the relentless.",
    By: "David Goggins",
  },
  {
    quote: "Fate is nothing compared to the man who refuses to quit.",
    By: "Unknown",
  },
  {
    quote:
      "Discipline is choosing between what you want now and what you want most.",
    By: "Abraham Lincoln",
  },
];

let button = document.getElementById("button");
let output = document.getElementById("quote-output");
const authorOutput = document.getElementById("author-output");

button.addEventListener("click",function(){
let randomNum = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[randomNum]

let saveQuote = randomQuote.quote;
console.log(saveQuote);
let saveAuthor = randomQuote.By;
console.log(saveAuthor);

output.innerText = saveQuote;
authorOutput.innerHTML = saveAuthor
})

