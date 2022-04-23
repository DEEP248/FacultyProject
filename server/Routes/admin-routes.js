const express = require('express');
const router = express.Router();
const multer = require('multer');
var bodyParser = require('body-parser');
const mongoTypes = require('mongoose').Types;
const Faculty = require('../Models/Faculty.js');
const Student = require('../Models/Student.js');
const Training = require('../Models/Training.js');

//faculty APIs

    //get all faculty
    router.get('/faculty', (req, res) => {
        Faculty.find((err, doc) => {
            if (err) {
                console.log('Error occures while fetching data.' + err);
                res.status(400).send('Internal error', err);
            } else {
                res.send(doc);
            }
        })
    })

    // add new faculty
    router.post('/faculty', (req, res) => {
        let newFaculty = new Faculty({
            facultyId : req.body.facultyId,
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password,
            department: req.body.department,
            gender : req.body.gender,
            adhar : req.body.adhar,
            birthday : req.body.birthday,
            joining_year : req.body.joining_year
        });

        newFaculty.save((err, doc) => {
            if (err) {
                console.log('Internal error : ', err);
                res.status(400).send('Internal Error :' + err);
            } else {
                res.send(doc);
            }
        })

    })

    //get faculty by id
    router.get('/faculty/:id', (req, res) => {
        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Faculty.findById(req.params.id, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })

    //delete faculty by id
    router.delete('/faculty/:id', (req, res) => {
        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Faculty.findByIdAndRemove(req.params.id, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })

    //update faculty 
    router.put('/faculty/:id', (req, res) => {

        let updateFaculty = {
            facultyId : req.body.facultyId,
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password,
            department: req.body.department,
            gender : req.body.gender,
            adhar : req.body.adhar,
            birthday : req.body.birthday,
            joining_year : req.body.joining_year
        };


        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Faculty.findByIdAndUpdate(req.params.id, { $set: updateFaculty }, { new: true }, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })



//Student APIs


    //get all students
    router.get('/student', (req, res) => {
        Student.find((err, doc) => {
            if (err) {
                console.log('Error occures while fetching data.' + err);
                res.status(400).send('Internal error', err);
            } else {
                res.send(doc);
            }
        })
    })

    // add new students
    router.post('/student', (req, res) => {
        let newStudents = new Student({
            studentId : req.body.studentId,
            studentName : req.body.studentName,
            fatherName : req.body.fatherName,
            studentEmail : req.body.studentEmail,
            gender : req.body.gender,
            studentMobile : req.body.studentMobile,
            adhar : req.body.adhar,
            department : req.body.department,
            birthday : req.body.birthday,
            passingYear : req.body.passingYear,
            parentMobile : req.body.parentMobile
        });

        newStudents.save((err, doc) => {
            if (err) {
                console.log('Internal error : ', err);
                res.status(400).send('Internal Error :' + err);
            } else {
                res.send(doc);
            }
        })

    })

    //get student by id
    router.get('/student/:id', (req, res) => {
        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Student.findById(req.params.id, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })

    //delete student by id
    router.delete('/student/:id', (req, res) => {
        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Student.findByIdAndRemove(req.params.id, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })

    //update student 
    router.put('/student/:id', (req, res) => {

        let updateStudent = {
            studentId : req.body.studentId,
            studentName : req.body.studentName,
            fatherName : req.body.fatherName,
            studentEmail : req.body.studentEmail,
            gender : req.body.gender,
            studentMobile : req.body.studentMobile,
            adhar : req.body.adhar,
            department : req.body.department,
            birthday : req.body.birthday,
            passingYear : req.body.passingYear,
            parentMobile : req.body.parentMobile
        };


        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Student.findByIdAndUpdate(req.params.id, { $set: updateStudent }, { new: true }, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })


    // Multer File upload settings
    const DIR = './public/';
    const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
    });

    // Multer Mime Type Validation
    var upload = multer({
        storage: storage,
        limits: {
        fileSize: 1024 * 1024 * 10
        },
        fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
        }
    });

    // Post Training
    router.post('/training', upload.single('image'), (req, res, next) => {
        const url = req.protocol + '://' + req.get('host');
        const data = JSON.parse(req.body.data);
        let training = new Training({
            titleOfTraining : data.titleOfTraining,
            orgInstName : data.orgInstName,
            unversityName : data.unversityName,
            city : data.city,
            state : data.state,
            country : data.country,
            pincode : data.pincode,
            academicYear : data.academicYear,
            startingDate : data.startingDate,
            endDate : data.endDate,
            recognizedBy : data.recognizedBy,
            mode : data.mode,
            fees :data.fees,
            fees_paid : data.fees_paid,
            sponsorship  : data.sponsorship,
            venue : data.venue,
            staff_id : data.staff_id,
            typeOfTraining : data.typeOfTraining,
            category : data.category,
            certificate : url + '/public/' + req.file.filename
        });

        training.save().then(result => {
        
        res.status(201).json({
            message: "Training added successfully!" })
        }).catch(err => {
        console.log(err),
            res.status(500).json({
            error: err
            });
        })
    })

    // Get all trainings
    router.get('/training',(req,res) => {
        Training.find((err, doc) => {
            if (err) {
                console.log('Error occures while fetching data.' + err);
                res.status(400).send('Internal error', err);
            } else {
                res.send(doc);
            }
        })
    })

    // Get all training of faculty
    router.get('/training/:id', (req, res) => {
        Training.find({staff_id: req.params.id}, (err,doc) => {
            if (err) {
                console.log('Internal error', err);
                res.status(400).send('Internal error', err);
            } else {
                res.send(doc);
            }
        })
    })

    
    // Delete training
    router.delete('/training/:id', (req, res) => {
        if (mongoTypes.ObjectId.isValid(req.params.id)) {
            Training.findByIdAndRemove(req.params.id, (err, doc) => {
                if (err) {
                    console.log('Internal error', err);
                    res.status(400).send('Internal error', err);
                } else {
                    res.send(doc);
                }
            })
        } else {
            res.status(400).send('No record found with id :', id);
        }
    })

module.exports = router;