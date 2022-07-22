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