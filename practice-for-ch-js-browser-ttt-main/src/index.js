// Add your import statements for View and Game here
import View from "./ttt-view";
import Game from "../ttt_node/game.js";
window.Game = Game;
window.View = View;

console.log("tic tac toe game")

document.addEventListener("DOMContentLoaded", () => {
  const view_container = document.getElementsByClassName('ttt')[0]
  const game = new Game();
  const view = new View(game, view_container);
  // Your code here
});