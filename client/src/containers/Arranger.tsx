import * as React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { Segment, Button } from 'semantic-ui-react'
import * as moment from 'moment'
import * as api from '../api/time'
import { Doctor } from '../definitions/User'
import TimeList from '../components/TimeList'
import { withRouter, RouteComponentProps } from 'react-router';

interface State {
  selectedTime: string | null
  selectedDate: string | null
  possibleTimes: object[] | null
}

interface Props extends RouteComponentProps<any> {
  user: Doctor | null
}

class Arranger extends React.Component<Props, State> {
  state = {
    selectedTime: null,
    selectedDate: null,
    possibleTimes: null
  }

  onDateChange = (day: any) => {
    const selectedDate = moment(day).format('YYYY-MM-DD')
    this.setState({ selectedDate })
    if (this.props.user) {
      api.getTime(selectedDate, this.props.user._id).then(possibleTimes => this.setState({ possibleTimes }))
    }
  }

  selectTime = (from: string) => {
    this.setState({ selectedTime: from })
  }

  arrange = async () => {
    if (this.state.selectedTime && this.props.user && this.state.selectedDate) {
      this.props.history.push('/search')
      await api.arrange(this.state.selectedTime, this.props.user._id, this.state.selectedDate)
    }
  }

  render () {
    return (
      <Segment>
        <DayPickerInput dayPickerProps={{ onDayClick: this.onDateChange }}/>
        <TimeList selectedTime={this.state.selectedTime} selectTime={this.selectTime} possibleTimes={this.state.possibleTimes}/>
        {this.state.selectedTime && <Button content={'Записаться'} onClick={this.arrange}/>}
      </Segment>
    )
  }
}

export default withRouter(Arranger)
