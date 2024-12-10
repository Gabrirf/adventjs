
function moveTrain(board, mov) {
  const result = {
    '·': 'none',
    '*': 'eat',
    'o': 'crash',
  };
  const moveTrain = (trainX, trainY) => ({
    'U': [trainX, trainY-1],
    'D': [trainX, trainY+1],
    'L': [trainX-1, trainY],
    'R': [trainX+1, trainY],
  }[mov]);
  const trainY = board.findIndex(b => b.includes('@'));
  const trainX = board[trainY].indexOf('@');
  const [x, y] = moveTrain(trainX, trainY);
  return result[board[y]?.charAt(x)] || 'crash';
}
const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha