const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  reservation_id:{type:Number , required:true , unique:true},
  date:{type: String , required:true},
  Time:{type:String , required:true},
  nbr_prsn:{type:Number , required:true},
  table_id :{type: Number,required: true,ref:'Tbl'}  
});

module.exports = mongoose.model('Reservation', reservationSchema);
