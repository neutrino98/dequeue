import * as React from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'
import * as doctorsApi from '../api/doctors'
import { Doctor } from '../definitions/User'
import { DropdownProps } from 'semantic-ui-react'
import SearchResults from '../components/SearchResults'

export enum SearchMode {
  Doctor, Symptom
}

interface State {
  mode: SearchMode
  doctors: Doctor[] | null
}

class SearchPage extends React.Component<{}, State> {
  state = {
    mode: SearchMode.Doctor,
    doctors: null
  }

  componentDidMount () {
    doctorsApi.search('Терапевт', SearchMode.Doctor).then(doctors => {
      this.setState({ doctors })
    })
  }

  onChange = (e: any, data: DropdownProps) => {
    this.setState({ doctors: null })
    doctorsApi.search(data.value as string, this.state.mode).then(doctors => {
      this.setState({ doctors })
    })
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
