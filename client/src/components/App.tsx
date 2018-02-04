import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../components/LandingPage'
import LoginPage from '../containers/LoginPage'
import RegistrationPage from '../containers/RegistrationPage'
import ProfilePage from '../containers/ProfilePage'
import SearchPage from '../containers/SearchPage'
import 'react-day-picker/lib/style.css'
import DoctorCabinet from '../containers/DoctorCabinet'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path='/'/>
      <Route exact={true} component={RegistrationPage} path='/register'/>
      <Route exact={true} component={LoginPage} path='/login'/>
      <Route exact={true} component={SearchPage} path='/search'/>
      <Route exact={true} component={ProfilePage} path='/profile/:id'/>
      <Route exact={true} component={DoctorCabinet} path='/profile'/>
    </Switch>
  </Layout>
)

export default App
