import * as React from 'react'
import * as api from '../api/auth'
import { DoctorCredentials, Gender, Role } from '../api/auth'
import { RouteComponentProps } from 'react-router'
import RegistrationForm from '../components/RegistrationForm'
import { DropdownProps } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

interface State extends DoctorCredentials {
  file: File | null
  error: null | string
  loading: boolean
}

export default withRouter(class RegistrationPage extends React.Component<RouteComponentProps<{}>, State> {

  defaultImageUrl = 'http://res.cloudinary.com/dtuhcdmvr/image/upload/v1517662645/defaultAvatar.png'

  state = {
    name: '',
    surname: '',
    mobile: '',
    email: '',
    password: '',
    error: null,
    imageUrl: this.defaultImageUrl,
    file: null,
    loading: false,
    doctorSpecialty: '',
    placeOfWork: '',
    gender: 'male' as Gender,
    yearOfBirth: 1990,
    role: 'Student' as Role,
    sessionTime: 5,
    startTime: '00:00',
    finishTime: '00:00'
  }

  userInputs = ['name', 'surname', 'mobile', 'email', 'password', 'role', 'gender', 'yearOfBirth']
  doctorInputs = [...this.userInputs, 'doctorSpecialty', 'placeOfWork', 'sessionTime', 'startTime', 'finishTime']
  validNames = (role: string): String[] => role === 'Student' ? this.userInputs : this.doctorInputs

  handleInput = ({currentTarget: {name, value}}: any) => {
    console.log('Name: ', name,' value: ', value)
    if (!this.validNames(this.state.role).includes(name)) {
      throw new Error(`Not valid input name - ${name}`)
    }
    this.setState({ [name]: value })
  }

  handleDropdown = (e: any, data: DropdownProps) => {
    this.setState({[data.name]: data.value})
  }

  handleSubmit = async () => {
    try {
      this.setState({ loading: true })
      const imageUrl = await this.uploadImage(this.state.file)
      this.setState({ imageUrl: imageUrl ? imageUrl : this.defaultImageUrl })
      const result = await (this.state.role === 'Student' ? api.register(this.state) : api.registerDoctor(this.state))
      console.log('Result: ', result)
      if (result.success) {
        this.props.history.push('/login')
      } else {
        this.setState({ error: result.message ? result.message : 'An error occured'})
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

  handleRole = (role: Role) => {
    this.setState({ role })
  }

  render () {
    const { error, loading, role } = this.state
    return (
        <RegistrationForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleFile={this.handleFile}
            handleDropdown={this.handleDropdown}
            error={error}
            loading={loading}
            role={role}
            handleRole={this.handleRole}
        />
    )
  }
})
