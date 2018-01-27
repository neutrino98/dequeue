const crypto = require('crypto')
import * as dotenv from 'dotenv'
dotenv.config()

const salt = process.env.SERVER_SALT

export function sha512 (password: string) {
  const hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  const value = hash.digest('hex')
  return {
    salt: salt,
    passwordHash: value
  }
}
