import * as React from 'react'
import { Input } from 'semantic-ui-react'

export default class Password extends React.Component<{}, {}> {
  render () {
    return (
        <Input
            name='password'
            label='Password:'
            type='password'
            required={true}
            minLength={5}
            maxLength={20}
            pattern='[A-Z]'
            {...this.props}
        />
    )
  }
}
