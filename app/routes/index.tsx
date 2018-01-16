import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

/* Network */
import Counter from '../components/Counter'

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Counter} />
      </Switch>
    )
  }
}
