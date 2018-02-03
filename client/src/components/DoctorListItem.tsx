import * as React from 'react'
import { Doctor } from '../definitions/User'
import { Grid, Image, Segment } from 'semantic-ui-react'

interface Props {
  doctor: Doctor
  key: string
}

const DoctorListItem = ({ key, doctor }: Props) => {
  return (
    <Segment key={key}>
      <Grid>
        <Grid.Column width={4}>
          <Image bordered={true} size={'large'} src={doctor.imageUrl} />
        </Grid.Column>
        <Grid.Column width={12}>
          <h2>{doctor.name}</h2>
          <p>{doctor.doctorSpecialty}</p>
          <p>{doctor.placeOfWork}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default DoctorListItem
