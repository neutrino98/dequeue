import * as mongoose from 'mongoose'
import * as validator from 'validator'
<<<<<<< HEAD
=======
import { sha512 } from '../utils/sha512'
>>>>>>> api

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

const UserSchema = new Schema({
  name: {
    type: String,
<<<<<<< HEAD
    min: 2,
    max: 30
  },
  surname: {
    type: String,
    min: 2,
    max: 30
  },
  mobile: {
    type: String,
    validate: mobile => validator.isMobilePhone(mobile, 'any')
  },
  password: {
    type: String,
    min: 6,
    max: 100
  },
  email: {
    type: String,
    validate: login => validator.isEmail(login)
=======
    minlength: 2,
    maxlength: 30,
    required: true
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
>>>>>>> api
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
