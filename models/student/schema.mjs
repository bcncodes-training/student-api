import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  unit: String
});
const studentSchema = new Schema({
  name: String,
  age: Number,
  projects:  [projectSchema]
});

export default studentSchema;