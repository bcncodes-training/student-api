import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const chatSchema = new Schema({

  from: {
    type:String,
    required:true,
  },
  to: {
    type:String,
    required:true
  },
  message_body: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
  
);


export default chatSchema;