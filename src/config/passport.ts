import * as passport from 'passport'
import { Strategy } from 'passport-local'
import * as jwt from 'jsonwebtoken'
import { sha512 } from '../utils/sha512'
import UserModel from '../models/User'

passport.use('local', new Strategy({
  session: false
}, (username, password, done) => {
  const passwordHash = sha512(password).passwordHash
  UserModel.find({ 'login': username, 'password': passwordHash })
        .then(users => {
          const user = users[0]
          if (!user) {
            return done('No user')
          } else {
            const payload = { sub: user._id }
            const token = jwt.sign(payload, process.env.JWT_SECRET)
            return done(null, token, user)
          }
        })
        .catch(err => {
          done(err)
        })
}))
