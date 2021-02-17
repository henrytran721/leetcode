// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

/** [] */

// Math.random() => [0,1)

function getCard(deck) {
  // [card1, card2, card3] 
  // randomly access the index using Math.random arr[random index]
  // my random returns 0 or the length of the deck; at 0 return the first card
  // return arr[arr.length - 1]
  // return the card and the attributes
  // O(1) time 
  
  if(!deck.length) return null;
  
  let random = Math.floor(Math.random() * deck.length);
  // random gives me the index of where the card is located
  // remove card at index
  let temp = deck[random];
  deck.splice(random, 1);
  return temp;
}

function manyCards(num, deck) {
  // based on num (2) call getCard twice and return both cards
  // arr push cards we get back into this arr and return the arr
  let result = [];
  // if(num <= 0) return result;
  
  for(let i = 0; i < num; i++) {
    result.push(getCard(deck));
  }
  
  return result;
}

// let hash = {a: 1, b: 0, c: 1}
let deck = ['a','b','c', 'c']
console.log(manyCards(2, deck));
console.log(deck);