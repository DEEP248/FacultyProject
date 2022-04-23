const mongoose = require('mongoose');

const Student = mongoose.model('Student', {
    studentId : {type : Number},
    studentName : {type : String},
    fatherName : {type : String},
    studentEmail : {type : String},
    gender : {type : String},
    studentMobile : {type : String},
    adhar : {type : String},
    department : {type : String},
    birthday : {type : String},
    passingYear : {type : Number},
    parentMobile : {type : String},
    avatar : {type : String}
});

module.exports = Student;