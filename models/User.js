import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');

const SALT_ROUND = 10;

const UserSchema = new mongoose.Schema(
  {
    name: {
      required: [true, 'Please provide a name'],
      type: String
    },
    email: {
      required: [true, 'Please provide email'],
      type: String
    },
    password: String
  },
  {
    timestamps: true
  }
)

UserSchema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password')) {
    bcrypt.hash(user.password, SALT_ROUND, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      return next();
    })
  } else {
    next();
  }
})

UserSchema.statics.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}

export default mongoose.models.User || mongoose.model('User', UserSchema);
