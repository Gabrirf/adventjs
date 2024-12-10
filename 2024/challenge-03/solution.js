function organizeInventoryReduce(inventory) {
  return inventory.reduce((acc, item) => {
    acc[item.category][item.name] = acc[item.category][item.name]
      ? acc[item.category][item.name] + item.quantity
      : item.quantity;
    return acc;
  }, Object.fromEntries(inventory.map(i => [i.category, {}])))
}

function organizeInventory(inventory) {
  const inventoryObject = Object.fromEntries(inventory.map(i => [i.category, {}]));
  for (const item of inventory) {
    inventoryObject[item.category][item.name] = inventoryObject[item.category][item.name]
      ? inventoryObject[item.category][item.name] + item.quantity
      : item.quantity;
  }
  return inventoryObject;
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
]

console.log(organizeInventory(inventory))

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' },
]

console.log(organizeInventory(inventory2))

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }