// include http module in the file
let http = require('http');

// create a server listening on 8087
http.createServer(function(req, res) {
    // write the response and send it to the client
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('node.js already to use!');
    res.end();
}).listen(8087);

// Tugas membuat module biodata menggunakan node.js
exports.nama = function(nama){
    return nama;
};

exports.tempat_lahir = function(tempat_lahir){
    return tempat_lahir;
};

exports.tanggal_lahir = function(tanggal_lahir){
    return tanggal_lahir;
};

exports.alamat = function(alamat){
    return alamat;
};
let nama = "Muhammad Ryan Handhika Susanto";
let tempat_lahir = "Jakarta Barat";
let tanggal_lahir = "19 januari 2006";
let alamat = "Perum pondok cikampek";

console.log(`Nama : ${nama}`);
console.log(`Tempat Lahir : ${tempat_lahir}`);
console.log(`Tanggal Lahir : ${tanggal_lahir}`);
console.log(`Alamat : ${alamat}`);
