import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import '../models/Doctor.js'
import '../models/Appointment.js';
import '../models/Patient.js';
import '../models/PatientHistory.js';
import '../models/Speciality.js';
import '../models/TimeSlot.js';

// adding logger to log every activity

import  SimpleNodeLogger from 'simple-node-logger';
        const opts = {
                logFilePath:'mylogfile.log',
                timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
        };
const log = SimpleNodeLogger.createSimpleLogger( opts );






const connectionStr = `mongodb://localhost:27017/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    log.info(`connected to the mongodb`);
  })
  .catch((err) => {
    log.error(err.message)
  });

  var app = express();

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Doctors = mongoose.model("Doctor");
app.get('/', (req, res) => {
  res.send(`<h1 style="text-align:center">WELCOME TO THE CLINIC MANAGEMENT SYSTEM</h1>`);
});

// GET all the doctors
app.get('/doctors/search', (req, res) => {
  Doctors.find({}, function (err, docs) {
          res.json(docs);
          log.info(`searched for all the doctors`);
      
  });
});


// GET doctors by name
app.get('/doctors/search/name/:name', (req, res,) => {
  log.info(`obtain request for searching a doctor by its name ${req.params.name}`)
  const dName = req.params.name;
  Doctors.find({name:dName}, function (err, docs) {
          res.json(docs);
      
  });
});


// GET doctors by its speciality
app.get('/doctors/search/speciality/:speciality', (req, res,) => {
  log.info(`obtain request for searching a doctor by its speciality ${req.params.speciality}`)
  const dSpeciality = req.params.speciality;
  Doctors.find({speciality:dSpeciality}, function (err, docs) {
    console.log(docs);
          res.json(docs);
      
  });
});


// POST a new doctor
app.post('/doctors/add/', (req, res,) => {
  log.info(`obtain request for adding a doctor ${req.body.name}`)
  Doctors.create(req.body).then((doc) => {
    res.status(200).send({msg:"New doctor added successfully"});
    log.info(`a new doctor is added to the database with ID ${doc._id}`) 
  }).catch((err) => {
    log.error(err);
    
  });
});


// DELETE a doctor
app.get('/doctors/delete/:doctorNumber', (req, res,) => {
  log.info(`obtain request for deleting a doctor ${req.params.doctorNumber}`)
  Doctors.deleteOne({doctorNumber:req.params.doctorNumber}).then((ans) => {
    log.info("one doctor deleted")
    res.status(200).send({msg:"Doctor removed successfully"});
    log.info(`doctor deleted by its name`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({msg:"Doctor doesn't exist to remove"});
  
  });
});

// DELETE a doctor by its ID
app.post('/doctors/delete/:id', (req, res,) => {
  log.info(`obtain request for deleting a doctor by its ID ${req.params.id}`)
  Doctors.findByIdAndDelete(req.params.id).then((doc) => {
    log.info("one doctor deleted")
    res.status(200).send({msg:"Doctor removed successfully"});
    log.info(`one doctor is deleted to the database with ID ${doc._id}`) 
    log.info(`doctor deleted by its ID`)
  }).catch((err) => {
    log.error(err)
    res.status(400).send({msg:"Doctor with the id doesn't exist"});
  
  });
});


// EDIT a new doctor by its ID
app.post('/doctors/edit/:id', (req, res,) => {
  log.info(`obtain request for deleting a doctor by its ID ${req.body}`)
  Doctors.findByIdAndUpdate(req.params.id,req.body).then((doc) => {
    log.info(`doctor info is updated`)
    res.status(200).send({msg:" doctor updated successfully"});
    log.info(`one doctor info is updated to the database with ID ${doc._id}`) 
  }).catch((err) => {
    log.error(err);    
  });
});


export default app;
