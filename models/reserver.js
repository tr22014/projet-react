const mongoose = require('mongoose');

const reserverSchema = new mongoose.Schema({
  client_id:{type: Number, required: true, ref:'Clnt'},
  reservation_number:{type:Number , required:true , unique:true, ref:'Reservation'},
},{_id: false});

module.exports = mongoose.model('Reserver', reserverSchema);
