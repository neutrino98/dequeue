import * as mongoose from 'mongoose'
import * as validator from 'validator'
import { sha512 } from '../utils/sha512'

const Schema = mongoose.Schema

export enum Role {
  Student = 'Student',
  Doctor = 'Doctor',
  Admin = 'Admin'
}

export interface User extends mongoose.Document {
  name: string
  surname: string
  mobile: number
  password: string
  email: string
  role: Role
}

export const UserSchema = new Schema({
  name: {
    type: String,
    min: 2,
    max: 30
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  mobile: {
    type: String,
    validate: mobile => validator.isMobilePhone(mobile, 'any'),
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 100,
    required: true
  },
  email: {
    type: String,
    validate: email => validator.isEmail(email),
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ['Student', 'Doctor', 'Admin'],
    required: true
  }
})

UserSchema.pre('save', function (next) {
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<User>('User', UserSchema, 'user')
