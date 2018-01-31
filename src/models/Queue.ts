import * as mongoose from 'mongoose'
import { UserSchema } from '../models/User'

const Schema = mongoose.Schema

interface Queue extends mongoose.Document {
  doctor: Object,
  user: Object,
  timeOfRecording: any,
  timeOfAppointment: any
}

const QueueSchema = new Schema({
  doctor: {
    type: UserSchema,
    required: true
  },
  user: {
    type: UserSchema,
    required: true
  },
  timeOfRecording: {
    type: Schema.Types.Date,
    required: true
  },
  timeOfAppointment: {
    type: Schema.Types.Date,
    required: true
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
