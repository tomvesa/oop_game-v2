/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        // take this phrase and prepare to display in the target element
        // for every letter create LI element with class "letter" or "space"
        let target = document.getElementById("phrase");

        for( let i = 0; i < this.phrase.length; i++ ){
          let li = document.createElement("LI");
          // add letter or space class
            if( this.phrase[i] === " " ){
                li.classList.add('space');
            }else{
                li.classList.add('letter', this.phrase[i]);
                li.textContent = this.phrase[i];
            }
          target.querySelector("ul").append(li);  
    }
    }

    checkLetter(letter){
        console.log(this.phrase);
        return this.phrase.includes(letter);

    }

    showMatchedLetter(letter){
        //display letters that match the parameter
        // make sure to search only phrase element
        let target = document.getElementById("phrase");
        let allLetterItems = target.querySelectorAll(`.${letter.toLowerCase()}`);
                        for(const item of allLetterItems){ item.classList.add("show") }

    }
}