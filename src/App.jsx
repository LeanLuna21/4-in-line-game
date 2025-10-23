import { useState } from 'react'
import { SIZE, TURNS, DIRECTIONS} from './assets/constants.js'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Board } from './components/Board.jsx'
import { countDirection } from './assets/functions.js'
import confetti from 'canvas-confetti'
import "./index.css"

function App() {
  // const board = Array(9).fill(null) // un array de 9 posiciones 

  const [size] = useState(SIZE)

  const [board, setBoard] = useState(Array.from({ length: size }, () => Array(size).fill(null))) //pasamos el array como estado inicial

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)


  const checkWinner = (board, row, col) => {
    for (let { dr, dc } of DIRECTIONS) {
      let count = 1;

      count += countDirection(board, row, col, dr, dc, turn)
      count += countDirection(board, row, col, -dr, -dc, turn)
   
      if (count >= 4) return true
    }
    return null
  }

  const checkEndGame = (board) => {
    let full = false

    let spaces = size * size
    let count = 0

    board.forEach(element => {
      element.forEach(value => {
        if (value !== null) {
          count += 1
        }
      })
    });

    full = count === spaces;
    return full
  }

  const resetGame = () => {
    setBoard(Array.from({ length: size }, () => Array(size).fill(null)))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const dropPiece = (index) => {
    const col = index

    const tempBoard = [...board]
    for (let row = tempBoard.length - 1; row > -1; row--) {
      if (tempBoard[row][col] === null) {
        return { row, col }
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (winner) return
    const col_index = index % SIZE
    const move = dropPiece(col_index)
    if (!move) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[move.row][move.col] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard, move.row, move.col)
    if (newWinner) {
      confetti()
      setWinner(turn)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1 className='title'>LINE 4</h1>

      <section className='game'>
        <Board board={board} size={size} updateBoard={updateBoard} turn={turn} />
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} visible>
          {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O} visible>
          {TURNS.O} </Square>
      </section>

      {/* renderizado condicional */}
      <WinnerModal winner={winner} resetGame={resetGame} />

      <button onClick={resetGame}>
        Reset
      </button>
    </main>
  )

}

export default App
