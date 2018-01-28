import * as React from 'react'
import { Input, InputProps } from 'semantic-ui-react'

export default class Password extends React.Component<InputProps, {}> {
  render () {
    return (
        <Input
          name='password'
          label='Password:'
          type='password'
          required={true}
          minLength={5}
          maxLength={20}
          pattern='[A-Z]+'
          {...this.props}
        />
    )
  }
}
