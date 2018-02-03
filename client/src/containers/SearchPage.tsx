import * as React from 'react'
import { Container, DropdownProps } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'
import * as doctorsApi from '../api/doctors'
import { Doctor } from '../definitions/User'
import SearchResults from '../components/SearchResults'

export enum SearchMode {
  Doctor, Symptom
}

interface State {
  mode: SearchMode
  doctors: Doctor[] | null
  cursor: null | number
}

class SearchPage extends React.Component<{}, State> {
  state = {
    mode: SearchMode.Doctor,
    cursor: null,
    doctors: null
  }

  componentDidMount () {
    doctorsApi.search('Терапевт').then(response => {
      this.setState({ cursor: response.cursor, doctors: response.doctors })
    })
  }

  onChange = (e: any, data: DropdownProps) => {
    this.setState({ doctors: null })
    if (this.state.mode === SearchMode.Doctor) {
      doctorsApi.search(data.value as string).then(response => {
        this.setState({ cursor: response.cursor, doctors: response.doctors })
      })
    }
  }

  selectMode = (mode: SearchMode) => {
    this.setState({ mode })
  }

  render () {
    const { onChange, selectMode } = this
    const { mode, doctors } = this.state
    return (
      <Container>
        <SearchBar
          onChange={onChange}
          selectMode={selectMode}
          mode={mode}
        />
        <SearchResults doctors={doctors}/>
      </Container>
    )
  }
}

export default SearchPage
