import { Request, Response } from 'express'
import { successRes } from '../utils/responses'
import { searchModels } from '../utils/searchModels'
import UserModel from '../models/User'
import * as _ from 'lodash'

const paginationCount = 3

export async function getUsers ({ query }: Request, res: Response) {
  const prevCursor = ~~query.cursor || 0
  let findOptions = _.pick(query, ['role', 'doctorSpecialty', 'placeOfWork', 'surname'])
  if (findOptions.surname !== undefined) {
    findOptions.surname = { $regex: findOptions.surname, $options : 'i' }
  }
  console.log(findOptions)
  const pagesCount = await UserModel.find().count() / paginationCount

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const doctors = (await searchModels(UserModel, findOptions, prevCursor, paginationCount)).models
    res.json(successRes({ doctors, cursor }))
  } else {
    res.json({ cursor })
  }
}
