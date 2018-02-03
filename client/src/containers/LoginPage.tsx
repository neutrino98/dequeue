import * as React from 'react'
import LoginForm from '../components/LoginForm'
import * as api from '../api/auth'
import { LoginCredentials } from '../api/auth'
import * as auth from '../utils/auth'
import { RouteComponentProps } from 'react-router'

interface State extends LoginCredentials {
  error: null | string
  loading: boolean
}

export default class LoginPage extends React.Component<RouteComponentProps<{}>, State> {
  state = {
    email: '',
    password: '',
    error: null,
    loading: false
  }

  handleEmail = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: value })
  }

  handlePassword = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
    this.setState({ password: value })
  }

  handleSubmit = async () => {
    try {
      this.setState({ loading: true })
      const data = await api.login(this.state)
      auth.setToken(data.token)
      auth.setId(data.user.id)
      this.props.history.push('/')
    } catch (e) {
      this.setState({ error: e.message })
    } finally {
      this.setState({ loading: false })
    }
  }

  render () {
    const { error, loading } = this.state
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        error={error}
        loading={loading}
      />
    )
  }
}
