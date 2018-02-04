import * as mongoose from 'mongoose'

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
    required: true,
    default: Date.now
  },
  to: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  busy: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
