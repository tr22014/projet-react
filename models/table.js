const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  table_id :{type: Number,required: true},
  table_number:{type: Number , required: true , unique: true},
  table_capacity:{type: Number , required: true},
  table_menu:{type: String , required: true},
  
});

module.exports = mongoose.model('Tbl', tableSchema);
