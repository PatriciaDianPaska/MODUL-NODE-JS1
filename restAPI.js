//import modules 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}))
//mehod get
app.get('/', (req, res)=>{
    res.end("ini get XI RPL ");
});

//method post
app.post('/', (req, res)=>{
    res.end("ini post XI RPL ");
});

app.get('/siswa/:nama',(request, response)=>{
    let namaSiswa = request.params.nama;
    response.end("menampilkan nama siswa " + namaSiswa);
});

app.post('/siswa',(request,response)=>{
    let namaSiswa = request.body.name;
    let alamat = request.body.adress;
    response.end('menampilkan siswa baru'+ namaSiswa+', yang beralamat di' + alamat);
});

app.delete('/siswa/:id',(request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id'+ id + 'telah dihapus, dengan nama : ' +namaSiswa);
});

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id' + id + 'telah diupdate')
});

//inisialisasi port 
app.listen('8080', (e)=>{
    console.log(e);
});