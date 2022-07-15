/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.phrases.push(new Phrase("This is Prase one"));
game.phrases.push(new Phrase("This is Prase two"));
game.phrases.push(new Phrase("This is Prase three"));
game.phrases.push(new Phrase("This is Prase four"));
game.phrases.push(new Phrase("This is Prase five"));



const startBtn = document.getElementById("btn__reset");

// Add event listener to Start button and bind "this" to a game object
startBtn.addEventListener('click', game.startGame.bind(game));



