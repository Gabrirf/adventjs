/**
 * Score 370
 * 2839 ops/s
 * Complejidad cognitiva: 3
*/
function findFirstRepeated(gifts) {
  const uniqueGifts = [...new Set(gifts)];
  const secondsIndexes = uniqueGifts.map(g => gifts.indexOf(g, gifts.indexOf(g) + 1));
  const firstDuplicateIndex = secondsIndexes.sort().lastIndexOf(-1) + 1;
  return firstDuplicateIndex === secondsIndexes.length
    ? -1
    : gifts[secondsIndexes[firstDuplicateIndex]];
}

/**
 * Score: 240
 * 3084 ops/s
 * Complejidad cognitiva: 4
 */
function findFirstRepeated(gifts) {
  const { gift } = gifts.reduce((firstDuplicatedGift, gift, index, gifts) => {
    const secondIndex = gifts.indexOf(gift, index+1);
    console.log(secondIndex, firstDuplicatedGift)
    if(secondIndex > -1 && secondIndex < firstDuplicatedGift.index){
      return { index: secondIndex, gift }
    }
    return firstDuplicatedGift;
  }, { index: Number.MAX_VALUE, gift: -1})
  return gift;
}
