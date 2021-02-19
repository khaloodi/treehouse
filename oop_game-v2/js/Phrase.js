/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */

    addPhraseToDisplay() {
        let phraseSection = document.getElementById('phrase');
        [this.phrase].forEach(word => {
            [word].forEach(letter => {
                console.log(letter.split(''))
            })
        })
    }
}