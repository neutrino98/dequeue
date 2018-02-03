import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../components/LandingPage'
import LoginPage from '../containers/LoginPage'
import RegistrationPage from '../containers/RegistrationPage'
import ProfilePage from '../containers/ProfilePage'
import SearchPage from '../containers/SearchPage'

// class AuthRoute extends Route {
//   render () {
//     return localStorage.getItem('token')
//       ? <Route exact={true} path={this.props.path} component={this.props.component} />
//       : <Redirect to={{ pathname: '/' }} />
//   }
// }

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationPage} path='/register'/>
      <Route exact={true} component={LoginPage} path='/login'/>
      <Route exact={true} component={SearchPage} path='/search'/>
      <Route exact={true} component={ProfilePage} path='/profile/:id'/>
    </Switch>
  </Layout>
)

export default App
