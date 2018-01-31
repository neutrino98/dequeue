import * as React from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'

interface Props {
  handleSubmit: () => void
  handleInput: (e: {}) => void
  error: null | string
  loading: boolean
}

export default function RegistrationForm ({ handleSubmit, handleInput, loading, error }: Props) {
  return (
    <Container>
        <Segment>
            {error && <Segment color={'red'}>{error}</Segment>}
            <Form onSubmit={handleSubmit}>
                <Form.Input name='email' placeholder='Email' required={true} minLength={'6'} maxLength={'100'} onChange={handleInput} type='email' />
                <Form.Input name='password' placeholder='Password' required={true} minLength={'6'} maxLength={'100'} onChange={handleInput} type='password'/>
                <Form.Input name='name' placeholder='Name' required={true} minLength={'2'} maxLength={'100'} onChange={handleInput} type='firstname' />
                <Form.Input name='surname' placeholder='Surname' required={true} minLength={'2'} maxLength={'100'} onChange={handleInput} type='lastname' />
                <Form.Input name='mobile' placeholder='Mobile' required={true} minLength={'8'} maxLength={'12'} onChange={handleInput} type='tel' />
                <Form.Input name='role' placeholder='Role' required={true} minLength={'4'} maxLength={'15'} onChange={handleInput} type='text' />
                <Button type={'submit'} loading={loading} content='Register'/>
            </Form>
        </Segment>
    </Container>
  )
}
