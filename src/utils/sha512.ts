const crypto = require('crypto')

export function sha512 (password: string, salt: string) {
  const hash = crypto.crypto.createHmac('sha512', salt)
  hash.update(password)
  const value = hash.digest('hex')
  return {
    salt: salt,
    passwordHash: value
  }
}
