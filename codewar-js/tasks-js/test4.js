//**  DONE!

//**    4****             Date and time
//1    7 kyu https://www.codewars.com/kata/the-coupon-code
//2    7 kyu https://www.codewars.com/kata/unlucky-days
//3    6 kyu https://www.codewars.com/kata/angle-between-clock-hands

//**          1            */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)}

//**          2            */

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

//**          3            */

function handAngle (date) {
  let m = date.getMinutes()
  let h = date.getHours()
  if (m!==0){
    h=(m/60)+h
  }
  let degree =  Math.abs(h*30-m*6)
  let degree2 = Math.toRadians(360-degree)
  return Math.min(Math.toRadians(degree),degree2)
}
Math.toRadians = function(degrees) {
  return degrees / (180 / Math.PI);
};