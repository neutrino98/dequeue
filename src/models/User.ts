import * as mongoose from 'mongoose'
import * as validator from 'validator'
import { sha512 } from '../utils/sha512'
import { enumValues } from '../utils/enumUtils'

const Schema = mongoose.Schema

export enum Role {
  Student = 'Student',
  Doctor = 'Doctor',
  Admin = 'Admin'
}

export interface User extends mongoose.Document {
  name: string
  surname: string
  mobile: number
  password: string
  email: string
  role: Role
}

export interface Doctor extends User {
  activated: Boolean,
  position: String,
  doctorSpecialty: DoctorSpecialty,
  doctorCategory: DoctorCategory,
  placeOfWork: String
  maxTimeOfAppointment: number
  minTimeOfAppointment: number
}

enum DoctorSpecialty {
  Pediatrician = 'Педіатр',
  Cardiologists = 'Кардіолог',
  Dermatologists = 'Дерматолог',
  Neurologists = 'Невролог',
  Otolaryngologists = 'Оториноларинголог',
  Surgeon = 'Хірург',
  Urologists = 'Уролог',
  Gastroenterologists = 'Гастроінтеролог',
  Gynaecologists = 'Гінеколог',
  Psychiatrists = 'Психіатр'
}

enum DoctorCategory {
  HeadDoctor = 'Головний лікар',
  Doctor = 'Лікар'
}

export const UserSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  mobile: {
    type: String,
    validate: mobile => validator.isMobilePhone(mobile, 'any'),
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 100,
    required: true
  },
  email: {
    type: String,
    validate: email => validator.isEmail(email),
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ['Student', 'Doctor', 'Admin'],
    required: true
  },
  activated: {
    type: Boolean,
    required: false,
    default: false
  },
  position: {
    type: String,
    required: false
  },
  doctorSpecialty: {
    type: String,
    enum: enumValues(DoctorSpecialty),
    required: false
  },
  doctorCategory: {
    type: String,
    enum: enumValues(DoctorCategory),
    required: false
  },
  placeOfWork: {
    type: String,
    required: false
  },
  maxTimeOfAppointment: {
    type: Number,
    required: false
  },
  minTimeOfAppointment: {
    type: Number,
    required: false
  }
})

UserSchema.pre('save', function (next) {
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<Doctor>('User', UserSchema, 'user')
