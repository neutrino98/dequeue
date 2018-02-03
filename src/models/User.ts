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

export const userKeys = ['name', 'surname', 'mobile', 'password', 'email', 'role']

export interface Doctor extends User {
  activated: Boolean
  position: String
  doctorSpecialty: DoctorSpecialty
  doctorCategory: DoctorCategory
  placeOfWork: String
  maxTimeOfAppointment: number
  minTimeOfAppointment: number
}

export const doctorKeys = [...userKeys, 'activated', 'position', 'doctorSpecialty', 'doctorCategory', 'placeOfWork', 'maxTimeOfAppointment', 'minTimeOfAppointment']

enum DoctorSpecialty {
  Pediatrician = 'Педіатр',
  Cardiologists = 'Кардіолог',
  Dermatologists = 'Дерматолог',
  Neurologists = 'Невропотолог',
  Otolaryngologists = 'Оториноларинголог',
  Surgeon = 'Хірург',
  Urologists = 'Уролог',
  Gastroenterologists = 'Гастроінтеролог',
  Gynaecologists = 'Гінеколог',
  Psychiatrists = 'Психіатр',
  Ophthalmologists = 'Офтальмолог',
  Pulmonologists = 'Пульмонолог',
  Traumatologists = 'Травмотолог',
  Proctologists = 'Проктолог',
  Psychologist = 'Психолог'
}

const TypeOfDoctorToId = {
  '1': 'Кардиолог',
  '4': 'Иглорефлексотерапев',
  '5': 'Аллерголог',
  '6': 'Анестезиолог',
  '7': 'Ангиолог',
  '8': 'Антропософский врач',
  '9': 'Детский психиатр',
  '10': 'Пластический хирург',
  '11': 'Дерматовенеролог',
  '12': 'Эндокринолог',
  '13': 'Судебно-медицинский экперт',
  '14': 'Гастроэнтеролог',
  '15': 'Терапевт',
  '17': 'Гериатр',
  '18': 'Акушер-гинеколог',
  '19': 'Врач-специалист по внутренним заболеваниям',
  '20': 'Кистевой хирург',
  '21': 'Гематолог',
  '22': 'Гомеопат',
  '23': 'Инфекционист',
  '24': 'Мануальный терапевт',
  '25': 'Челюстно-лицевой хирург',
  '26': 'Нефролог',
  '27': 'Невролог',
  '28': 'Профпатолог',
  '29': 'Онколог',
  '30': 'Офтальмолог',
  '31': 'Травматолог-ортопед',
  '32': 'Оториноларинголог',
  '33': 'Патолог',
  '34': 'Педиатр',
  '35': 'Пульмонолог',
  '36': 'Психиатр',
  '37': 'Врач-специалист по тропической медицине',
  '38': 'Спортивный врач',
  '39': 'Хирург',
  '40': 'Рентгенолог',
  '41': 'Ревматолог',
  '42': 'Уролог',
  '43': 'Стоматолог',
  '44': 'Ортодонт',
  '45': 'Стоматолог-хирург',
  '46': 'Парадонтолог',
  '47': 'Стоматолог-ортопед'
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
    default: true
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
  experienceOfWork: {
    type: String,
    required: false
  },
  timeOfWorking: {
    type: Array,
    required: false
  },
  response: {
    type: {
      rating: Number,
      description: String
    },
    required: false
  },
  gender: {
    type: String,
    required: true
  },
  yearOfBirth: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<Doctor>('User', UserSchema, 'user')
