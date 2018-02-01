import * as express from 'express'
import * as authRouter from './auth/index'
import * as userRouter from './user/index'
import * as queueRouter from './queue/index'
import { client } from '../controllers/client'

const router = express.Router()

router.use('/api/v1', authRouter, userRouter, queueRouter)
router.get('*', client)

export = router
