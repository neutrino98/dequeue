import * as React from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router'

const Header = (props: RouteComponentProps<any>) => {
  return (
    <Menu>
      <Container>
        <Menu.Item>
          Index
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            1
          </Menu.Item>
          <Menu.Item>
            2
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default withRouter(Header)
