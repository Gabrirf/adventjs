/**
 * Score 280
 * 2628 ops/s
 * Complejidad cognitiva: 2
*/
function decode(message) {
  const regex = /\(([^()]+)\)/g;
  const replaceFunc = (_, content) => content
    .split('').reverse().join('');
  return message.replace(regex, replaceFunc)
    .replace(regex, replaceFunc);
}
