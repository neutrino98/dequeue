import { getToken } from '../utils/auth'

export async function getTime (date: string, doctorId: string): Promise<any> {
  const response = await fetch(`/api/v1/time?date=${date}&doctorId=${doctorId}`)
  const json = await response.json()
  return json.data.freeTime
}

export async function arrange (from: string | null, doctorId: string, date: string | null): Promise<any> {
  await fetch('/api/v1/queue', {
    body: JSON.stringify({
      from: `${date} ${from}`,
      doctorId
    }),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearear ${getToken()}`
    }
  })
}

export async function getQueues (): Promise<any> {
  const response = await fetch('/api/v1/queue/doctor',{
    headers: {
      authorization: `Bearear ${getToken()}`
    }
  })
  const json = await response.json()
  return json.data
}
