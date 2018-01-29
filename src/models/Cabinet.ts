import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

interface Cabinet extends mongoose.Document {
 // doctorId: Schema.Types.ObjectId,
  maxTimeOfAppointment: Number,
  minTimeOfAppointment: Number
}

const CabinetSchema = new Schema({
 // doctorId: Schema.Types.ObjectId,
  maxTimeOfAppointment: Number,
  minTimeOfAppointment: Number
})

export default mongoose.model<Cabinet>('Cabinet', CabinetSchema, 'cabinet')
