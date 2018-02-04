import * as mongoose from 'mongoose'
import Date =

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
    // set: str => moment(str, 'hh:mm'),
    // get: time => moment(time).format('hh:mm'),
    required: true,
    default: Date.now
  },
  to: {
    type: String,
    // set: str => moment(str, 'hh:mm'),
    // get: time => (time).format('hh:mm'),
    required: true
  },
  date: {
    type: String,
    // set: str => moment(str, 'YYYY-MM-DD hh:mm'),
    // get: date => moment(date).format('YYYY-MM-DD hh:mm'),
    required: true
  },
  busy: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
