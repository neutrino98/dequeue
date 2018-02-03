import * as React from 'react'
import {User} from '../api/auth'

export const Profile = (props: User) => (
  <div>
    <h1>ФИО: {props.name} {props.surname}</h1>
    <h2>Email: {props.email}</h2>
    <img src={props.imageUrl}/>
    {props.role === 'Doctor' &&
    <div>
      <h1>{props.placeOfWork}</h1>
      <h1>{props.doctorSpecialty}</h1>
    </div>
    }
  </div>
)
