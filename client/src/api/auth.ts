export interface LoginCredentials {
  email: string
  password: string
}

interface Response {
  success: boolean,
  message: string | undefined
  data: any
}

export interface RegistrationCredentials extends LoginCredentials {
  name: string
  surname: string
  mobile: string
  gender: string
  yearOfBirth: number
  role: string
  imageUrl: string
}

export interface DoctorCredentials extends RegistrationCredentials {
  doctorSpecialty: string
  placeOfWork: string
}

export async function login (credentials: LoginCredentials): Promise<string> {
  const response = await fetch('/api/v1/login', {
    method: 'post',
    body: JSON.stringify(credentials),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.status >= 500) throw new Error('Server error')
  const json = await response.json()
  if (!json.success) throw new Error(json.message)
  return json.data.token
}

export async function register (credentials: RegistrationCredentials): Promise<Response> {
  const response = await fetch('/api/v1/register', {
    method: 'post',
    body: JSON.stringify(credentials),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.status >= 500) throw new Error('Server error')
  return response.json()
}

export async function registerDoctor (credentials: DoctorCredentials): Promise<Response> {
  console.log('Credentials: ', credentials)
  const response = await fetch('/api/v1/register', {
    method: 'post',
    body: JSON.stringify(credentials),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.status >= 500) throw new Error('Server error')
  return response.json()
}
