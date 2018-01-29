import * as React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component<{}, {}> {

  handleSubmit = async (email: string, password: string): Promise<void> => {

    console.log('Here')
    const res = await fetch('http://localhost:3001/api/v1/login', {
      method: 'post',
      body: JSON.stringify({
        email, password
      })
    })
    const json = await res.json()
    alert(json)

    // const { success, message, data } = await (await fetch('http://localhost:3001/api/v1login', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email, password
    //   })
    // })).json()
    // if (success) {
    //   const { user, token } = data
    //   localStorage.setItem('token', token)
    //   localStorage.setItem('user', JSON.stringify(user))
    //   alert('token: ' + token)
    // } else {
    //   alert(message)
    // }
  }

  render () {
    return <LoginForm onSubmit={this.handleSubmit}/>
  }
}
