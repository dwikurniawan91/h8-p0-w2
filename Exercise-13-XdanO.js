function xo(str){
  var counterX = 0;
  var counterO = 0; 
  var cek = 0;
  while (cek < str.length) {
    if(str[cek] === 'x'){
      counterX++;
    }else{
      counterO++;
    }
      cek++;
    }
  if(counterX == counterO){
    return true
  }else{
    return false
  }
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true