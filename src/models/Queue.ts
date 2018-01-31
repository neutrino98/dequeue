import * as mongoose from 'mongoose'
import { UserSchema } from './User'

const Schema = mongoose.Schema

export interface Queue extends mongoose.Document {
  doctor: Object,
  user: Object,
  time: any
  interval: any,
}

const QueueSchema = new Schema({
  doctor: {
    type: UserSchema,
    required: true
  },
  patient: {
    type: UserSchema,
    required: true
  },
  time: {
    type: Schema.Types.Date,
    required: true
  },
  interval: {
    type: Schema.Types.Date,
    required: true
  }
})

export default mongoose.model<Queue>('Queue', QueueSchema, 'queue')
