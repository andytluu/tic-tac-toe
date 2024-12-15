const displayBoard = document.querySelector("#game-board-container");
const Gameboard = (function (){
    const gameBoard = ["","","","","","","","",""];
    
    const display = () => {
        gameBoard.forEach((elem,index) =>{
        displayBoard.innerHTML += `<div class="space" id="${index}">${elem}</div>`;
    })
};
    return {display};
})();

function createplayer(name,symbol){
    return {name,symbol};
}

const Game = (function (){
    let player = [
        createplayer("Player 1", "X"),
        createplayer("Player 2", "O")
    ];

    
})();
Gameboard.display();