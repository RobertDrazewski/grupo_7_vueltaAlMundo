const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.listen(port, console.log("Corriendo en puerto 3000..."));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
});

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

app.get('/producto',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productDetail.html'))
});

app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productCart.html'))
});
app.get('/gracias',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/gracias.html'))
});
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
});

/*INDEX MAIN*/

app.get('/nosotros',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/quienesSomos.html'))
});