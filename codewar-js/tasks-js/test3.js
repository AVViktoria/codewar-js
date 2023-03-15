// 3****            Functions
//1    7 kyu https://www.codewars.com/kata/javascript-mathematician
//2    6 kyu https://www.codewars.com/kata/javascript-from-the-inside-number-1-map
//3    6 kyu https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter
//4    6 kyu https://www.codewars.com/kata/power-bind
//5    6 kyu https://www.codewars.com/kata/closures-and-scopes
//6    6 kyu https://www.codewars.com/kata/can-you-keep-a-secret


//**          1            */

const calculate=(...x)=>(...y)=> {
  return [].concat(x,y).reduce((a,b)=>a+b,0)
}

//**          2            */

Array.prototype.map = function (cb,context){
  const length = this.length
  const arr = new Array(length)
  for (let i=0;i<length;i++){
    if (i in this){
      arr[i]=cb.call(context,this[i],i,this)
    }
  }
  return arr
}

//**          3            */

Array.prototype.filter = function (f, receiver) {
  let len = this.length;
  let acc = [];
  for (let i = 0; i < len; i++) {
      if (i in this && f.call(receiver, this[i], i, this)) {
          acc.push(this[i]);
      }
  }
  return acc;
};


//**          4            */



//**          5            */

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

//**          6            */