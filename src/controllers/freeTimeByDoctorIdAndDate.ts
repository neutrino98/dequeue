import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import Queue from '../models/Queue'
import User from '../models/User'
import * as moment from 'moment'

export async function freeTimeByDoctorIdAndDate ({ query }: Request, res: Response) {
  const { date, doctorId } = query
  try {
    const queries = await Queue.find({ from: { $regex: date, $options: 'i' }, doctorId })
    const busy = queries.map(queue => moment(queue.from).format('HH:mm'))
    const doctor = await User.findById(doctorId)
    const start = moment(doctor.startTime, 'HH:mm')
    const finish = moment(doctor.finishTime, 'HH:mm')
    let allTime = []
    while (finish.diff(start) > 0) {
      allTime.push({
        from: start.format('HH:mm'),
        to: moment(start.add(doctor.sessionTime, 'minutes')).format('HH:mm')
      })
    }
    const freeTime = allTime.filter(time => {
      return !busy.find(busyTime => busyTime === time.from)
    })
    res.status(200).json(successRes({ freeTime }))
  } catch (e) {
    res.status(500).json(serverErrRes())
  }
}
