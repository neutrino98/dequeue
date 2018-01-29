import * as React from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'

interface Props {
    handleSubmit: () => void
    handleName: (e: React.FormEvent<HTMLInputElement>) => void
    handleSurname: (e: React.FormEvent<HTMLInputElement>) => void
    handleMobile: (e: React.FormEvent<HTMLInputElement>) => void
    handleEmail: (e: React.FormEvent<HTMLInputElement>) => void
    handlePassword: (e: React.FormEvent<HTMLInputElement>) => void
    handleRole: (e: React.FormEvent<HTMLInputElement>) => void
    error: null | string
    loading: boolean
}

export default function RegistrationForm ({ handleSubmit, handleEmail, handleMobile, handleSurname, handleName, handlePassword, loading, error }: Props) {
    return (
        <Container>
            <Segment>
                {error && <Segment color={'red'}>{error}</Segment>}
                <Form onSubmit={handleSubmit}>
                    <Form.Input placeholder='Email' required={true} minLength={'6'} maxLength={'100'} onChange={handleEmail} type='email' />
                    <Form.Input placeholder='Password' required={true} minLength={'6'} maxLength={'100'} onChange={handlePassword} type='password'/>
                    <Form.Input placeholder='Name' required={true} minLength={'2'} maxLength={'100'} onChange={handleName} type='firstname' />
                    <Form.Input placeholder='Surname' required={true} minLength={'2'} maxLength={'100'} onChange={handleSurname} type='lastname' />
                    <Form.Input placeholder='Mobile' required={true} minLength={'8'} maxLength={'12'} onChange={handleMobile} type='tel' />
                    <Form.Input placeholder='Role' required={true} minLength={'4'} maxLength={'15'} onChange={handleMobile} type='text' />
                    <Button type={'submit'} loading={loading} content='Register'/>
                </Form>
            </Segment>
        </Container>
    )
}
