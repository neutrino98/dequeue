export function setToken (token: string): void {
  localStorage.setItem('token', token)
}

export function setId (id: string): void {
  localStorage.setItem('id', id)
}

export function getId (): string | null {
  return localStorage.getItem('id')
}

export function getToken (): string | null {
  return localStorage.getItem('token')
}
