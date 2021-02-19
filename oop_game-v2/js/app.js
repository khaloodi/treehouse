/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

/* Test code to initialize my first phrase
 const phrase = new Phrase('Life is like a box of chocolates');
 console.log(`Phrase - phrase: ${phrase.phrase}`);
*/

/*
 game.phrases.forEach((phrase, index) => {
     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
 })
*/

/*
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
*/

game.getRandomPhrase().addPhraseToDisplay();