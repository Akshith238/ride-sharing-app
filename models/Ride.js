import { Schema,model,models } from "mongoose";

const RideSchema=new Schema({
      orderId:{
        type: 'number',
      },
      title:{
        type: 'string',
      },
      priceMuliplier:{
        type: 'number',
      },
      icon:{
        type: 'string',
      },     
})

const Ride=models.Ride||model("Ride",RideSchema);

export default Ride;