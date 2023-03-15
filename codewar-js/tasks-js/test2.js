//**  DONE!

//**  2****          Arrays
//1    7 kyu https://www.codewars.com/kata/head-tail-init-and-last
//2    6 kyu https://www.codewars.com/kata/array-deep-count
//3    6 kyu https://www.codewars.com/kata/length-of-missing-array
//4    6 kyu https://www.codewars.com/kata/pair-of-gloves
//5    6 kyu https://www.codewars.com/kata/sorting-by-bits
//6    6 kyu https://www.codewars.com/kata/lets-recycle


//**          1            */

function head(arr){
  return +(arr.slice(0,1))
  }
  function tail(arr){
  return (arr.slice(1))
  }
  function init(arr){
  return (arr.slice(0,arr.length-1))
  }
  function last(arr){
  return +(arr.slice(arr.length-1))
  }


//**          2            */

function deepCount(array) {
  var count = array.length
  
  for (const element of array) {
    if (Array.isArray(element)) {
      count += deepCount(element)
    }
  }
  
  return count
}

//**          3            */

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)

  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

//**          4            */

function numberOfPairs(gloves){
  let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
  let pairs = 0;
  for (let i=1;i<arr.length;i++){
    if (arr[i-1]===arr[i]){
      pairs++
      i++
    }
  }
  return pairs
}

//**          5            */

function sortByBit(arr) {
  arr.sort((a,b)=>bit(a)-bit(b)||a-b)
  function bit(n){
    return n.toString(2).split(1).length-1
  }
}

//**          6            */

function recycle(array) {
  const obj = {'paper': [], 'glass': [], 'organic':[], 'plastic': []};
  for (let i of array) {
    obj[i.material].push(i.type);
    if (i.secondMaterial !== undefined){
      obj[i.secondMaterial].push(i.type)
    }
  }
  return [obj['paper'], obj['glass'], obj['organic'], obj['plastic']];
}

