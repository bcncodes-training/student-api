import mongoose from 'mongoose';
import StudentSchema from './schema.mjs';

export default  mongoose.model("Student", StudentSchema);
//export const  Project = mongoose.model("Project", ProjectSchema);
