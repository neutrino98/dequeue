import * as express from 'express'
import { client } from '../controllers/client'

const router = express.Router()

router.get('*', client)

export = router
