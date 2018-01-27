import * as mongoose from 'mongoose'
import * as validator from 'validator'

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
    type: String,
    min: 6,
    max: 100
  },
  email: {
    type: String,
    validate: login => validator.isEmail(login)
  },
  role: {
    type: String,
    enum: ['Student', 'Doctor', 'Admin']
  }
})

export default mongoose.model<User>('User', UserSchema, 'user')
