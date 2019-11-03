import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;


const userSchema = new Schema({

  name: String,
  password: String

});

userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);

    return next();

  } catch (error) {
    return next(error);
  }
});

//TO-DO Construir el token usando un middleware post de save y de findById(id)

export default userSchema;