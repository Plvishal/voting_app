import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide valid name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide valid email id'],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Please provide a valid phone number'],
  },
  password: {
    type: String,
    required: [true, 'Please provide valid password'],
    unique: true,
  },
});

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
