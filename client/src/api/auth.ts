export interface LoginCredentials {
  email: string
  password: string
}

export type Gender = 'male' | 'female'
export type Role = 'Doctor' | 'Student'

interface Response {
  success: boolean,
  message: string | undefined
  data: any
}

export interface User {
  email: string
  name: string
  surname: string
  mobile: string
  gender: Gender
  yearOfBirth: number
  role: Role
  imageUrl: string
  doctorSpecialty: string | null
  placeOfWork: string | null
}

export interface RegistrationCredentials extends LoginCredentials {
  name: string
  surname: string
  mobile: string
  gender: Gender
  yearOfBirth: number
  role: Role
  imageUrl: string
}

export interface DoctorCredentials extends RegistrationCredentials {
  doctorSpecialty: string
  placeOfWork: string
}

export async function login (credentials: LoginCredentials): Promise<{ token: string, user: { _id: string } }> {
  const response = await fetch('/api/v1/login', {
    method: 'post',
    body: JSON.stringify(credentials),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.status >= 500) throw new Error('Server error')
  const json = await response.json()
  if (!json.success) throw new Error(json.message)
  return json.data
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
