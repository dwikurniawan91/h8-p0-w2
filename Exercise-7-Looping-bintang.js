



console.log('No 1');
function soal1 (height1) {
    for (var k = 1; k <= height1 ; k++) {
        console.log('*');
    }
}
soal1(5);

console.log('No 2');
function soal2 (height2) {
    for (var m = 1; m <= height2; m++) {
      var str = '';
    for (var n = 1; n <= height2; n++) {
        str += '*';
    }
console.log(str);
    }
}
soal2(6);



console.log('No 3');
function soal3 (height3) {
    for (var i = 1; i <= height3; i++) {
    var row = '';// 
    for (var j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
    }
}
soal3(10);