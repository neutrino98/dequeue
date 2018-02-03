export function setToken (token: string): void {
  localStorage.setItem('token', token)
}

export function setId (id: string): void {
  localStorage.setItem('id', id)
}

export function getId (id: string): void {
  localStorage.getItem('id')
}

export function getToken (token: string): string | null {
  return localStorage.getItem('token')
}
