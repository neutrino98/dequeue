import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

interface User extends mongoose.Document {
  name: string
  surname: string
  mobile: number
  login: string
  password: string
  email: string
  role: string
}

const UserSchema = new Schema({
  name: String,
  surname: String,
  mobile: Number,
  login: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['Student', 'Doctor', 'Admin']
  }
})

export default mongoose.model<User>('User', UserSchema, 'user')
