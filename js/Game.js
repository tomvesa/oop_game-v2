/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
    


class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
                        new Phrase("This is phrase one"),
                        new Phrase("This is phrase two"),
                        new Phrase("This is phrase three"),
                        new Phrase("This is phrase four"),
                        new Phrase("This is phrase five")            
                        ];
        this.activePhrase = null;
    }

    // hide overlay, select random phrase and display it on the dashboard
    startGame(){
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 1.5s";
        setTimeout(() =>{
        overlay.style.display = "none";
            }, 2000);
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }

    gameOver(gameResult){

            const message  = {
                                win : "Congratulations, You have won!",
                                lose: "Game Over, you have used all your lives!"
                                }
            overlay.style.display = "inherit";
            overlay.className = gameResult;
            
            gameOverMessage.textContent = message[gameResult];
        //overlay.style.display = "flex";
        
        setTimeout(()=>{
        overlay.style.opacity= "0";
           overlay.style.opacity= "1";
           overlay.style.transition = "opacity 1s";

            // prepare for next game, reset counter, reset lives, reset startButton
            this.missed = 0;
            const phrase = document.querySelector('#phrase ul').innerHTML = "";
            const qwerty = document.getElementsByClassName('key');
                    for(const key of qwerty){key.className = "key"};
            const lives = document.getElementsByClassName("tries");
                    for (const heart of lives){ heart.querySelector("img").setAttribute("src", "images/liveHeart.png")}
            document.getElementById('btn__reset').removeAttribute("disabled");
            const disabledKeys = document.querySelectorAll(".key[disabled]");
                    for(const key of disabledKeys){ key.removeAttribute("disabled")}        
    

        },500);
    }    

    handleInteractions(keyValue){
        
        let isWinner = false;
        let {activePhrase} = this;
            let keyElements = document.querySelectorAll(".key");
            let targetKey = [...keyElements].find(key => key.textContent === keyValue);
            let isCorrectLetter = activePhrase.checkLetter(keyValue); 
                   // console.log(targetKey);
                   if(isCorrectLetter){
                            activePhrase.showMatchedLetter(keyValue);
                            targetKey.classList.add("chosen");
                            targetKey.disabled = true;
                            isWinner = this.checkForWin();
                                if(isWinner){ 
                                    this.gameOver("win");    
                                } 
                        }else if(!isCorrectLetter && targetKey){
                            //return if key has been already klicked to prevent taking life for the same event
                            if(targetKey.classList.contains('wrong')){ return }
                            targetKey.classList.add("wrong");
                            targetKey.disabled = true;
                            this.removeLife();
                         
                        }



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