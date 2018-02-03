import * as React from 'react'
import { Button, Container, DropdownProps, Form, Grid, Segment } from 'semantic-ui-react'

const idDoctorSpecialty = {
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

const genders = { male: 'Мужчина',female: 'Женщина' }

interface Props {
  handleSubmit: () => void
  handleInput: (e: {}) => void
  handleDropdown: (e: {}, data: DropdownProps) => void
  handleFile: (files: FileList | null) => void
  handleRole: (role: string) => void
  role: string
  error: null | string
  loading: boolean
}

export default function RegistrationForm ({ handleSubmit, handleInput, handleFile, handleRole, handleDropdown, loading, role, error }: Props) {
  return (
    <Container>
      <Segment>
        {error && <Segment color={'red'}>{error}</Segment>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Grid centered columns={2}>
              <Grid.Column>
                <Button.Group>
                  <Button positive={role === 'Student'} onClick={e => {
                    e.preventDefault()
                    handleRole('Student')
                  }}>Пользователь</Button>
                  <Button.Or />
                  <Button positive={role === 'Doctor'} onClick={e => {
                    e.preventDefault()
                    handleRole('Doctor')
                  }}>Доктор</Button>
                </Button.Group>
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Form.Input name='email' placeholder='Email' required={true} minLength={'6'} maxLength={'100'}
            onChange={handleInput} type='email' />
          <Form.Input name='password' placeholder='Пароль' required={true} minLength={'6'} maxLength={'100'}
            onChange={handleInput} type='password' />
          <Form.Input name='name' placeholder='Имя' required={true} minLength={'2'} maxLength={'100'}
            onChange={handleInput} type='firstname' />
          <Form.Input name='surname' placeholder='Фамилия' required={true} minLength={'2'} maxLength={'100'}
            onChange={handleInput} type='lastname' />
          <Form.Input name='mobile' placeholder='Телефон' required={true} minLength={'8'} maxLength={'12'}
            onChange={handleInput} type='tel' />
          <Form.Input name='yearOfBirth' placeholder='Год рождения' required={true} minLength={'4'} maxLength={'15'}
            onChange={handleInput} type='number' />
          <Form.Dropdown name='gender' placeholder='Пол' fluid={true} selection={true} options={Object.keys(genders).map((index, i) => ({ key: i, value: index, text: genders[index] }))} onChange={handleDropdown} />
          {role === 'Doctor' &&
            <div>
              <Form.Input name='placeOfWork' placeholder='Место работы' required={true} onChange={handleInput} type='text' />
              <Form.Dropdown name='doctorSpecialty' placeholder='Специальность' fluid={true} search={true} selection={true} options={Object.keys(idDoctorSpecialty).map((id, i) => ({ key: i, value: idDoctorSpecialty[id], text: idDoctorSpecialty[id] }))} onChange={handleDropdown} />
            </div>
          }
          <Form.Group>
            <input name='imageUrl' accept='image/*' onChange={e => handleFile(e.target.files)}
              type='file' />
          </Form.Group>
          <Form.Button type={'submit'} loading={loading} content='Зарегистрироваться' />
        </Form>
      </Segment>
    </Container>
  )
}
