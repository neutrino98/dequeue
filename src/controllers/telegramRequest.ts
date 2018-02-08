import { Request, Response } from 'express'
import { serverErrRes, successRes, failRes } from '../utils/responses'
import TelegramRequest from '../models/TelegramRequest'
import * as _ from 'lodash'

export async function сreateTelegramRequest ({ body }: Request, res: Response) {
  const data = _.pick(body, ['username', 'date'])
  const request = await TelegramRequest.findOne({ username: data.username })
  if (request) {
    return res.status(400).json(failRes('Ваша заявка успешно подана и ждет рассмотрения'))
  }

  try {
    await TelegramRequest.create(data)
    res.status(201).json(successRes({message: 'Заявка успешно принята!' } ))
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json(failRes('User with such email is already exist'))
    }
      return res.status(403).json(failRes(e.toString()))
    
  }    
}

export async function deleteTelegramRequest ({ params }: Request, res: Response) {
  const id = params.id
  const request = await TelegramRequest.findOne({ _id: id })
  if (!request) {
    return res.status(404).json(failRes('Такой заявки нету!'))
  }

  try {
    TelegramRequest.findByIdAndRemove(id)
    res.status(200).json(successRes({ message: 'Заявка успешно удалена!' }))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}