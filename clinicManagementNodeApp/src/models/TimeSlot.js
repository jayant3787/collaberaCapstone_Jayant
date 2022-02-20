import  mongoose  from "mongoose";
const slotSchema = new mongoose.Schema({
  
    timeSlot: {
      type: String,
      required: true,
    }
});

mongoose.model("TimeSlot", slotSchema);