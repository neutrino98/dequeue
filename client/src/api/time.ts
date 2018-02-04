import { getToken } from '../utils/auth'

export async function getTime (date: string, doctorId: string): Promise<any> {
  return [
    {
      from: '12:00',
      to: '12:30',
      busy: true
    },
    {
      from: '12:01',
      to: '12:30',
      busy: false
    },
    {
      from: '12:02',
      to: '12:30',
      busy: false
    },
    {
      from: '12:03',
      to: '12:30',
      busy: true
    }
  ]
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
