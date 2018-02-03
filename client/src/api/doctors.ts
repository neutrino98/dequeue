import { Doctor } from '../definitions/User'

export async function search (doctorSpecialty: string): Promise<{doctors: Doctor[], cursor: number | null}> {
  const uri = `/api/v1/users?doctorSpecialty=${doctorSpecialty}`
  const response = await fetch(uri)
  const json = await response.json()
  return json.data
}
