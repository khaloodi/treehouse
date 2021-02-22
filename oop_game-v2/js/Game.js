/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /** 
     * Creates phrases for use in the game
     * @return {array} returns an array of phrases that can be used in the game
     */

    createPhrase() {
        const phrases = [
            new Phrase('life is like a box of chocolates'),
            new Phrase('there is no try only do'),
            new Phrase('i found you ms new booty'),
            new Phrase('are you talking to me'),
            new Phrase('i fear the man who has practiced one kick ten thousand times')
        ]
        return phrases;
    }

    /** 
     * Selects random phrase from phrases property
     * @return {Object} phrase object chosen to be used
     */

    getRandomPhrase() {
        const random = this.phrases[Math.floor(Math.random() * this.phrases.length)]
        return random
    }

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame() {
        const overlay = document.getElementById('overlay');
        const startGame = document.getElementById('btn__reset');
        startGame.addEventListener('click', e => {
            overlay.style.display = 'none';
        })
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game hasn't been won
     */
    checkForWin() {
        const listOfLetters = document.querySelector('#phrase ul').children
        for (let i = 0; i < listOfLetters.length; i++) {
            if (listOfLetters[i].className.includes('hide')) {
                return false;
            } else {
                return true;
            }
        }
    }


    /**
     * Handle game interaction
     */
    handleInteraction() {

    }
}