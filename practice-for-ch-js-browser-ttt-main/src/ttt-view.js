class View {
  constructor(game, el) {
    this.grid = this.setupBoard();
    this.game = game;
    el.appendChild(this.grid);
  }
  
  setupBoard() {
    let grid = document.createElement("ul")
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let space = document.createElement("li")
        space.dataset.row = i;
        space.dataset.col = j;
        grid.appendChild(space);
      }
    }
    let newHandleClick = this.handleClick.bind(this)
    grid.addEventListener('click', newHandleClick);
    return grid;
  }
  
  handleClick(e) {
    // console.log(this)
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;
    let pos = [row, col]
    // if () {
    //   alert(MoveError)
    // } else {
    this.game.playMove(pos)
    e.target.classList.add("marked");
    e.target.innerText = this.game.currentPlayer;
    this.handleGameOver();
    // }
  }
  
  handleGameOver() {
    console.log(this.game.currentPlayer)
    if (this.game.winner()) {
      alert (`player ${this.game.currentPlayer} wins!`)
    } else if (this.game.isOver()) {
      alert (`is a draw`);
    }
  }
}

export default View;