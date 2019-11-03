import mongoose from 'mongoose';
import UserSchema from './schema.mjs';

export default mongoose.model("User", UserSchema);
//export const  Project = mongoose.model("Project", ProjectSchema);
