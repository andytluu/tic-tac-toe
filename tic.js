const displayBoard = document.querySelector("#game-board-container");
const Gameboard = (function (){
    let gameBoard = ["","","","","","","","",""];
    
    const display = () => {
        displayBoard.innerHTML ="";
        gameBoard.forEach((elem,index) =>{
        displayBoard.innerHTML += `<div class="space" id="${index}">${elem}</div>`;
    });
    const spaces = document.querySelectorAll(".space"); 
    spaces.forEach((elem)=>{
        elem.addEventListener("click",Game.handleClick);
        });
    };

    const update = (index,mark) => {
        gameBoard[index] = mark;
        display();
        console.log(gameBoard);
    };
    return {display,update};
})();

function createplayer(name,symbol){
    return {name,symbol};
}

const Game = (function (){
    let player = [
        createplayer("Player 1", "X"),
        createplayer("Player 2", "O")
    ];
    let currentPlayer = 0;
    const handleClick = (e) =>{
        if(currentPlayer === 0){
            Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
            currentPlayer = 1;
        }
        else{
            Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
            currentPlayer = 0;
        }

    };

    return {handleClick};
})();
Gameboard.display();