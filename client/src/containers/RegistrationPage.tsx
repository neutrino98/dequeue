import * as React from 'react'
import * as api from '../api/auth'
import { RegistrationCredentials } from '../api/auth'
import { RouteComponentProps } from 'react-router'
import RegistrationForm from '../components/RegistrationForm'

// import {Image as CloudinaryImage} from 'cloudinary-react'

interface State extends RegistrationCredentials {
  file: File | null
  error: null | string
  loading: boolean
}

export default class RegistrationPage extends React.Component<RouteComponentProps<{}>, State> {

  defaultImageUrl: string = 'http://res.cloudinary.com/dtuhcdmvr/image/upload/v1517662645/defaultAvatar.png'

  state = {
    name: '',
    surname: '',
    mobile: '',
    email: '',
    password: '',
    role: '',
    error: null,
    imageUrl: this.defaultImageUrl,
    file: null,
    loading: false
  }

  handleInput = ({ currentTarget: { value, name } }: any) => {
    const validNames = ['name', 'surname', 'mobile', 'email', 'password', 'role']
    if (!validNames.includes(name)) {
      throw new Error(`Not valid input name - ${name}`)
    }
    this.setState({ [name]: value })
  }

  handleSubmit = async () => {
    try {
      this.setState({ loading: true })
      const imageUrl = await this.uploadImage(this.state.file)
      this.setState({ imageUrl: imageUrl ? imageUrl : this.defaultImageUrl })
      console.log(this.state)
      const success = await api.register(this.state)
      if (success) {
        this.props.history.push('/login')
      } else {
        this.setState({ error: 'An error occured' })
      }
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
  }

  uploadImage = async (file: File | null): Promise<string | null> => {
    if (!file) {
      return null
    }

    let imgFormData = new FormData()
    imgFormData.append('file', file)
    imgFormData.append('upload_preset', 'sfhd0g0o')

    const imgResponse = await (await fetch('https://api.cloudinary.com/v1_1/dtuhcdmvr/image/upload', {
      method: 'POST',
      body: imgFormData
    })).json()

    return imgResponse.url
  }

  handleFile = async (files: FileList | null) => {
    if (files) {
      this.setState({ file: files[0] })
    }
  }

  render () {
    const { error, loading } = this.state
    return (
        <RegistrationForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleFile={this.handleFile}
            error={error}
            loading={loading}
        />
    )
  }
}
