import * as React from 'react'
import { Input } from 'semantic-ui-react'

export default class Email extends React.Component<{}, {}> {

  render () {
    return (
        <Input
            label='Email:'
            name='email'
            required={true}
            minLength={5}
            maxLength={30}
            pattern='[A-Za-z]+?@[A-Za-z]+?\.[A-Za-z]+?'
            {...this.props}
        />
    )
  }
}
