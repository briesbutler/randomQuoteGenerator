const quoteArray = () => {
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
   })
   .then(function(data) {
     console.log(data);
   });
}

const randomQuote = () =>{
  let randomNumber = Math.floor(Math.random() * quoteArray.length);
}