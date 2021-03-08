/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
let start = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');


for (el of keyboard) {
    el.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
}

start.addEventListener('click', () => {
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
    }
    game = new Game();
    game.startGame();
    // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

})