
import * as mongoose from 'mongoose'
import { UserSchema } from '../models/User'
import { CabinetSchema } from '../models/Cabinet'

const Schema = mongoose.Schema

interface Dequeue extends mongoose.Document {
  cabinet: Object,
  user: Object,
  timeOfRecording: any,
  timeOfAppointment: any
}

const DequeueSchema = new Schema({
  cabinet: {
    type: CabinetSchema,
    required: true
  },
  user: {
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

export default mongoose.model<Dequeue>('Dequeue', DequeueSchema, 'dequeue')
