var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connection.openUri('mongodb://localhost:27017/base_de_datos', (err, res) => {
    if (err) throw err;
    console.log('Base de datos conectada');
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});


app.listen(8080, () => {
    console.log('Ejecutando Backend-Alcaldía en el puerto 8080: ONLINE');
});