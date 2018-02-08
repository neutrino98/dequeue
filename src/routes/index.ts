import * as express from 'express'
import * as authRouter from './auth/index'
import * as userRouter from './user/index'
import * as queueRouter from './queue/index'
import * as timeRouter from './time/index'
import * as telegramRouter from './telegram/index'
import { client } from '../controllers/client'

const router = express.Router()

router.use('/api/v1', authRouter, userRouter, queueRouter, timeRouter, telegramRouter)

router.get('*', client)

export = router
