import * as React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import Email from './Email'
import Password from './Password'

interface Props {
  onSubmit: () => void
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
                      value={this.state.email}
                    />
                    <Password
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                    <Button
                      onSubmit={this.props.onSubmit}
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
