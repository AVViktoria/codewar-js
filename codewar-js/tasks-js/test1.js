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
  // console.log(colors[index])
}
console.log(brightest(["#001000", "#000000"]));
brightest(["#ABCDEF", "#123456"]);
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
