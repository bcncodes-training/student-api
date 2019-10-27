import mongoose from 'mongoose';
import ProjectSchema from './schema.mjs';


export default  mongoose.model("Project", ProjectSchema);
