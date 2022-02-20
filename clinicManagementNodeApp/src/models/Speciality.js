import  mongoose  from "mongoose";
const specialitySchema = new mongoose.Schema({
  
    Speciality: {
      type: String,
      required: true,
    }
});

mongoose.model("Speciality", specialitySchema);