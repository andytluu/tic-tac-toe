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
    return {display,update,checkSpace};
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
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                currentPlayer = 1;
            }
        }
        else{
            if(Gameboard.checkSpace(parseInt(e.target.id))){
                Gameboard.update(parseInt(e.target.id),player[currentPlayer].symbol);
                currentPlayer = 0;
            }
        }
        //currentPlayer = currentPlayer === 0 ? 1 : 0;
    };

    return {handleClick};
})();
Gameboard.display();