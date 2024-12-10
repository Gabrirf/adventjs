function fixPackagesR(packages) {
  const match = /\(([^()]*)\)/;
  const findAndReverseRecursive = stringParenthesis => {
    const stringWithoutParenthesis = stringParenthesis.replace(match, (_match, g1) => 
      g1.split('').reverse().join('')
    )
    return stringWithoutParenthesis.includes('(')
      ? findAndReverseRecursive(stringWithoutParenthesis)
      : stringWithoutParenthesis
  }
  return findAndReverseRecursive(packages);
}

function fixPackages(packages) {
  const match = /\(([^()]*)\)/;
  let sortedPackages = packages;
  while(sortedPackages.match(match)){
    sortedPackages = sortedPackages.replace(match, (_match, g1) => 
      g1.split('').reverse().join('')
    )
  }
  return sortedPackages;
}


// fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

// fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

// fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

console.log(fixPackagesR('(12(3(9((87)((65))4)))AB)'))
console.log(fixPackages('(12(3(9((87)((65))4)))AB)'))


console.log(fixPackagesR('12(34)5(67)8'))
console.log(fixPackages('12(34)5(67)8'))
