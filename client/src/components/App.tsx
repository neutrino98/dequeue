import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../containers/LandingPage'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationForm} path='/signup'/>
      <Route exact={true} component={LoginForm} path='/signin'/>
    </Switch>
  </Layout>
)

export default App
