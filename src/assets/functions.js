export function countDirection(board, row, col, dr, dc, player) {
  let count = 0;
  let r = row + dr;
  let c = col + dc;

  while (
    r >= 0 && r < board.length &&
    c >= 0 && c < board[0].length &&
    board[r][c] === player
  ) {
    count++;
    r += dr;
    c += dc;
  }

  return count;
}