import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard);

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = []; 
    for(let y = 0; y < nrows; y++){
        initialBoard.push(Array.from({length: ncols}))
    }    
      for(let x = 0; x < initialBoard.length; x++){
       let cells = initialBoard[x]
        for(let c = 0; c < cells.length; c++){   
            if(Math.random() <= (chanceLightStartsOn/100)) {
          cells[c] =true
        }else{
            cells[c]= false
        }           
      }
  }
    return initialBoard;
  }

  function hasWon() {
  // TODO: check the board in state to determine whether the player has won.
  //if true return 
  //else "YOU HAVE FUN"
   (board.map(b=> {
    if(b.includes(true)) return 
    else return alert("You Have Won!")
   }))
  }

    function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
        let oldCopyBoard = [...oldBoard]

      // TODO: in the copy, flip this cell and the cells around it

        flipCell(y, x, oldCopyBoard)
      flipCell(y, x - 1, oldCopyBoard);
      flipCell(y, x + 1, oldCopyBoard);
      flipCell(y - 1, x, oldCopyBoard);
      flipCell(y + 1, x, oldCopyBoard);

      // TODO: return the copy

      return oldCopyBoard
    });
  }
    hasWon()

    let tboard = []
      
  
        for(let y= 0; y < board.length; y++){
          let c = board[y]
          let rows = []
            for(let x = 0; x < c.length; x++){
              let v = c[x]
            let coord =`${y}-${x}`
              rows.push(<Cell flipCellsAroundMe={evt => flipCellsAround(coord)} isLit={v}/>)
      
          }
          tboard.push(<tr key={y}>{rows}</tr>)
         } 
     
         return (
          <table className="Board">
            <tbody>{tboard}</tbody>
          </table>
         )
  
    }

{/* //   return (<>
//   {board.map(b => <div>{b.map(r => <div>{console.log(r)}</div>)}
//   </div>)}
//   <p>{board}</p>
//   </>)
//  */}


{/* //   function flipCellsAround(coord) {
//     setBoard(oldBoard => {
//       const [y, x] = coord.split("-").map(Number);

//       const flipCell = (y, x, boardCopy) => {
//         // if this coord is actually on board, flip it

//         if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
//           boardCopy[y][x] = !boardCopy[y][x];
//         }
//       };

//       // TODO: Make a (deep) copy of the oldBoard

//       // TODO: in the copy, flip this cell and the cells around it

//       // TODO: return the copy
//     });
//   }

//   // if the game is won, just show a winning msg & render nothing else

//   // TODO

//   // make table board

//   // TODO
// } */}

export default Board;
