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
        let phraseSectionUL = document.getElementById('phrase').firstElementChild;
        [this.phrase].forEach(word => {
            [word].forEach(letter => {
                const lettersArray = letter.split('')
                for (let i = 0; i < lettersArray.length; i++) {
                    const li = document.createElement('li');
                    li.innerHTML = lettersArray[i];
                    if (!(lettersArray[i] === " ")) {
                        li.classList.add('hide', 'letter')
                    } else {
                        li.classList.add('space')
                    }
                    phraseSectionUL.appendChild(li)
                }
            })
        })
    }
}