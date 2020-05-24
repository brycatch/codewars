function arrayDiff(a: number[], b: number[]): number[] {
  // If a is empty, means there is no need to iterate
  // If b is empty, means it finished iterating    
  if (a.length === 0 || b.length === 0) {
    // returns filter values    
    return a;
  }
  // Else, it will looking for if the element exist in the actual array
  const elementInB = b.shift();
  const indexInA = a.findIndex((elementInA) => elementInA === elementInB);
  // If exist, it will filtering of all elements in arrayA
  if (indexInA > -1) {
    a = a.filter((elementInA) => elementInA !== elementInB);
  }
  return arrayDiff(a, b);
}

arrayDiff([3, 4], [3]);