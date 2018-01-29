import * as React from 'react'
import LoginForm from '../components/LoginForm'
import * as api from '../api/auth'
import * as auth from '../utils/auth'

interface State {
  email: string,
  password: string
  error: null | string
  loading: boolean
}

export default class LoginPage extends React.Component<{}, State> {
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
    const { email, password } = this.state
    try {
      this.setState({ loading: true })
      const token = await api.login(email, password)
      auth.setToken(token)
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
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
