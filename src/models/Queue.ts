import * as mongoose from 'mongoose'
import * as moment from 'moment'
import * as validator from 'validator'
import { UserSchema } from './User'

const Schema = mongoose.Schema

export interface Queue extends mongoose.Document {
  doctorId: string
  patientId: string
  timeOfRecording: any
  timeOfAppointment: any
}

export const queueKeys = ['doctorId', 'patientId', 'timeOfRecording', 'timeOfAppointment']

const QueueSchema = new Schema({
  doctorId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  patientId: {
    type: String,
    required: true
  },
  timeOfRecording: {
    type: String,
    set: timeOfRecording => (new Date(timeOfRecording)).toISOString(),
    get: timeOfRecording => (new Date(timeOfRecording)).toUTCString(),
    validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true,
    default: Date.now
  },
  timeOfAppointment: {
    type: String,
    set: timeOfRecording => (new Date(timeOfRecording)).toISOString(),
    get: timeOfRecording => (new Date(timeOfRecording)).toUTCString(),
    validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
