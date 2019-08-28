



console.log('No 1');
function soal1 (banyak) {
    for (var k = 1; k <= banyak ; k++) {
        console.log('*');
    }
}
soal1(5);

console.log('No 2');
function soal2 (height) {
    for (var m = 1; m <= height; m++) {
      var str = '';
    for (var n = 1; n <= height; n++) {
        str += '*';
    }
console.log(str);
    }
}
soal2(5);



console.log('No 3');
function soal3 (height) {
    for (var i = 1; i <= height; i++) {
    var row = '';// 
    for (var j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
    }
}
soal3(5);