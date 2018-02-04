enum DoctorCategory {
  HeadDoctor = 'Головний лікар',
  Doctor = 'Лікар'
}

export enum Role {
  Student = 'Student',
  Doctor = 'Doctor',
  Admin = 'Admin'
}

export interface User {
  _id: string
  name: string
  surname: string
  placeOfWork: string
  password: string
  email: string
  role: Role
  gender: string
  yearOfBirth: number
  imageUrl: string
}

export interface Doctor extends User {
  activated: boolean
  position: string
  doctorSpecialty: string
  doctorCategory: DoctorCategory
  placeOfWork: string
  maxTimeOfAppointment: number
  minTimeOfAppointment: number
}
