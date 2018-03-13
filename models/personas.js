
var mongoose = require('mongoose');

var personaSchema = new mongoose.Schema({

	nombre:String,
	apellido:String,
	telefono:String,
	email:String,
	fecha_nacimiento:{type:Date, default:Date.now}


});


mongoose.model('personas', personaSchema);


