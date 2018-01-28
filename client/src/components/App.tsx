import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../containers/LandingPage'
import LoginPage from '../containers/LoginPage'
import RegistrationPage from '../containers/RegistrationPage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationPage} path='/signup'/>
      <Route exact={true} component={LoginPage} path='/signin'/>
    </Switch>
  </Layout>
)

export default App
