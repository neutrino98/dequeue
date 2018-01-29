import * as React from 'react'
import * as api from '../api/auth'
import { RegistrationCredentials } from '../api/auth'
import { RouteComponentProps } from 'react-router'
import RegistrationForm from '../components/RegistrationForm'

interface State extends RegistrationCredentials {
  error: null | string
  loading: boolean
}

export default class RegistrationPage extends React.Component<RouteComponentProps<{}>, State> {
  state = {
    name: '',
    surname: '',
    mobile: '',
    email: '',
    password: '',
    role: '',
    error: null,
    loading: false
  }

  handleInput = ({ currentTarget: { value, name } }: any) => {
    const validNames = ['name', 'surname', 'mobile', 'email', 'password', 'role']
    if (!validNames.includes(name)) {
      throw new Error(`Not valid input name - ${name}`)
    }
    this.setState({ [name]: value })
  }

  handleSubmit = async () => {
    try {
      this.setState({ loading: true })
      const success = await api.register(this.state)
      if (success) {
        this.props.history.push('/login')
      } else {
        this.setState({ error: 'An error occured' })
      }
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
  }

  render () {
    const { error, loading } = this.state
    return (
        <RegistrationForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            error={error}
            loading={loading}
        />
    )
  }
}
