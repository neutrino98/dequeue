import * as React from 'react'
import { Segment } from 'semantic-ui-react'

interface Props {
  possibleTimes: object[] | null
  selectTime: (from: string) => void
  selectedTime: string | null
}

const TimeList = ({ possibleTimes, selectTime, selectedTime }: Props) => {
  if (!possibleTimes) return null
  return (
    <div className={'TimeList'} style={{ marginTop: '2em' }}>
      {possibleTimes.map((time: any, index) => {
        return <Segment inverted={selectedTime === time.from} onClick={() => selectTime(time.from)} className={'timeItem'} key={index}>{time.from} - {time.to}</Segment>
      })}
    </div>
  )
}

export default TimeList
