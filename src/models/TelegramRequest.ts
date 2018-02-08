import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export interface TelegramRequest extends mongoose.Document {
  username: string, 
  date: string    
}

const TelegramRequestSchema = new Schema({
  username: {
      type: String, 
      required: true,
      unique: true,
  }, 
  date: {
      type: String, 
      required: true
  }
})

export default mongoose.model<TelegramRequest>('TelegramRequest', TelegramRequestSchema, 'TelegramRequest')
