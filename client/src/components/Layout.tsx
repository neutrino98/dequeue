import * as React from 'react'
import Header from './Header'

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = (props: Props) => (
  <div>
    <Header/>
    {props.children}
  </div>
)

export default Layout
