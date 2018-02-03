import * as CryptoJS from 'crypto-js'

export async function getToken (): Promise<string> {
  const uri = 'https://sandbox-authservice.priaid.ch/login'
  const secret = 'Eo59KePb2x6A7GcBr'
  const key = 'poloabusesuckaz@gmail.com'
  const hash = CryptoJS.HmacMD5(uri, secret).toString(CryptoJS.enc.Base64)
  const credentials = `${key}:${hash}`
  console.log(credentials)
  const response = await fetch(uri, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${credentials}`
    }
  })
  const json = await response.json()
  return json.Token
}
