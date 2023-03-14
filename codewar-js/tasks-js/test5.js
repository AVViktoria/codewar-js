//**  DONE!


//**  5****                  Objects
//1    7 kyu https://www.codewars.com/kata/my-language-skills
//2    6 kyu https://www.codewars.com/kata/run-length-encoding
//3    6 kyu https://www.codewars.com/kata/walk-the-object-path

//**          1            */
const myLanguages = results => Object.entries(results)
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
  for (i in path ){
    if(object.hasOwnProperty(path[i]) === true ){
       object = object[path[i]]
       }else {return undefined;}
  }return object
}