import  mongoose  from "mongoose";
const patientSchema = new mongoose.Schema({
  
    patientNumber: {
      type: Number,
      required: true,
    },

    name: {
        type: String,
        required: true,
      },

      age: {
        type: Number,
        required: true,
      },
  
    gender: {
      type: String,
      required: true,
    },
  
    city: {
        type: String,
        required: true,
    }
});

mongoose.model("Patient", patientSchema);