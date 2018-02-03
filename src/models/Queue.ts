import * as mongoose from 'mongoose'
import * as moment from 'moment'

const Schema = mongoose.Schema

export interface Queue extends mongoose.Document {
  doctorId: string
  patientId: string
  from: string
  to: string
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
  from: {
    type: String,
    set: timeOfRecording => (new Date(timeOfRecording)).toISOString(),
    get: timeOfRecording => (new Date(timeOfRecording)).toUTCString(),
    validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true,
    default: Date.now
  },
  to: {
    type: String,
    set: timeOfRecording => (new Date(timeOfRecording)).toISOString(),
    get: timeOfRecording => (new Date(timeOfRecording)).toUTCString(),
    validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true
  },
  date: {
    type: String,
    set: timeOfRecording => (new Date(timeOfRecording)).toISOString(),
    get: timeOfRecording => (new Date(timeOfRecording)).toUTCString(),
    validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true
  },
  busy: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
