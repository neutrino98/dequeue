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

export enum Day {
  Monday = 'Понедельник',
  Tuesday = 'Вторник',
  Wednesday = 'Среда',
  Thursday = 'Четверг',
  Friday = 'Пятница',
  Saturday = 'Суббота',
  Sunday = 'Воскресенье'
}

export interface User extends mongoose.Document {
  name: string
  surname: string
  mobile: number
  password: string
  email: string
  role: Role
  imageUrl: string
  gender: string
  yearOfBirth: number
}

export const userKeys = ['name', 'imageUrl', 'surname', 'mobile', 'password', 'email', 'role', 'gender', 'yearOfBirth']

export interface Doctor extends User {
  doctorSpecialty: string
  placeOfWork: string
  sessionTime: string
  availableDays: Day
}

export const doctorKeys = [...userKeys, 'doctorSpecialty', 'placeOfWork']

export const idDoctorSpecialty = {
  1: 'Кардиолог',
  4: 'Иглорефлексотерапев',
  5: 'Аллерголог',
  6: 'Анестезиолог',
  7: 'Ангиолог',
  8: 'Антропософский врач',
  9: 'Детский психиатр',
  10: 'Пластический хирург',
  11: 'Дерматовенеролог',
  12: 'Эндокринолог',
  13: 'Судебно-медицинский экперт',
  14: 'Гастроэнтеролог',
  15: 'Терапевт',
  17: 'Гериатр',
  18: 'Акушер-гинеколог',
  19: 'Врач-специалист по внутренним заболеваниям',
  20: 'Кистевой хирург',
  21: 'Гематолог',
  22: 'Гомеопат',
  23: 'Инфекционист',
  24: 'Мануальный терапевт',
  25: 'Челюстно-лицевой хирург',
  26: 'Нефролог',
  27: 'Невролог',
  28: 'Профпатолог',
  29: 'Онколог',
  30: 'Офтальмолог',
  31: 'Травматолог-ортопед',
  32: 'Оториноларинголог',
  33: 'Патолог',
  34: 'Педиатр',
  35: 'Пульмонолог',
  36: 'Психиатр',
  37: 'Врач-специалист по тропической медицине',
  38: 'Спортивный врач',
  39: 'Хирург',
  40: 'Рентгенолог',
  41: 'Ревматолог',
  42: 'Уролог',
  43: 'Стоматолог',
  44: 'Ортодонт',
  45: 'Стоматолог-хирург',
  46: 'Парадонтолог',
  47: 'Стоматолог-ортопед'
}

export const idSymptoms = {
  9: 'Головная боль',
  10: 'Абдоминальная боль',
  11: 'Лихорадка',
  12: 'Боль в конечностях',
  13: 'Боль в горле',
  14: 'Насморк',
  15: 'Кашель',
  16: 'Усталость',
  17: 'Боль в груди',
  23: 'Прибавление в весе',
  28: 'Заложенность носа',
  29: 'Одышка',
  30: 'Хрип',
  31: 'Теснота в груди',
  35: 'Ангионевротический отек',
  37: 'Тахикардия',
  40: 'Полидипсия',
  44: 'Тошнота',
  45: 'Изжога',
  46: 'Жжение в горле',
  52: 'Бессоница',
  54: 'Снижение аппетита',
  57: 'Обморок',
  64: 'Мокрота',
  73: 'Зуд глаз',
  75: 'Жжение в глазах',
  76: 'Ощущение инородного тела в глазу',
  87: 'Боль в ухе',
  92: 'Раннее насыщение',
  95: 'Чихание',
  96: 'Зуд в носу',
  101: 'Рвота',
  104: 'Боль в спине',
  112: 'Нарушение менструации',
  114: 'Нервозность',
  115: 'Тремор в покое',
  122: 'Икота',
  123: 'Задержка менструации',
  124: 'Кожная сыпь',
  133: 'Ночной кашель',
  136: 'Боль в шее',
  138: 'Потливость',
  139: 'Холодный пот',
  140: 'Паралич',
  144: 'Кратковременная потеря сознания',
  149: 'Приливы',
  153: 'Интенсивное дыхание',
  169: 'Увеличение лимфоузлов в области шеи',
  170: 'Припухшая щека',
  175: 'Озноб',
  179: 'Чувство жжения в желудке',
  181: 'Рвота кровью',
  203: 'Боль при глотании',
  207: 'Головокружение',
  211: 'Слезотечение',
  235: 'Амнезия',
  238: 'Тревожность',
  244: 'Птоз века',
  248: 'Увеличение лимфоузлов в подмышечной впадине',
  273: 'Сухость глаз',
  287: 'Глазная боль' }

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
  imageUrl: {
    type: String,
    default: 'http://res.cloudinary.com/dtuhcdmvr/image/upload/v1517662645/defaultAvatar.png'
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
    enum: Object.keys(idDoctorSpecialty).map(id => idDoctorSpecialty[id]),
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
  sessionTime: {
    type: String,

  },
  availableDays: {
    type: String,
    enum: enumValues(Day)
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
    enum: ['male', 'female'],
    required: true
  },
  yearOfBirth: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String
  }
})

UserSchema.pre('save', function (next) {
  this.password = sha512(this.password).passwordHash
  next()
})

export default mongoose.model<Doctor>('User', UserSchema, 'user')
