import * as _ from 'lodash'
import { diagnosis } from '../services/apiMedic'
import { getSubStr } from '../utils/getSubStr'

export async function getDoctorsIdBySymptoms (find: string, user: any): Promise<number[]> {
  let diagn = await diagnosis(getSubStr(find,1,find.length - 1), user)
  const ids = []
  for (let i = 0; i < _.size(diagn); i++) {
    for (let j = 0; j < _.size(diagn[i].Specialisation); j++) {
      ids.push(diagn[i].Specialisation[j].ID)
    }
  }
  return _.uniq(ids)
}
