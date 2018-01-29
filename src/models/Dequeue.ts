import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

interface Dequeue extends mongoose.Document {
  // cabinet: Cabinet
  // user: User
}

const DequeueSchema = new Schema({
  cabinetId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
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
