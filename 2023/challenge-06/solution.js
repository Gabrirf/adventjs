/**
 * Score 260
 * 2754 ops/s
 * Complejidad cognitiva: 4
*/
function maxDistance(movements) {
  const left = (movements.match(/</g) || []).length;
  const right = (movements.match(/>/g) || []).length;
  const any = (movements.match(/\*/g) || []).length;
  return Math.abs(left - right) + any;
}

/**
 * Score 280
 * 2824 ops/s
 * Complejidad cognitiva: 2
*/
function maxDistance(movements) {
  const { '<': left, '>': right, '*': any } = [...movements].reduce((count, char) => {
    count[char] += 1;
    return count;
  }, { '<': 0, '>': 0, '*': 0});
  return Math.abs(left - right) + any;
}

/**
 * Score 280
 * 2675 ops/s
 * Complejidad cognitiva: 2
*/
function maxDistance(movements) {
  const count = { '<': 0, '>': 0, '*': 0}
  Array.from(movements).forEach(char => count[char] += 1);
  return Math.abs(count['<'] - count['>']) + count['*'];
}

/**
 * Score 290
 * 2662 ops/s
 * Complejidad cognitiva: 1
*/
function maxDistance(movements) {
  const left = movements.split('<').length-1;
  const right = movements.split('>').length-1;
  const any = movements.split('*').length-1;
  return Math.abs(left - right) + any;
}

/**
 * Score 390
 * 3326 ops/s
 * Complejidad cognitiva: 1
*/
function maxDistance(movements) {
  const left = movements.split('<').length-1;
  const right = movements.split('>').length-1;
  const any = movements.length - left - right;
  return Math.abs(left - right) + any;
}