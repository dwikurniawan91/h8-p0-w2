var hari = 1;
var bulan = 1;
var tahun = 2018;

switch (true) {
    case ((hari === 12) && (bulan === 12) && tahun === 2019):
        console.log(`${hari} Desember ${tahun}`);
        break;
    case ((hari === 1) && (bulan === 1) && tahun === 2018):
            console.log(`${hari} Januari ${tahun}`);
            break;
    case ((hari === 20) && (bulan === 12) && tahun === 2011):
        console.log(`${hari} Desember ${tahun}`);
        break;
    case ((hari === 3) && (bulan === 8) && tahun === 2018):
            console.log(`${hari} Agustus ${tahun}`);
            break;
    default:
        console.log('Masukkan tanggal, bulan dan tahun');     
}
