import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;


const studentSchema = new Schema({
  //_id: Schema.ObjectId,
  name: String,
  password: String,
  age: Number,
  projects:  [{type: Schema.ObjectId,ref:'Project' }]
});

/* studentSchema.pre('save', function() {
  this.name = this.name.toUpperCase();
  this.password = Buffer.from(this.password,'base64');
  //console.log(this.name)
});
 */


studentSchema.pre('save',function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

export default studentSchema;