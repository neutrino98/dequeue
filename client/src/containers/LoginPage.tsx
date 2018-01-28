import * as React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import Email from '../components/Email'
import Password from '../components/Password'
import * as LoginForm from '../components/LoginForm'

export default class LoginPage extends React.Component<{}, {}> {
  render () {
    return <LoginForm/>
  }
}
