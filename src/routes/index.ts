import * as express from 'express'
import * as authRouter from './auth/index'
import * as userRouter from './user/index'
import * as queueRouter from './queue/index'
import { client } from '../controllers/client'

const router = express.Router()

router.use('/api/v1', authRouter)
router.use('/api/v1', userRouter)
router.use('/api/v1', queueRouter)

router.get('*', client)

export = router
