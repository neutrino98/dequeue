import * as React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'
import { RouteComponentProps, withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { getToken } from '../utils/auth'

const Header = (props: RouteComponentProps<any>) => {
  return (
    <Menu>
      <Container>
        <Menu.Item onClick={() => props.history.push('/search')}>
          <Icon name={'search'} />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/profile'>
            Профиль
          </Menu.Item>
          {!getToken() && [<Menu.Item key={0} as={NavLink} to='/login'>
            Войти
          </Menu.Item>,
            <Menu.Item key={1}as={NavLink} to='/register'>
            Зарегистрироваться
          </Menu.Item>]}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default withRouter(Header)
