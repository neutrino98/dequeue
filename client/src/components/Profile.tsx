import * as React from 'react'
import { User } from '../api/auth'
import { Divider, Grid, Label, Segment } from 'semantic-ui-react'
// import { Segment } from 'semantic-ui-react'

export const Profile = ({ user }: {user: User | null}) => (
  <div>
    {user &&
    <Segment padded={true}>
      <Grid stackable={true} columns={4}>
        <Grid.Column width={4}>
          <img style={{maxWidth: 'auto', maxHeight: '20vh'}} src={user.imageUrl}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Label horizontal={true}>ФИО:</Label>
          {user.name} {user.surname}
          <Divider verical={true}/>
          <Label horizontal={true}>Email:</Label>
          {user.email}
        </Grid.Column>
        {user.role === 'Doctor' &&
        <Grid.Column width={6}>
          <Label horizontal={true}>Место работы:</Label>
          {user.placeOfWork}
          <Divider verical={true}/>
          <Label horizontal={true}>Специальность:</Label>
          {user.doctorSpecialty}
        </Grid.Column>
        }
      </Grid>
    </Segment>
    }
  </div>
)
