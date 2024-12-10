/**
 * Score 350
 * 3211 ops/s
 * Complejidad cognitiva: 5
*/
function findNaughtyStep(original, modified) {
  return (original.length > modified.length
    ? [...original].filter((c, i) => c !== modified.charAt(i))[0]
    : [...modified].filter((c, i) => c !== original.charAt(i))[0]) || '';
}