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
    set: from => (new Date(from)).toISOString(),
    get: from => (new Date(from)).toUTCString(),
    validate: from => moment(from, moment.ISO_8601).isValid(),
    required: true,
    default: Date.now
  },
  to: {
    type: String,
    set: to => (new Date(to)).toString(),
    get: to => (new Date(to)).toUTCString(),
    // validate: to => moment(to, moment.ISO_8601).isValid(),
    required: true
  },
  date: {
    type: String,
    set: date => (new Date(date)).toString(),
    get: date => (new Date(date)).toUTCString(),
    // validate: timeOfRecording => moment(timeOfRecording, moment.ISO_8601).isValid(),
    required: true
  },
  busy: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
