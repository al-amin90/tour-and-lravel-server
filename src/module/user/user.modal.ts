import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'please provide your name'],
    minlength: 3,
    maxlength: 20,
  },
  age: { type: Number, required: [true, 'please provide your age'] },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: '{VALUE} is not a valid email',
    },
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} please a provide a valid role',
    },
    required: true,
    default: 'user',
  },
  userStatus: { type: String, enum: ['active', 'inactive'], required: true },
});

const UserModel = model<IUser>('User', userSchema);
export default UserModel;
