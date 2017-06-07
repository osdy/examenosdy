var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var datos={
           titulo:'Alumno',

           info:{NumeroCuenta:'0801199309018',Nombre:'Oscar Sady Gomez Ortiz', Correo:'osdi@hotmail.es'}
        };

  res.render('index', datos);
});


module.exports = router;
