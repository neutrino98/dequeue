import { Request, Response } from 'express'

export const client = (req: Request, res: Response) => {
  res.sendFile('/index.html')
}
