import * as React from 'react'
import { User } from '../api/auth'

export const Profile = ({ user }: {user: User | null}) => (
  <div>
    {user &&
    <div>
    <h1>ФИО: {user.name} {user.surname}</h1>
    <h2>Email: {user.email}</h2>
    <img src={user.imageUrl}/>
      {user.role === 'Doctor' &&
      <div>
        <h1>{user.placeOfWork}</h1>
        <h1>{user.doctorSpecialty}</h1>
      </div>
      }
    </div>
    }
  </div>
)
