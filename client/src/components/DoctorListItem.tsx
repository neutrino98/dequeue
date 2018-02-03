import * as React from 'react'
import { Doctor } from '../definitions/User'
import { Segment, Grid, Image, Button } from 'semantic-ui-react'
import { withRouter, RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps<any> {
  doctor: Doctor
  key: string
}

const DoctorListItem = ({ key, doctor, history }: Props) => {
  return (
    <Segment key={key}>
      <Grid>
        <Grid.Column width={4}>
          <Image bordered={true} size={'large'} src={doctor.imageUrl} />
          <Button fluid={true} content={'Перейти к профилю'} onClick={() => history.push(`/profile/${doctor._id}`)}/>
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

export default withRouter(DoctorListItem)
