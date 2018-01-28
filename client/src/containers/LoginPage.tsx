import * as React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component<{}, {}> {

  handleSubmit = (email: string, password: string): void => {
    alert('email: ' + email + ' password: ' + password)
    // const response = await fetch('http://localhost:3001/method', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     email, password
    //   })
    // })
  }

  render () {
    return <LoginForm onSubmit={this.handleSubmit}/>
  }
}
