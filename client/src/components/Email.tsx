import * as React from 'react'
import { Form, Label } from 'semantic-ui-react'

export default class Email extends React.Component<{}, {}> {

  render () {
    return (
        <div>
            <Label text='Email:'/>
            <Form.Input
                name='email'
                required={true}
                minLength={5}
                maxLength={30}
                pattern='[A-Za-z]+?@[A-Za-z]+?\.[A-Za-z]+?'
                {...this.props}
            />
        </div>
    )
  }
}
