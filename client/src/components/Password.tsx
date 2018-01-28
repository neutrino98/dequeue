import * as React from 'react'
import { Form, Label } from 'semantic-ui-react'

export default class Password extends React.Component<{}, {}> {
  render () {
    return (
        <div>
            <Label text='Password:'/>
            <Form.Input
                name='password'
                type='password'
                required={true}
                minLength={5}
                maxLength={20}
                pattern='[A-Z]'
                {...this.props}
            />
        </div>
    )
  }
}
