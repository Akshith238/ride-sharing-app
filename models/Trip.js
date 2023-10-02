import { Schema,model,models } from "mongoose";

const TripSchema=new Schema({
  dropOff:{
    type: 'string',
  },
  pickUp:{
    type: 'string',
  },
  rideCategory:{
    type: 'string',
  },
  price:{
    type: 'number',
  },
  rideTimeStamp:{
    type: { type : Date, default: Date.now },
  },
  passenger:{
    type:Schema.Types.ObjectId,
    ref:'User',
  },
})

const Trip=models.Trip||model("Trip",TripSchema);

export default Trip;