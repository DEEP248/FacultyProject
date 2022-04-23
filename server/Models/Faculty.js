const mongoose = require('mongoose');

const Faculty = mongoose.model('Faculty', {
    facultyId : {type : Number},
    name : {type : String},
    mobile : {type : String},
    email : {type : String},
    password : {type : String},
    department : {type : String},
    gender : {type: String},
    adhar : {type : String},
    birthday : {type : String},
    joining_year : {type : Number}
});

module.exports = Faculty;
