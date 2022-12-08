const express = require('express');
const path = require('path');
const app = express();
const port = 3000
app.listen(port);
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/registro.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

app.get('/producto',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/producto.html'))
});

app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/carrito.html'))
});
app.get('/gracias',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/gracias.html'))
});
