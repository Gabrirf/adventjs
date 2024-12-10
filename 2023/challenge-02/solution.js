
/**
 * Score 270
 * 3006 ops/s
 * Complejidad cognitiva: 3
*/
function manufacture(gifts, materials) {
  return gifts.filter(g => [...g].every(c => materials.includes(c)))
}

/**
 * Score 270
 * 2865 ops/s
 * Complejidad cognitiva: 3
*/
function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    for (const letter of gift) {
      if (!materials.includes(letter)) {
        return false;
      }
    }
    return true;
  });
}
