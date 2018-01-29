import * as React from 'react'
import Layout from './Layout'
import { Route, Switch, Redirect } from 'react-router'
import LandingPage from '../containers/LandingPage'
import LoginPage from '../containers/LoginPage'
import RegistrationPage from '../containers/RegistrationPage'

class AuthRoute extends Route {
  render () {
    return localStorage.getItem('token')
      ? <Route exact={true} path={this.props.path} component={this.props.component} />
      : <Redirect to={{ pathname: '/' }} />
  }
}

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationPage} path='/signup'/>
      <Route exact={true} component={LoginPage} path='/signin'/>
      <AuthRoute/>
    </Switch>
  </Layout>
)

export default App
