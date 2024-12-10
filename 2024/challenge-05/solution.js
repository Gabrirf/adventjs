function organizeShoes(shoes) {
  const opositeType = { 'I': 'R', 'R': 'I' };
  const pairs = [];
  while(shoes.length > 0){
    const shoe = shoes.shift();
    const index = shoes.findIndex(s => 
      s.size === shoe.size && s.type === opositeType[shoe.type]
    );
    if(index != -1){
      pairs.push(shoe.size);
      shoes.splice(index, 1)
    }
  }
  return pairs
}

