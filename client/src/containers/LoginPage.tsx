import * as React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import Email from '../components/Email'
import Password from '../components/Password'

export default class LoginPage extends React.Component<{}, {}> {
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
                  <Email/>
                  <Password/>
                  <Button>Sign in</Button>
            </Segment>
        {/* </Grid.Column>
      </Grid> */}
          </form>
    )
  }
}
