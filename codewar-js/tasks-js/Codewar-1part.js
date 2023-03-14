//***                 Практика */ 

//1     8 kyu https://www.codewars.com/kata/function-1-hello-world
//2     8 kyu https://www.codewars.com/kata/quarter-of-the-year
//3     8 kyu https://www.codewars.com/kata/capitalization-and-mutability
//4     8 kyu https://www.codewars.com/kata/century-from-year
//5     8 kyu https://www.codewars.com/kata/convert-a-number-to-a-string
//6     8 kyu https://www.codewars.com/kata/convert-a-string-to-a-number
//7     8 kyu https://www.codewars.com/kata/convert-to-binary
//8     8 kyu https://www.codewars.com/kata/even-or-odd
//9     8 kyu https://www.codewars.com/kata/fake-binary/javascript
//10    7 kyu https://www.codewars.com/kata/largest-square-inside-a-circle
//11    7 kyu https://www.codewars.com/kata/number-of-decimal-digits
//12    8 kyu https://www.codewars.com/kata/opposite-number
//13    7 kyu https://www.codewars.com/kata/perimeter-sequence
//14    8 kyu https://www.codewars.com/kata/remove-first-and-last-character
//15    8 kyu https://www.codewars.com/kata/remove-string-spaces
//16    7 kyu https://www.codewars.com/kata/string-ends-with
//17    8 kyu https://www.codewars.com/kata/simple-multiplication
//18    8 kyu https://www.codewars.com/kata/string-repeat
//19    8 kyu https://www.codewars.com/kata/students-final-grade
//20    8 kyu https://www.codewars.com/kata/switch-it-up
//21    8 kyu https://www.codewars.com/kata/thinkful-logic-drills-traffic-light
//22    8 kyu https://www.codewars.com/kata/third-angle-of-a-triangle
//23    8 kyu https://www.codewars.com/kata/transportation-on-vacation
//24    8 kyu https://www.codewars.com/kata/type-of-sum
//25    8 kyu https://www.codewars.com/kata/will-you-make-it

//**          1            */


function greet() {
  return "hello world!";
  }


//**          2            */
const quarterOf = (month) => {
  // Your code here
  return Math.ceil(month / 3);
}


//**          3            */
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}


//**          4            */

function century(year) {
  // Finish this :)
  return Math.ceil(year/100);
}

//**          5            */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}


//**          6            */

var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

var stringToNumber = function(str){
  return parseInt(str);
}

//**          7            */

toBinary = (n) => +n.toString(2);

//**          8            */
function evenOrOdd(number) {
  if (number%2 === 0){
     return "Even"
  }
 
  else return "Odd"
  
}

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}


//**          9            */

function fakeBin(x){ 
  return x.split("").map(y => y < 5 ? 0 : 1 ).join('');
  }

//**          10            */

const areaLargestSquare = (r) => r*r*2;

//**          11            */

//   let a = sq**0.5
//   let r2 = (a/2)**2
//   return  Math.PI*r2

//**          12            */

return (''+n).length

//**          13            */

function perimeterSequence(a,n) {
  return a*n*4
 }

//**          14            */

function removeChar(str) {
  return str.slice(1, -1);
}

//**          15            */

function noSpace(x){
  return x.split(' ').join("")
  }

//**          16            */

function solution(str, ending){

  return str.endsWith(ending)
 }


 return str.substr(-ending.length) == ending;

//**          17            */

function simpleMultiplication(number) {
  // your code........
if (number % 2 === 0){
  return number*8
}else return number*9
}


return n * (n % 2 ? 9 : 8);

//**          18            */
function repeatStr (n, s) {
  return s.repeat(n);
 }

 function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }

//**          19            */

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0;
}

//**          20            */

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

function switchItUp(number) {
  switch (number) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
  }
}

//**          21            */

function updateLight(current) {
 
  switch (current) {
    case "green": return 'yellow';
    case "yellow": return 'red';
    case "red": return "green";
   
  }
}

return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

//**          22            */

function otherAngle(a, b) {
  return (180-a-b)
}

//**          23            */

function rentalCarCost(d) {
  // Your solution here
  if(d>=7){
    return d*40-50
  }
  if(d>=3){
   return  d*40-20
  }
return d*40
}

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
//**          24            */

function typeOfSum(a, b) {
  return typeof(a + b);
 }

//**          25            */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft >= distanceToPump;
};