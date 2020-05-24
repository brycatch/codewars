// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean
// The string can contain any char

function XO(str: string) {
  const regexX = (str.match(/x/ig));
  const regexO = (str.match(/o/ig));
  return (regexX && regexX.length) === (regexO && regexO.length)
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));