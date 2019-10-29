import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const studentSchema = new Schema({
  //_id: Schema.ObjectId,
  name: String,
  password: String,
  age: Number,
  projects:  [{type: Schema.ObjectId,ref:'Project' }]
});

studentSchema.pre('save', function() {
  this.name = this.name.toUpperCase();
  this.password = Buffer.from(this.password,'base64');
  //console.log(this.name)
});

export default studentSchema;