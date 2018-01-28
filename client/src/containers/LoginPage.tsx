import * as React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component<{}, {}> {

  handleSubmit = async (email: string, password: string) => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'post',
      body: JSON.stringify({
        email, password
      })
    })
    alert(response)
  }

  render () {
    return <LoginForm onSubmit={this.handleSubmit}/>
  }
}
