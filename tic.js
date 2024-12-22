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

    const checkWin = (mark) =>{
        if((gameBoard[0] ===mark && gameBoard[1] ===mark && gameBoard[2]===mark) ||
        (gameBoard[3] ===mark && gameBoard[4] ===mark && gameBoard[5]===mark) ||
        (gameBoard[6] ===mark && gameBoard[7] ===mark && gameBoard[8]===mark) ||
        (gameBoard[0] ===mark && gameBoard[3]===mark && gameBoard[6]===mark) ||
        (gameBoard[1]===mark && gameBoard[4]===mark && gameBoard[7]===mark) ||
        (gameBoard[2]===mark && gameBoard[5]===mark && gameBoard[8]===mark) ||
        (gameBoard[0]===mark && gameBoard[4]===mark && gameBoard[8]===mark) ||
        (gameBoard[2]===mark && gameBoard[4]===mark && gameBoard[6]===mark)){
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

    //const gameWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], 
    //[1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    const handleClick = (e) =>{
        if(currentPlayer === 0){
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                Gameboard.checkWin(player[currentPlayer].symbol);
                currentPlayer = 1;
            }
        }
        else{
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                Gameboard.checkWin(player[currentPlayer].symbol);
                currentPlayer = 0;
            }
        }
        //currentPlayer = currentPlayer === 0 ? 1 : 0;
    };

    return {handleClick};
})();
Gameboard.display();