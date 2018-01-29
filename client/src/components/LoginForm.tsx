import * as React from 'react'
import { Segment, Button, Form, Container } from 'semantic-ui-react'

interface Props {
  handleSubmit: () => void
  handleEmail: (e: React.FormEvent<HTMLInputElement>) => void
  handlePassword: (e: React.FormEvent<HTMLInputElement>) => void
  error: null | string
  loading: boolean
}

export default function LoginForm ({ handleSubmit, handleEmail, handlePassword, loading, error }: Props) {
  return (
    <Container>
      <Segment>
        {error && <Segment color={'red'}>{error}</Segment>}
        <Form onSubmit={handleSubmit}>
          <Form.Input required={true} minLength={'6'} maxLength={'100'} onChange={handleEmail} type='email' />
          <Form.Input required={true} minLength={'6'} maxLength={'100'} onChange={handlePassword} type='password'/>
          <Button type={'submit'} loading={loading} content='Login'/>
        </Form>
      </Segment>
    </Container>
  )
}
