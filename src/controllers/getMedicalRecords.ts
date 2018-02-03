import { Request, Response } from 'express'
import { failRes, serverErrRes, successRes } from '../utils/responses'
import QueueModel from '../models/Queue'

export async function getUserRecording (req: Request, res: Response) {
    try{
       QueueModel.find({patient.id: })  
    } catch (e) {

    }
}
