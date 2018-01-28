import * as React from 'react'

export default class RegistrationForm extends React.Component<{}, {}> {
  render () {
    return(
      <div className='RegistrationForm'>
      <form>
          <label>Email: </label>
          <input type='email'/>
          <label>Password: </label>
          <input type='password'/>
      </form>
      </div>
    )
  }
}
