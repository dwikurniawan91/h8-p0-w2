var nama = '';
var peran = 'Tabib';

if (nama === '' && peran === '') {
    console.log('Nama dan peran harus  diisi!');
}else if (nama === '' && peran === peran){
    console.log(`Nama harus diisi!`);
}else if (nama === nama && peran === ''){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}else{
    
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    if(peran === 'Ksatria') {
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }else if (peran === 'Tabib') {
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if (peran === 'Penyihir') {
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
}