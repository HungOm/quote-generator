import './style.css';
import {QuoteLeft,Twitter} from './awsome'


// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

//new quote

const quoteContainer=document.querySelector("#quote-container")
const quoteIcon=document.createElement("i")
const quoteText=document.querySelector("#quote")
const authorText =document.querySelector("#author")
const newQuoteBtn =document.querySelector("#new-quote")
const twitterBtn = document.querySelector("#twitter")
const loader = document.querySelector("#loader")
const iconContainer = document.querySelector('#twitter');
const quoteContainerText = document.querySelector('#quote-text')

const span = document.createElement('i')
span.innerHTML = Twitter;
iconContainer.appendChild(span)
quoteIcon.innerHTML= QuoteLeft;
quoteContainerText.prepend(quoteIcon)


let apiQuotes = [];

function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;
  // sleep(1000)
};

// function sleep(miliseconds) {
//   var currentTime = new Date().getTime();

//   while (currentTime + miliseconds >= new Date().getTime()) {
//   }
// }

function complete(){
  quoteContainer.hidden = false;
  loader.hidden = true;

}




//Get quote from api
async function getQuotes(){
  loading();

  const url = "https://type.fit/api/quotes";
  try{
    const response = await fetch(url)
    apiQuotes = await response.json();
    newQuote()

  }catch(err){
    console.log(err)
    
    // complete()

  }

}

// newQuote()

function newQuote(){
  loading()
  let randomNum = Math.floor(Math.random() * apiQuotes.length);
  const quote=apiQuotes[randomNum]
  if(!quote.author){
    authorText.textContent="unknown"
  }else{
    authorText.textContent = quote.author;
  }

  if(quote.length>50){
    quoteText.classList.add("long-quote")
  }else{
    quoteText.classList.remove("long-quote")

  }

  quoteText.textContent = quote.text
  complete()


}

//Tweet Quote

const tweetQuote = ()=>{
  const tweetUrl = `https://www.twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;

  window.open(tweetUrl,"_blank");

}

newQuoteBtn.addEventListener('click',getQuotes)
twitterBtn.addEventListener('click',tweetQuote)

// loading();
getQuotes()


