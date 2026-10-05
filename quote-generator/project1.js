const btn = document.getElementById("new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

btn.addEventListener("click", () => {
  const ind = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[ind].quote;
  person.innerText = quotes[ind].person;
});

const quotes = [
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    person: "Jane Austen",
  },
  {
    quote: "Whatever our souls are made of, his and mine are the same.",
    person: "Emily Brontë",
  },
  {
    quote:
      "All happy families are alike; each unhappy family is unhappy in its own way.",
    person: "Leo Tolstoy",
  },
  {
    quote: "It was the best of times, it was the worst of times.",
    person: "Charles Dickens",
  },
  {
    quote: "Not all those who wander are lost.",
    person: "J.R.R. Tolkien",
  },
  {
    quote: "There is no charm equal to tenderness of heart.",
    person: "Jane Austen",
  },
  {
    quote: "Whatever you are, be a good one.",
    person: "William Makepeace Thackeray",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    person: "J.K. Rowling",
  },
  {
    quote: "The only way out of the labyrinth of suffering is to forgive.",
    person: "John Green",
  },
  {
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
    person: "F. Scott Fitzgerald",
  },
];
