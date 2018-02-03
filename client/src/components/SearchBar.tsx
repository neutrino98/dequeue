import * as React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import { SearchMode } from '../containers/SearchPage'
import Doctors from '../definitions/Doctors'
import Symptoms from '../definitions/Symptoms'

interface Props {
  onChange: () => void
  selectMode: (mode: SearchMode) => void
  mode: SearchMode
}

const SearchBar = ({ onChange, selectMode, mode }: Props) => {
  console.log(JSON.stringify(Symptoms.map((doc: any) => {doc.text = doc.value; return doc})))
  return (
    <div className={'SearchBar'}>
      <Dropdown
        selection={true}
        placeholder={mode === SearchMode.Doctor ? 'Поиск доктора' : 'Поиск по симптому'}
        options={mode === SearchMode.Doctor ? Doctors : Symptoms}
        onChange={onChange}
        search={true}
        type={'text'}
      />
      <Button.Group>
        <Button onClick={() => selectMode(SearchMode.Doctor)}>Доктор</Button>
        <Button.Or />
        <Button onClick={() => selectMode(SearchMode.Symptom)}>Симптом</Button>
      </Button.Group>
    </div>
  )
}

export default SearchBar
