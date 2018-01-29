export async function login (email: string, password: string): Promise<string> {
  const response = await fetch('/api/v1/login', {
    method: 'post',
    body: JSON.stringify({
      email, password
    })
  })
  if (response.status >= 500) throw new Error('Server error')
  const json = await response.json()
  if (!json.success) throw new Error(json.message)
  return json.data.token
}
