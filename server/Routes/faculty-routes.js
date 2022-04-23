const express = require('express');
const router = express.Router();

const Faculty = require('../Models/Faculty.js');

// Auth APIs

    // login
    router.post('/auth', (req, res) => {
         Faculty.find({email: req.body.username}, (err,doc) => {
            if (err) {
                console.log('Login failed', err);
                res.status(400).send('Login failed', err);
            } else {
                res.send(doc);
            }
        });
    })

// Other APIs

    //get faculty by id
    router.get('/:id', (req, res) => {
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

    //update faculty 
    router.put('/:id', (req, res) => {

        let updateFaculty = {
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password,
            department: req.body.department
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


module.exports = router;