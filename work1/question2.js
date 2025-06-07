const compute= arr => {
  if(!arr){
    return [];
  }
  positives=arr.filter(num=>num>0);
  negatives=arr.filter(num => num<0)
  return[positives.length,negatives.sum()]
}
console.log(compute([1,6,2,-7,-2,0,2]))