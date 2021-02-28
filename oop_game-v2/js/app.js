/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


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

const game = new Game();

game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
const keyboard = document.getElementsByClassName('key');
for (el of keyboard) {
    el.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
}

// const overlay = document.getElementById('overlay');
if (document.getElementById('overlay').classList.contains('lose') || document.getElementById('overlay').classList.contains('win')) {
    document.querySelector('#phrase ul').innerHTML = '';
    for (el of keyboard) {
        el.setAttribute('disabled', false)
        el.classList.remove('wrong')
        el.classList.remove('chosen')
    }
    const scoreboard = document.querySelector('#scoreboard ol')
    for (li of scoreboard) {
        li.firstElementChild.src = "./images/liveHeart.png";
    }
    // game.startGame();
    // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
    // const keyboard = document.getElementsByClassName('key');
    // for (el of keyboard) {
    //     el.addEventListener('click', e => {
    //         game.handleInteraction(e.target);
    //     })
    // }
}