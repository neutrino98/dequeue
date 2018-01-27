import * as React from 'react'
import Layout from './Layout'
import { Route, Switch } from 'react-router'
import LandingPage from '../containers/LandingPage'

const App = () => (
  <Layout>
    <Switch>
      <Route exact={true} component={LandingPage} path={'/'}/>
    </Switch>
  </Layout>
)

export default App
