export const TURNS = {
  X: '🟥',
  O: '🟦'
}

export const DIRECTIONS = [
  { dr: 0, dc: 1 },   // →
  { dr: 1, dc: 0 },   // ↓
  { dr: 1, dc: 1 },   // ↘
  { dr: 1, dc:-1 }    // ↙
]

const SQUARES = 49

export const SIZE = Math.sqrt(SQUARES)

export const generateBoard = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(null))
}


