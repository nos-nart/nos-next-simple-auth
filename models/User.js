import mongoose from 'mongoose';

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

export default mongoose.models.User || mongoose.model('User', UserSchema);
