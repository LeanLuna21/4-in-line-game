import { useEffect } from "react";
import { Square } from "./Square";

export const Board = ({ board, size, updateBoard }) => {

  useEffect(() => {
    const gameStyle = document.querySelector(".game")
    gameStyle.style.setProperty('--size', size)
  }, [size])

  const gameBoard = []
  board.forEach(row => {
    row.map(square => {
      gameBoard.push(square);
    })
  })

  return (
    gameBoard.map((square, index) => {
      return (
        <Square
          key={index}
          index={index}
          updateBoard={updateBoard}
        >
          {square}
        </Square>
      )
    }
    )
  )
}
