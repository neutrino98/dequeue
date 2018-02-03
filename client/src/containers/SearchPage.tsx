import * as React from 'react'
import { Container } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'

export enum SearchMode {
  Doctor, Symptom
}

interface State {
  mode: SearchMode
}

class SearchPage extends React.Component<{}, State> {
  state = {
    mode: SearchMode.Symptom
  }

  onChange = () => {
    console.log('change')
  }

  selectMode = (mode: SearchMode) => {
    this.setState({ mode })
  }

  render () {
    const { onChange, selectMode } = this
    const { mode } = this.state
    return (
      <Container>
        <SearchBar
          onChange={onChange}
          selectMode={selectMode}
          mode={mode}
        />
      </Container>
    )
  }
}

export default SearchPage
