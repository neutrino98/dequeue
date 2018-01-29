import * as React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import Email from './Email'
import Password from './Password'

interface Props {
  onSubmit: (email: string, password: string) => Promise<void>
}

interface State {
  email: string,
  password: string
}

export default class LoginForm extends React.Component<Props, State> {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e: any) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render () {
    const { email,password } = this.state
    return(
      <form>
      {/* <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}> */}
          <Segment stacked={true}>
            <Email
              onChange={this.handleChange}
              value={email}
            />
            <Password
              onChange={this.handleChange}
              value={password}
            />
            <Button
              onClick={() => {
                console.log('call')
                this.props.onSubmit(email, password)
              }}
            >
              Sign in
            </Button>
          </Segment>
        {/* </Grid.Column>
      </Grid> */}
      </form>
    )
  }

}
