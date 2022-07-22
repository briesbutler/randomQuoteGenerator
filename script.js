let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


let quotes = () => {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
   })
   .then(function(data) {
    let randomNumber = Math.floor(Math.random() * data.length);
    quote.innerText = data[randomNumber]['text'];
    author.innerText = data[randomNumber]['author'];
   });
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

//quotes();



/*

let getQuote = () =>{
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomNumber]['text']);
  console.log(quotes[randomNumber]['author']);
}

let quotes = [
  {
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison'
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra'
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln'
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe'
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer'
  },
  { text: 'Be the chief but never the lord.', author: 'Lao Tzu' },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg'
  },
  { text: 'Well begun is half done.', author: 'Aristotle' },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra'
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster'
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha'
  },
  { text: 'What you give is what you get.', author: 'Byron Pulsifer' },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch'
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark'
  },
  { text: "You'll see it when you believe it.", author: 'Wayne Dyer' },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: null
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: null
  },
  { text: 'Every man dies. Not every man really lives.', author: null },
  { text: 'To lead people walk behind them.', author: 'Lao Tzu' },
  {
    text: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare'
  },
  {
    text: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser'
  }]*/
