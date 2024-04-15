 const board = document.getElementById("board")
const square = document.createElement("div")
square.classList.add("square")
board.appendChild(square) 
document.addEventListener("keydown",function(event) {
    
    if (event.key == "ArrowDown") {
        let newSquare = square.cloneNode()
        const random =(Math.random()*0XFFFFFF <<0).toString(16)
        newSquare.style.backgroundColor = "#" + random
        board.appendChild(newSquare) 
        
    }
    else if (event.key == "ArrowUp" && board.childElementCount > 0) {
        board.removeChild(board.lastChild)
        
    }
   
})