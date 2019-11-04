import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
 // _id: Schema.Types.ObjectId,
  title: String,
  unit: String
});

export default projectSchema;