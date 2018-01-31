import * as React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { RouteComponentProps, withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

const Header = (props: RouteComponentProps<any>) => {
  return (
    <Menu>
      <Container>
        <Menu.Item>
          Index
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/login'>
            Login
          </Menu.Item>
          <Menu.Item as={NavLink} to='/register'>
            Register
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default withRouter(Header)
