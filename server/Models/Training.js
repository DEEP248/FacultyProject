const mongoose = require('mongoose');

const Training = mongoose.model('Training', {
  titleOfTraining : {type : String},
  orgInstName : {type : String},
  unversityName : {type : String},
  city : {type : String},
  state : {type : String},
  country : {type : String},
  pincode : {type : Number},
  academicYear : {type : String},
  startingDate : {type : String},
  endDate : {type : String},
  recognizedBy : {type : String},
  mode : {type : String},
  fees :{type : Number},
  fees_paid : {type : Number},
  sponsorship  : {type : String},
  venue : {type : String},
  staff_id : {type : String},
  typeOfTraining : {type : String},
  category : {type : String},
  certificate : {type : String}

});

module.exports = Training;