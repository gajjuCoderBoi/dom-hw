let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
        quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.querySelector('#main-title').textContent = "Hi, I'm Tom. Welcome.";
  }
  shortenPageTitle();


  // Part 2
  function changeBodyBgColor() {
    document.querySelector('body').style.background = "#778ca3";
  }
  changeBodyBgColor();


  // Part 3
  function removeLastFavoriteThing() {
    document.querySelector('#favorite-things').lastElementChild.remove();


  }
  removeLastFavoriteThing();


  // Part 4
  function makeSpecialTitlesBigger() {
    let list = document.querySelectorAll('.special-title');
    list.forEach((element) =>{
      element.style.fontSize = "2rem";
    });
  }
  makeSpecialTitlesBigger();


  // Part 5
  function RemoveChicagoRace() {
    let pastRaces =  document.querySelector('#past-races').childNodes;
    pastRaces.forEach((element) =>{
      if(element.textContent === "Chicago")
        element.remove();
    });
  }
  RemoveChicagoRace();
  // Part 6
  function addPastRace() {
    let newElement = document.createElement("li");
    newElement.textContent = "New York";
    document.querySelector("#past-races").appendChild(newElement);
  }
  addPastRace();


  // Part 7
  function createNewBlogPost() {
    let newPostDiv = document.createElement("div");
    newPostDiv.setAttribute('class','blog-post');
    newPostDiv.style.backgroundColor = "#575fcf";
    let newPostH2 = document.createElement("h1");
    newPostH2.textContent = "New York";
    let newPostP = document.createElement('p');
    newPostP.textContent = "I race Mohammad and Loss my Car... Hahahaha...";


    newPostDiv.appendChild(newPostH2);
    newPostDiv.appendChild(newPostP);

    document.querySelector('.main').appendChild(newPostDiv);
  }
  createNewBlogPost();

});