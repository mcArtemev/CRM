import { Schema, model } from 'mongoose';


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  gender: {
    type: Boolean,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createOn: {
    type: Date,
    required: true,
    default: () => new Date(Date.now()).toUTCString()
  },
  birthday: {
    type: Date
    // required: true
  }
});

export default model('User', userSchema);
