import * as React from 'react'
import { Doctor } from '../definitions/User'
import { Profile } from '../components/Profile'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Arranger from '../containers/Arranger'
import { Container } from 'semantic-ui-react'

interface State {
  user: Doctor | null
}

export default withRouter(class ProfilePage extends React.Component<RouteComponentProps<any>, State> {
  state = {
    user: null
  }

  async componentDidMount () {
    const user: Doctor = (await(await fetch('/api/v1/users/' + this.props.match.params.id)).json()).data
    this.setState({ user })
  }

  render () {
    if (!this.state.user) {
      return <div>loading</div>
    }
    return (
      <Container>
        <Profile user={this.state.user}/>
        <Arranger user={this.state.user} />
      </Container>
    )
  }
})
