import * as mongoose from 'mongoose'
import { UserSchema } from '../models/User'
import { DoctorSchema } from '../models/Doctor'

const Schema = mongoose.Schema

interface Queue extends mongoose.Document {
  doctor: Object,
  patient: Object,
  timeOfRecording: any,
  timeOfAppointment: any,
}

const QueueSchema = new Schema({
  doctor: {
    type: DoctorSchema,
    required: true
  },
  patient: {
    type: UserSchema || DoctorSchema,
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
