//**  DONE!

//**  5****                  Objects
//1    7 kyu https://www.codewars.com/kata/my-language-skills
//2    6 kyu https://www.codewars.com/kata/run-length-encoding
//3    6 kyu https://www.codewars.com/kata/walk-the-object-path

//**          1            */
const myLanguages = (results) =>
  Object.entries(results)
    .filter(([name, points]) => points >= 60)
    .sort(([name1, points1], [name2, points2]) => points2 - points1)
    .map(([name, points]) => name);

//**          2            */

let runLengthEncoding = function (str) {
  let newArr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (symbol === str[i + 1]) {
      count++;
    } else {
      let letter = symbol;
      let howMuch = count;
      newArr.push([howMuch, letter]);
      count = 1;
    }
  }
  return newArr;
};

//**          3            */

function find(object, path) {
  path = path.split(/[.]/);
  for (i in path) {
    if (object.hasOwnProperty(path[i]) === true) {
      object = object[path[i]];
    } else {
      return undefined;
    }
  }
  return object;
}

// let name = 'Vasia'; name.length = 50;
// console.log(Math.pow(2,4))

// const RS = 'rs'; console.log('css', RS, 'js');

// let i = 0;
// let c = 0;
// const str = "Rolling Scopes School";
// while (i < str.length) {
//   if (str[i] === "o") {
//     c++;
//   }
//   i++;
// }
// console.log(c);
// let rs = 'true';
// console.log(typeof(rs))
// let a = 5; console.log(++a); console.log(a++);
// const showRS = () => arguments[0] + arguments[1]

// const showRS = (year, quarter) => year + quarter

// const showRS = (text = year + quarter) => text  RSSchool 2021

// const showRS = (year, quarter) => {return year + quarter} RSSchool 2021Q3

// const showRS = (year, quarter) => {return year, quarter} RSSchool Q3

// const max = (a, b) => (a == b ? a : b) 9

// const max = (a, b) => (a > b ? a : b) 9

// const max = (a, b) => (a + b > a - b ? a : b) 7

// const max = (a, b) => (a + b < a - b ? a : b) 9
// console.log(max(7,9))

// console.log(typeof('1' + 2))
// console.log('1' + 2)

// let a = "true";
// let b = "true";

// console.log(a || b);
// console.log(!a || b);
// console.log(a || !b);
// console.log(!a || !b);
// console.log(!(a || b));
// console.log(!(!a || !b));
// console.log('13' > 12)
// console.log('13px' > 12)
// console.log('13px' < '14')

// let first = 1; let second = 2;
// console.log(first, second)
// let first = 1; first = 2;
// console.log(first, second)
// let first = 1; let first = 2;
// console.log(first, second)
// const first = 1; first = 2;
// console.log(first, second)
// const first = 1, second = 2;
// console.log(first, second)
// console.log(typeof('Hey'))
// console.log(typeof(''))
// console.log(typeof('undefined'))
// console.log(typeof("Hello"))
// console.log(typeof(' '))
// console.log(typeof(" "))
// console.log(typeof("null"))
// console.log('\nHey!'[1])

// let a;
// console.log(a);



// console.log(typeof function(){})
// console.log(typeof('6' * '3'))
// console.log(true+'hello')




// function foo(a, b){
//   return a*b;
// }
// const bar = foo.bind(null, 2)
// console.log(bar(2))
// bar(2);

// console.log(typeof foo().bar)

// let f = function g() {return 23;};
// console.log(typeof g())

// for(var i=0; i<3; i++ ){
//   setTimeout(function(){
//     console.log(i)
//   }, 1000)
// }
// const a=5; const b=7;

// function foo(){
//   console.log((Function.getArgument (this)))
// }

function getThis(){
  return this;
}
 console.log(getThis())

// let name = "John";
// function printName(){
// //   console.log(name)
//   // let name = "Peter";
// console.log(name)
// }
// setTimeout(()=>{

//   let name = "Peter";
//   printName()
// }, 1000)
// printName()
// var user = {
// name: "Peter",
// printMessage(){
// console.log(`Hello, ${this.name}!`);
// }
// }
// var printMessage = user.printMessage;
// printMessage();
// "use strict";


// const details = {
//   name:'John!',

// }

// function getMessage(message){
//   return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Hello']));

// const foo = bar();
// const number = 2;
// function bar(){
//   return number;
// }

// console.log(message);
// var message = "Hello";