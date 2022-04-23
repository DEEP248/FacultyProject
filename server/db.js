const mongoose = require('mongoose');
var dbUrl = "mongodb+srv://devbots:devbots@facultymanagement.dkwto.mongodb.net/FacultyManagement?retryWrites=true&w=majority"
mongoose.connect(dbUrl, (err)=> {
    if(err) {
        console.log('Conection has ended with error '+ err);
    } else {
        console.log('Connection is successful');
    }
});

module.exports = mongoose;