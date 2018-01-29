import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../components/LandingPage'
import LoginPage from '../containers/LoginPage'
import RegistrationPage from '../containers/RegistrationPage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationPage} path='/register'/>
      <Route exact={true} component={LoginPage} path='/login'/>
    </Switch>
  </Layout>
)

export default App
