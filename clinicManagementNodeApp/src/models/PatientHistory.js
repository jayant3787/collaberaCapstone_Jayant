import  mongoose  from "mongoose";
const historySchema = new mongoose.Schema({
  
    year: {
      type: Number,
      required: true,
    },

    month: {
        type: String,
        required: true,
      },
  
    patientNumber: {
      type: Number,
      required: true,
    },
  
    description: {
        type: String,
        required: true,
    }
});

mongoose.model("PatientHistory", historySchema);