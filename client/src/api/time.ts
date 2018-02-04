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
  console.log(from, doctorId, date)
  return true
}
