import { Doctor } from '../definitions/User'
import { SearchMode } from '../containers/SearchPage'
import { getToken } from '../utils/auth'

export async function search (value: string, mode: SearchMode): Promise<Doctor[]> {
  let uri = `/api/v1/users?`
  uri += mode === SearchMode.Doctor ? `doctorSpecialty=${value}` : `symptom=${value}`
  console.log(uri)
  const response = await fetch(uri, {
    headers: {
      authorization: `Bearear ${getToken()}`
    }
  })
  const json = await response.json()
  return json.data.doctors
}
