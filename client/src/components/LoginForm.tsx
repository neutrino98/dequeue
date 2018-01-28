import * as React from 'react'
import Email from './Email'
import Password from './Password'

export default class LoginForm extends React.Component<{}, {}> {
  render () {
    return(
      <div className='LoginForm'>
      <form>
          <Email/>
          <Password/>
      </form>
      </div>
    )
  }
}
