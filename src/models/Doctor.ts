import * as mongoose from 'mongoose'
import { UserSchema, User } from '../models/User'
import { sha512 } from '../utils/sha512'

const extend = (Schema, obj) => (
  new mongoose.Schema(
    Object.assign({}, Schema.obj, obj)
  )
)

export interface Doctor extends User {
  activated: Boolean,
  position: String,
  doctorSpecialty: DoctorSpecialty,
  doctorCategory: DoctorCategory,
  placeOfWork: String,
  daysOfAppointment: Object,
  maxTimeOfAppointment: Number,
  minTimeOfAppointment: Number
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

export const DoctorSchema = extend(UserSchema, {
  activated: {
    type: Boolean,
    required: true,
    default: false
  },
  doctorSpecialty: {
    type: String,
    enum: ['Педіатр', 'Кардіолог', 'Дерматолог', 'Невролог','Оториноларинголог',
      'Хірург', 'Уролог', 'Гастроінтеролог', 'Гінеколог', 'Психіатр' ],
    required: true
  },
  doctorCategory: {
    type: String,
    enum: [ 'Головний лікар', 'Лікар' ],
    required: true
  },
  placeOfWork: {
    type: String,
    required: true
  },
  daysOfAppointment: {
    type: Array,
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

DoctorSchema.pre('save', function (next) {
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<Doctor>('Doctor', DoctorSchema, 'doctor')
