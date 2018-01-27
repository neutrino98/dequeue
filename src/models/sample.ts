import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

interface Sample extends mongoose.Document {
  wtf: string
}

const SampleSchema = new Schema({
  wtf: String
})

export default mongoose.model<Sample>('Sample', SampleSchema, 'memes')
