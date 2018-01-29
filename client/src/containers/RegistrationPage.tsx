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

    handleEmail = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ email: value })
    }

    handlePassword = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ password: value })
    }

    handleName = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ name: value })
    }

    handleSurname = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ surname: value })
    }

    handleMobile = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ mobile: value })
    }

    handleRole = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        this.setState({ role: value })
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
                handleName={this.handleName}
                handleSurname={this.handleSurname}
                handleMobile={this.handleMobile}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleRole={this.handleRole}
                handleSubmit={this.handleSubmit}
                error={error}
                loading={loading}
            />
        )
    }
}
