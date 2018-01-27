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

const UserSchema = new Schema({
  name: {
    type: String,
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
    type: String
  },
  email: {
    type: String,
    validate: email => validator.isEmail(email)
  },
  role: {
    type: String,
    enum: ['Student', 'Doctor', 'Admin']
  }
})

UserSchema.pre('save', function (next) {
  if (this.password.length < 6 || this.password.length > 30) {
    let err = new Error('Password must be longer than 6 symbols and shorter than 30 symbols')
    next(err)
  }
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<User>('User', UserSchema, 'user')
