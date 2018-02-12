var mongoose = require('mongoose');

var wellSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   id: Number,
   uwi: Number,
   long: Number,
   lat: Number,
   lease: String,
   operator: String,
   fake_number: Number

});

var well = mongoose.model('well', wellSchema);

module.exports = well;