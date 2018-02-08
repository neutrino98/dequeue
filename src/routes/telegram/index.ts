import * as express from 'express'
import { сreateTelegramRequest, deleteTelegramRequest } from '../../controllers/telegramRequest'

const telegramRouter = express.Router()

telegramRouter.post('/telegram/request', сreateTelegramRequest)
telegramRouter.delete('/telegram/request/:id', deleteTelegramRequest)

export = telegramRouter

