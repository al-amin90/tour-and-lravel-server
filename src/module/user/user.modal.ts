import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    require: [true, 'please provide your name'],
  },
  age: { type: Number, required: [true, 'please provide your age'] },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not a valid email',
    },
    required: true,
    default: 'user',
  },
  userStatus: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

const UserModal = model<IUser>('User', userSchema);

export default UserModal;
