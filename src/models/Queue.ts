import * as mongoose from 'mongoose'
import { UserSchema } from './User'

const Schema = mongoose.Schema

export interface Queue extends mongoose.Document {
  doctor: Object
  patient: Object
  timeOfRecording: any
  timeOfAppointment: any
}

export const queueKeys = ['doctor', 'patient', 'timeOfRecording', 'timeOfAppointment']

const QueueSchema = new Schema({
  doctor: {
    type: UserSchema,
    required: true
  },
  patient: {
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
