/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
    


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
        this.handleInteractions();
    }

    gameOver(gameResult){
        setTimeout(()=>{
            const message  = {
                                win : "Congratulations, You have won!",
                                lose: "Game Over, you have used all your lives!"
                                }
            overlay.style.display = "inherit";
            overlay.className = gameResult;
            
            gameOverMessage.textContent = message[gameResult];
        
            // prepare for next game, reset counter
            this.missed = 0;
            const phrase = document.querySelector('#phrase ul').innerHTML = "";
            const qwerty = document.getElementsByClassName('key');
                    for(const key of qwerty){key.className = "key"};

        },1500);
    }    

    handleInteractions(){
        const keyboard = document.getElementById('qwerty');
        let isWinner = false;
        let {activePhrase} = this;
                keyboard.addEventListener("click", e =>{
                    if(e.target.className === "key"){
                        let keyValue = e.target.textContent;
                        if(activePhrase.checkLetter(keyValue)){
                            activePhrase.showMatchedLetter(keyValue);
                            e.target.classList.add("chosen");
                            isWinner = this.checkForWin();
                                if(isWinner){ 
                                    this.gameOver("win");    
                                } 
                        }else{
                            e.target.classList.add("wrong");
                            this.removeLife();
                         
                        }



                    }
                })
    }

    removeLife(){
        //find lives heart images, take the one by Missed index and change it to LostHear png
        let lives = document.getElementsByClassName('tries');
            lives[this.missed].querySelector("img").setAttribute("src", "images/lostHeart.png");
        this.missed += 1;
        if(this.missed === 5){this.gameOver("lose")};
    }

    checkForWin(){
        let {phrase} = this.activePhrase;
           phrase = phrase.replaceAll(" ", "");
        let revealedPhrase = "";
        const phraseLetters = document.querySelectorAll('#phrase .letter.show');
        
        for(const letter of phraseLetters){
            revealedPhrase += letter.textContent;
        }    
        
        return phrase === revealedPhrase;
    }

    // choose activePhrase from this object phrases array
    getRandomPhrase(){
        const randomPhraseIndex =  Math.floor(Math.random() * this.phrases.length);
        return this.activePhrase = this.phrases[randomPhraseIndex];
    }

     
}    