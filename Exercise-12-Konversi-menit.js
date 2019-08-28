function konversiMenit(input) {
    var menit = Math.floor(input/60);
    var detik = Math.floor(input % 60);
    if(detik < 10){
        var display = `${menit}:0${detik}`;
        return display;
    }else {
        var display = `${menit}:${detik}`;
        return display;
    }
}
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00