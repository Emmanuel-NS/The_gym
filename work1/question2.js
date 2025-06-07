const compute= arr => {
  positives=arr.filter(num=>num>0);
  negatives=arr.filter(num => num<0);
  return !positives.length && !negatives.length?[]:[positives.length ,negatives.reduce((a,b)=>a+b,0)]
}
console.log(compute([9,2,-3,-2,4,0,2,0,-7]))