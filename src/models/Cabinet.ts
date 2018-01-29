import * as mongoose from 'mongoose'
import { DoctorSchema } from '../models/Doctor'

const Schema = mongoose.Schema

interface Cabinet extends mongoose.Document {
  doctorId: Object,
  maxTimeOfAppointment: Number,
  minTimeOfAppointment: Number
}

export const CabinetSchema = new Schema({
  doctor: {
    type: DoctorSchema,
    required: true
  },
  maxTimeOfAppointment: {
    type: Number,
    required: true
  },
  minTimeOfAppointment: {
    type: Number,
    required: true
  }
})

export default mongoose.model<Cabinet>('Cabinet', CabinetSchema, 'cabinet')
