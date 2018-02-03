import { Request, Response } from 'express'
import { successRes } from '../utils/responses'
import { searchModels } from '../utils/searchModels'
import { diagnosis } from '../services/apiMedic'
import { getSubStr } from '../utils/getSubStr'
import UserModel, { idDoctorSpecialty, idSymptoms } from '../models/User'
import { getDoctorsIdBySymptoms } from '../utils/getDoctorsIdBySymptoms'
import * as _ from 'lodash'

const paginationCount = 3

export async function getUsers ({ query }: Request, res: Response) {
  const prevCursor = ~~query.cursor || 0
  let findOptions = _.pick(query, ['role', 'doctorSpecialty', 'placeOfWork', 'surname', 'symptoms'])
  if (findOptions.surname) {
    findOptions.surname = { $regex: findOptions.surname, $options : 'i' }
  }
  const testingUser = {
    gender : 'male',
    yearOfBirth: 1998
  }
  if (findOptions.symptoms) {
    const ids = await getDoctorsIdBySymptoms(findOptions.symptoms, testingUser)
    console.log(ids)
    const users = []
    for (let i = 0; i < ids.length; i++) {
      console.log(await UserModel.find({ doctorSpecialty: idDoctorSpecialty[ids[i]] }))
      users.push(await UserModel.find({ doctorSpecialty: idDoctorSpecialty[ids[i]] }))
    }
    console.log(users)
    return res.status(200).json(successRes(users))
  }
  const pagesCount = await UserModel.find().count() / paginationCount

  let cursor = prevCursor >= 0 && prevCursor < pagesCount - 1 ? prevCursor + 1 : null
  if (prevCursor <= pagesCount - 1 || prevCursor >= 0) {
    const users = (await searchModels(UserModel, findOptions, prevCursor, paginationCount)).models
    if (users.length === 0) {
      cursor = null
    }
    res.json(successRes({ users, cursor }))
  } else {
    res.json({ cursor })
  }
}
