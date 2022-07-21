/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.phrases.push(new Phrase("This is Phrase one"));
game.phrases.push(new Phrase("This is Phrase two"));
game.phrases.push(new Phrase("This is Phrase three"));
game.phrases.push(new Phrase("This is Phrase four"));
game.phrases.push(new Phrase("This is Phrase five"));



const startBtn = document.getElementById("btn__reset");

// Add event listener to Start button and bind "this" to a game object
startBtn.addEventListener('click', e=>{
    game.startGame();
    startBtn.disabled = true;
});

const screenKeyboard = document.getElementById('qwerty');

screenKeyboard.addEventListener("click", e => {
        console.log(e.target.textContent);
      game.handleInteractions(e.target.textContent);
    });

//physical keyboard event handlers. Start game using Enter key.    
document.body.addEventListener("keydown", e =>{
    const overlayHidden = document.getElementById('overlay').style.display === "none"? true : false;
    if(overlayHidden){
        game.handleInteractions(e.key)
    } else if(!overlayHidden && e.key === "Enter"){
        //game.startGame();
        startBtn.click();
        startBtn.disabled = true;
    };
})
