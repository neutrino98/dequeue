import * as React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import { getQueues } from '../api/time'
import { Grid } from 'semantic-ui-react'

interface State {
  queues: any
}

class DoctorCabinet extends React.Component<{}, State> {
  state = {
    queues: []
  }

  componentWillMount () {
    getQueues().then(queues => this.setState({ queues }))
  }

  render () {
    const { queues } = this.state
    if (!queues) return null
    if (queues.length === 0) {
      return <Container><Segment><h1>Записей нет</h1></Segment></Container>
    }
    return (
      <Container>
        <Segment>
          {queues.map((queue: any, index: any) => {
            return (
              <Grid key={index}>
                <Grid.Column>
                  {queue.user.name}
                </Grid.Column>
                <Grid.Column>
                  {queue.time.from}
                </Grid.Column>
                <Grid.Column>
                  {queue.time.to}
                </Grid.Column>
              </Grid>
            )
          })}
        </Segment>
      </Container>
    )
  }

}

export default DoctorCabinet
