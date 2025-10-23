import { TURNS } from "../assets/constants"

export const Square = ({ children, isSelected, updateBoard, index, visible }) => {
  const className = `square ${isSelected ? 'is-selected' : ''} ${children === TURNS.X ? 'x-turn' : ''} ${children === TURNS.O ? 'o-turn' : ''}`
  const handleClick = () => { updateBoard(index) }

  return (
    <div onClick={handleClick} className={className} key={index} >
      {visible ? children : ''}
    </div>
  )
}
