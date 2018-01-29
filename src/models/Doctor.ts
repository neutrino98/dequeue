import * as mongoose from 'mongoose'
import * as extendSchema from 'mongoose-extend-schema'
import { UserSchema, User } from '../models/User'

export interface Doctor extends User {
  activated: Boolean,
  position: String,
  doctorSpecialty: DoctorSpecialty,
  doctorCategory: DoctorCategory,
  placeOfWork: String
}

export enum DoctorSpecialty {
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

export enum DoctorCategory {
  HeadDoctor = 'Головний лікар',
  Doctor = 'Лікар'
}

export const DoctorSchema = extendSchema(UserSchema, {
  activated: {
    type: Boolean,
    required: true,
    default: false
  },
  position: {
    type: String,
    required: true
  },
  doctorSpecialty: {
    type: String,
    enum: DoctorSpecialty,
    required: true
  },
  doctorCategory: {
    type: String,
    enum: DoctorCategory,
    required: true
  },
  placeOfWork: {
    type: String,
    required: true
  }
})

export default mongoose.model<Doctor>('Doctor', DoctorSchema, 'doctor')
