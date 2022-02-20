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
    console.log(`connected to the mongodb database`);
    log.info(`connected to the mongodb`);
  })
  .catch((err) => {
    console.log(err.message);
    log.err(err.message)
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
  const dName = req.params.name;
  Doctors.find({name:dName}, function (err, docs) {
          res.json(docs);
          log.info(`searched the doctor by name`);
      
  });
});


// GET doctors by its speciality
app.get('/doctors/search/speciality/:speciality', (req, res,) => {
  console.log(req.params.speciality);
  const dSpeciality = req.params.speciality;
  Doctors.find({speciality:dSpeciality}, function (err, docs) {
    console.log(docs);
          res.json(docs);
          log.info(`searched a doctors by its speciality`);
      
  });
});


// POST a new doctor
app.post('/doctors/add/', (req, res,) => {
  Doctors.create(req.body).then((ans) => {
    console.log("New Doctor Inserted")
    res.status(200).send({msg:"New doctor added successfully"});
    log.info(`a new doctor is added to the database`) 
  }).catch((err) => {
    console.log(err.Message);   
    
  });
});


// DELETE a doctor
app.get('/doctors/delete/:name', (req, res,) => {
  Doctors.deleteOne({name:req.params.name}).then((ans) => {
    console.log("one doctor deleted")
    res.status(200).send({msg:"Doctor removed successfully"});
    log.info(`doctor deleted by its name`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({msg:"Doctor doesn't exist to remove"});
  
  });
});

// DELETE a doctor by its ID
app.post('/doctors/delete/:id', (req, res,) => {
  Doctors.findByIdAndDelete(req.params.id).then((ans) => {
    console.log("one doctor deleted")
    res.status(200).send({msg:"Doctor removed successfully"});
    log.info(`doctor deleted by its ID`)
  }).catch((err) => {
    console.log(err.Message);
    res.status(400).send({msg:"Doctor with the id doesn't exist"});
  
  });
});


// EDIT a new doctor by its ID
app.post('/doctors/edit/:id', (req, res,) => {
  // console.log(req.body);
  Doctors.findByIdAndUpdate(req.params.id,req.body).then((ans) => {
    console.log("one Doctor details updated")
    log.info(`doctor info is updated`)
    res.status(200).send({msg:" doctor updated successfully"});
  }).catch((err) => {
    console.log(err);    
  });
});


export default app;
