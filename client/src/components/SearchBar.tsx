import * as React from 'react'
import { Button, Dropdown, DropdownProps } from 'semantic-ui-react'
import { SearchMode } from '../containers/SearchPage'
import Doctors from '../definitions/Doctors'
import Symptoms from '../definitions/Symptoms'

interface Props {
  onChange: (e: any, data: DropdownProps) => void
  selectMode: (mode: SearchMode) => void
  mode: SearchMode
}

const SearchBar = ({ onChange, selectMode, mode }: Props) => {
  return (
    <div className={'SearchBar'}>
      <Dropdown
        selection={true}
        placeholder={mode === SearchMode.Doctor ? 'Поиск доктора' : 'Поиск по симптому'}
        options={mode === SearchMode.Doctor ? Doctors : Symptoms}
        onChange={onChange}
        defaultValue={'Терапевт'}
        search={true}
        type={'text'}
      />
      <Button.Group>
        <Button onClick={() => selectMode(SearchMode.Doctor)} positive={mode === SearchMode.Doctor}>Доктор</Button>
        <Button.Or />
        <Button onClick={() => selectMode(SearchMode.Symptom)} positive={mode === SearchMode.Symptom}>Симптом</Button>
      </Button.Group>
    </div>
  )
}

export default SearchBar
