const displayBoard = document.querySelector("#game-board-container");
const Gameboard = (function board(){
    const gameBoard = ["","","","","","","","",""];
    
    const display = () => {
        gameBoard.forEach((elem,index) =>{
        displayBoard.innerHTML += `<div class="space" id="${index}">${elem}</div>`;
    })
};
    return {display};
})();

Gameboard.display();