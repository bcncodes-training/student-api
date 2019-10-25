import mongoose from 'mongoose';
import ProjectSchema from './schema.mjs';


export const  Project = mongoose.model("Project", ProjectSchema);
