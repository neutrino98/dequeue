import * as mongoose from 'mongoose'
import { UserSchema, User } from '../models/User'

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
  placeOfWork: String
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
  }
})

export default mongoose.model<Doctor>('Doctor', DoctorSchema, 'doctor')
