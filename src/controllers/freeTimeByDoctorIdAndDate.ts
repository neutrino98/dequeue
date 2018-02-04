import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'
import UserModel from '../models/User'
import * as moment from 'moment'

export async function freeTimeByDoctorIdAndDate ({ params }: Request, res: Response) {
  const { date, doctorId } = params
  try {
    const queries = await QueueModel.find({ date: date, doctorId: doctorId })
    const doctor = await UserModel.findById(doctorId)
    const start = moment(doctor.startTime, 'YYYY-MM-DD HH:mm')
    const finish = moment(doctor.finishTime, 'YYYY-MM-DD HH:mm')
    console.log(moment.duration(finish.diff(start)).asMinutes)
    const count = moment.duration(finish.diff(start)).asMinutes as any / doctor.sessionTime
    let times = []
    const fromDate = moment(doctor.startTime, 'YYYY-MM-DD HH:mm')
    for (let i = 0; i < count; i++) {
      times.push({ from: fromDate.add(doctor.sessionTime * i, 'minutes'), to: fromDate.add(doctor.sessionTime * (i + 1), 'minutes') })
    }
    let freeTime = []
    times.filter(time => {
      if(query.from)
    })
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}
