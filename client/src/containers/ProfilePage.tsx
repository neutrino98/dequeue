import * as React from 'react'
import { User } from '../api/auth'
import { Profile } from '../components/Profile'

interface State extends User {
  loading: boolean
  error: string | null
}

export default class ProfilePage extends React.Component<{}, State> {

  state = {
    error: null,
    loading: true,
    email: '',
    name: '',
    surname: '',
    mobile: '',
    gender: 'male',
    yearOfBirth: 0,
    role: 'Student',
    imageUrl: '',
    doctorSpecialty: null,
    placeOfWork: null
  }

  async componentDidMount () {
    const user: User = await(await fetch('/profile')).json()
    this.setState({...user})
  }

  render() {
    return (
      <Profile {...this.state}/>
    )
  }
}