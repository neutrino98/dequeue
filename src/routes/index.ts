import * as express from 'express'
import * as authRouter from './auth/index'
import * as profileRouter from './profile/index'
import { client } from '../controllers/client'

const router = express.Router()

router.use('/api/v1', authRouter, profileRouter)

router.get('*', client)

export = router
