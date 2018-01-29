export function setToken (token: string): void {
  localStorage.setItem('token', token)
}

export function getToken (token: string): string | null {
  return localStorage.getItem('token')
}
