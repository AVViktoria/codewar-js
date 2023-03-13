// 1****         Numbers and strings
//1   7 kyu https://www.codewars.com/kata/which-color-is-the-brightest
//2   7 kyu https://www.codewars.com/kata/disemvowel-trolls
//3   7 kyu https://www.codewars.com/kata/isograms
//4   7 kyu https://www.codewars.com/kata/digits-explosion
//5   6 kyu https://www.codewars.com/kata/handshake-problem
//6   6 kyu https://www.codewars.com/kata/duplicate-encoder
//7   6 kyu https://www.codewars.com/kata/n-th-fibonacci
//8   4 kyu https://www.codewars.com/kata/human-readable-duration-format

//**          1            */
function brightest(colors){
  let maxVal = 0
  let index 
  
  for (let i = 0; i < colors.length; i++){
      let color = colors[i]
      let r =  parseInt(color.slice(1,3),16);
      let g =  parseInt(color.slice(3,5),16)
      let b =  parseInt(color.slice(5,7),16)
      
      let val = Math.max(r,g,b)
      
      if (val > maxVal){
      maxVal = val;
      index = i
      }
  }
  return colors[index]
}
// console.log(brightest(["#001000", "#000000"]));
// console.log (brightest(["#ABCDEF", "#123456"]));

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

//**          2            */
function disemvowel(str) {

  const vowels = 'aeiou'.split('')
  const capVowels = 'AEIOU'.split('')
  str = str.split(' ')
  let ans = []
  
  for (let i = 0; i < str.length; i++){
      let filtered = str[i].split('').filter(a => !vowels.includes(a))
      let final = filtered.filter(a => !capVowels.includes(a)).join('')
      ans.push(final)
  }
  
  return ans.join(' ')

}


//**          3            */

function isIsogram(str){
  str = str.toLowerCase()
  let check = {}
  
  for (let i = 0; i < str.length; i++){
    let char = str[i]
    check[char] = check[char] + 1 || 1
    if ( check[char] > 1  ){ return false}
  }
  return true
}

//**          4            */

function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}
// const explode = s => [...s].map(number => number.repeat(number)).join('')
// module.exports = explode


// ["312", "333122"],
// ["102269", "12222666666999999999"],
// ["0", ""],
// ["000", ""],
// ["123", "122333"]


//**          5            */



function getParticipants(handshakes){
  let answer = 0,
      sum = 0
 if(!handshakes) {
   return 0;
 }

 while(handshakes > sum) {
   sum = answer * (answer + 1) / 2;
   answer++;
 }
 return answer;
}
// console.log((getParticipants(0), 0));
// console.log((getParticipants(1), 2));
//     assert.strictEqual(getParticipants(1), 2)
//     assert.strictEqual(getParticipants(3), 3)
//     assert.strictEqual(getParticipants(6), 4)
//     assert.strictEqual(getParticipants(7), 5)



//**          6            */



// console.log((duplicateEncode("din"),"((("));
//     console.log((duplicateEncode("recede"),"()()()"));
//     console.log((duplicateEncode("Success"),")())())","should ignore case"));
//     console.log((duplicateEncode("(( @"),"))(("));



//**          7            */


// console.log((nthFibo(1), 0,"1-st Fibo"));
//     console.log((nthFibo(2), 1,"2-nd Fibo"));
//     console.log((nthFibo(3), 1,"3-rd Fibo"));
//     console.log((nthFibo(4), 2,"4-th Fibo"));


//**          8            */


// console.log((formatDuration(1), "1 second"));
// console.log((formatDuration(62), "1 minute and 2 seconds"));
// console.log((formatDuration(120), "2 minutes"));
// console.log((formatDuration(3600), "1 hour"));
// console.log((formatDuration(3662), "1 hour, 1 minute and 2 seconds"));