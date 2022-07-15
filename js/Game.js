/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let overlay = document.getElementById('overlay');
    


class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    // hide overlay, select random phrase and display it on the dashboard
    startGame(){
        overlay.style.display = "none";
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteractions(){}

    removeLife(){}

    checkForWin(){}

    // choose activePhrase from this object phrases array
    getRandomPhrase(){
        const randomPhraseIndex =  Math.floor(Math.random() * this.phrases.length);
        return this.activePhrase = this.phrases[randomPhraseIndex];
    }

     
}    