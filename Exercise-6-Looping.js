// 1.
console.log('LOOP PERTAMA');
var i = 2;
while (i<=20) {
    
    console.log(i + ' - I love coding');
    i += 2;
}

console.log('LOOP KEDUA');

var j = 20;
while (j>1) {
    console.log(j + ' -  I will become fullstack developer');
    j -= 2;
}


// 2.
console.log('LOOP PERTAMA');

for(var i=1; i<=20; i++){
  console.log(i + ' - I love coding')
}

console.log('LOOP KEDUA');

for(var i=20; i>0; i--){
  console.log(i + ' - I love coding')
}




// 3.

for (let k = 1; k <= 100 ; k++) {
  if ( k % 2 === 0) {
    console.log(k +' GENAP');
  }else{
    console.log(k +' GANJIL');
  }
}


console.log('Counter sekarang 3');
for (let m = 1; m <= 100; m+=2) {
    if (m % 3 === 0) {
      console.log(m + ' KELIPATAN 3');
    }else
    console.log('');
  }


for (let n = 1; n <= 100; n+=5) {
    if (n % 6 === 0) {
      console.log(n + ' KELIPATAN 6');
    }else
    console.log('');
  }


  console.log('Counter sekarang ');
  for (let n = 1; n <= 100; n+=9) {
    if (n % 10 === 0) {
      console.log(n + ' KELIPATAN 10');
    }else
    console.log('');
  }


