import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  unit: String
});

export default studentSchema;