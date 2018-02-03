import * as React from 'react'
import { Loader } from 'semantic-ui-react'
import { Doctor } from '../definitions/User'
import DoctorListItem from './DoctorListItem'

interface Props {
  doctors: Doctor[] | null
}

const SearchResult = ({ doctors }: Props) => {
  if (!doctors) {
    return <Loader active={true} />
  }
  if (doctors.length === 0) {
    return <h2>Таких докторов нет</h2>
  }
  return (
    <div>
      {doctors.map(doctor => <DoctorListItem doctor={doctor} key={doctor._id}/>)}
    </div>
  )
}

export default SearchResult
