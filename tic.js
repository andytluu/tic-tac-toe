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

        if(gameBoard[index] === ""){
            gameBoard[index] = mark;
            display();
        }
        else{
            return;
        }
        console.log(gameBoard);
    };

    const checkSpace = (index)=>{
        if(gameBoard[index] === ""){
            return true;
        }
        else{
            return false;
        }
    }

    const checkWin = () =>{
        if((gameBoard[0] && gameBoard[1] && gameBoard[2]) ||
        (gameBoard[3] && gameBoard[4] && gameBoard[5]) ||
        (gameBoard[6] && gameBoard[7] && gameBoard[8]) ||
        (gameBoard[0] && gameBoard[3] && gameBoard[6]) ||
        (gameBoard[1] && gameBoard[4] && gameBoard[7]) ||
        (gameBoard[2] && gameBoard[5] && gameBoard[8]) ||
        (gameBoard[0] && gameBoard[4] && gameBoard[8]) ||
        (gameBoard[2] && gameBoard[4] && gameBoard[6])){
            console.log("win");
            return true;
        }
        else{
            console.log("1");
            return false;
        }
    }
    return {display,update,checkSpace,checkWin};
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

    const gameWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], 
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    const handleClick = (e) =>{
        if(currentPlayer === 0){
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                Gameboard.checkWin();
                currentPlayer = 1;
            }
        }
        else{
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                Gameboard.checkWin();
                currentPlayer = 0;
            }
        }
        //currentPlayer = currentPlayer === 0 ? 1 : 0;
    };

    return {handleClick};
})();
Gameboard.display();