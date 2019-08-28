console.log('No. 1');

function shoutOut(halo) {
    return halo = 'Halo function!';
}
console.log(shoutOut());


console.log('No. 2');
function calculateMultiply(num1,num2){
    return num1*num2;
}
var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);


console.log('No. 3');
function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

var fullSentence = processSentence('Agus', 30, 'jl. malioboro, jogjakarta','gaming');
console.log(fullSentence);
