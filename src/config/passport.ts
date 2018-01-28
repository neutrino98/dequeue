import * as passport from 'passport'
import { Strategy } from 'passport-local'
import * as jwt from 'jsonwebtoken'
import { sha512 } from '../utils/sha512'
import UserModel from '../models/User'

passport.use('local', new Strategy({
  session: false,
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const passwordHash = sha512(password).passwordHash
  try {
    const user = await UserModel.findOne({ email, password: passwordHash })
    if (!user) {
      return done('No such user or password is incorrect')
    } else {
      const payload = { id: user._id, role: user.role }
      const token = jwt.sign(payload, process.env.JWT_SECRET)
      return done(null, token, user)
    }
  } catch (error) {
    done('Internal server error')
  }
}))
