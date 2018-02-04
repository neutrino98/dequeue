import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface Queue extends mongoose.Document {
  doctorId: string
  patientId: string
  from: string
  to: string
}

export const queueKeys = ['doctorId', 'patientId', 'timeOfRecording', 'from']

const QueueSchema = new Schema({
  doctorId: {
    type: String,
    required: true
  },
  patientId: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
