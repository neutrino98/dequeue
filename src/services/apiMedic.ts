import * as CryptoJS from 'crypto-js'
import { User } from '../models/User'
import * as rp from 'request-promise'

export async function getToken (): Promise<string> {
  const uri = 'https://sandbox-authservice.priaid.ch/login'
  const secret = 'Eo59KePb2x6A7GcBr'
  const key = 'poloabusesuckaz@gmail.com'
  const hash = CryptoJS.HmacMD5(uri, secret).toString(CryptoJS.enc.Base64)
  const credentials = `${key}:${hash}`
  const response = await rp(uri, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${credentials}`
    }
  })
  const json = JSON.parse(response)
  return json.Token
}

export interface DiagnosisResponse {
  Issue: {
    ID: number
    Name: string
    ProfName: string
  }
  Specialisation: {
    ID: number
    Name: string
  }[]
}

export async function diagnosis (symptoms: number[], user: any): Promise<DiagnosisResponse> {
  const token = await getToken()
  const uri = `https://sandbox-healthservice.priaid.ch/diagnosis?token=${token}&language=ru-ru&symptoms=[${symptoms.toString()}]&gender=${user.gender}&year_of_birth=${user.yearOfBirth}`
  const response = await rp(uri)
  return JSON.parse(response)
}
