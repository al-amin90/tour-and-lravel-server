import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: { type: Number, required: [true, 'please provide your age'] },
  email: {
    type: String,
    required: [true, 'please provide your email'],
  },
  photo: String,
  role: {
    type: String,
    required: true,
  },
  userStatus: { type: String, required: true },
});

const UserModal = model('User', userSchema);

export default UserModal;
