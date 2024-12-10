function compile(instructions) {
  const registry = {};
  const commands = {
    'MOV': (x, y) => { registry[y] = !isNaN(parseInt(x)) ? parseInt(x) : registry[x] }, 
    'INC': (x) => { registry[x]++ }, 
    'DEC': (x) => { registry[x]-- }, 
    'JMP': (x, y) => registry[x] === 0 && parseInt(y) - 1, 
  }
  for (let i = 0; i < instructions.length; i++) {
    const [command, register1, register2] = instructions[i].split(' ');
    if (!registry[register1]) registry[register1] = 0;
    const next = commands[command](register1, register2);
    if (typeof next === 'number') i = next;
  }
  return registry.A;
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A', // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

 console.log(compile([
  'MOV 2 X',
  'DEC X',
  'DEC X',
  'JMP X 1',
  'MOV X A',
])) // -> -2