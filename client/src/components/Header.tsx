import * as React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom'

const Header = (props: RouteComponentProps<any>) => {
  return (
    <Menu>
      <Container>
        <Menu.Item>
          Index
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/signin'>
            Sign In
          </Menu.Item>
          <Menu.Item as={NavLink} to='/signup'>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default withRouter(Header)
