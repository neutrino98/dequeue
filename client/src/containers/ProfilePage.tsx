import * as React from 'react'
import { User } from '../api/auth'
import { Profile } from '../components/Profile'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface State {
  user: User | null
}

export default withRouter(class ProfilePage extends React.Component<RouteComponentProps<any>, State> {

  state = {
    user: null
  }

  async componentDidMount () {
    console.log(this.props.match.params.id)
    const user: User = (await(await fetch('/api/v1/users/' + this.props.match.params.id)).json()).data
    this.setState({ user })
  }

  render () {
    console.log('Hello world')
    return (
      <Profile user={this.state.user}/>
    )
  }
})
