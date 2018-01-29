export interface LoginCredentials {
  email: string
  password: string
}

export interface RegistrationCredentials extends LoginCredentials {
  name: string
  surname: string
  mobile: string
  role: string
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

export async function register (credentials: RegistrationCredentials): Promise<boolean> {
  const response = await fetch('/api/v1/register', {
    method: 'post',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.status >= 500) throw new Error('Server error')
    const json = await response.json()
    return json.success
}
