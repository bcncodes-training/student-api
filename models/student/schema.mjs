import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const studentSchema = new Schema({
  //_id: Schema.ObjectId,
  name: String,
  age: Number,
  projects:  [{type: Schema.ObjectId,ref:'Project' }]
});


export default studentSchema;