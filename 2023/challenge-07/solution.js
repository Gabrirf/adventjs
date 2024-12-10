/**
 * Score 270
 * 2443 ops/s
 * Complejidad cognitiva: 3
*/
function drawGift(size, symbol) {
  if(size === 1) return '#\n';
  
  const base = '#'.repeat(size);
  let cube = [`${base}${symbol.repeat(size-2)}#`];
  
  for(let i=0; i<size-2; i+=1){
    const down = `#${symbol.repeat(size-2)}#${symbol.repeat(size-3-i)}#`;
    const up = `${' '.repeat(i+1)}${down}`;
    cube.unshift(up);
    cube.push(down);
  }
  
  return [
    `${' '.repeat(size-1)}${base}`,
    ...cube,
    base, ''
  ].join('\n');
}

/**
 * Score 250
 * 2184 ops/s
 * Complejidad cognitiva: 5
*/
function drawGift(size, symbol) {
  if(size === 1) return '#\n';
  
  const hashes = '#'.repeat(size);
  let middle = `${hashes}${symbol.repeat(size-2)}#`;
  
  const base = Array(size-2).fill(`#${symbol.repeat(size-2)}#`);
  const lowerBase = base.map((b, i) => `${b}${symbol.repeat(i)}#`);
  const upperBase = base.map((b, i) => `${' '.repeat(size-2-i)}${b}${symbol.repeat(i)}#`);

  return [
    `${' '.repeat(size-1)}${hashes}`,
    ...upperBase,
    middle,
    ...lowerBase.reverse(),
    hashes, ''
  ].join('\n');
}

/**
 * Score 270
 * 2579 ops/s
 * Complejidad cognitiva: 3
*/
function drawGift(size, symbol) {
  if(size === 1) return '#\n';
  
  const hashes = `${'#'.repeat(size)}\n`;
  const base = `#${symbol.repeat(size-2)}#`;
  const middle = `${'#'.repeat(size)}${base.slice(1)}\n`;
  let top = '';
  let bot = '';
  
  for(let i=0; i<size-2; i+=1){
    const line = `${base}${symbol.repeat(size-3-i)}#\n`;
    bot += `${base}${symbol.repeat(size-3-i)}#\n`;
    top += `${' '.repeat(size-i-2)}${base}${symbol.repeat(i)}#\n`;
  }
  
  return `${' '.repeat(size-1)}${hashes}${top}${middle}${bot}${hashes}`;
}