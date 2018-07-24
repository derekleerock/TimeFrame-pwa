import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import List from './List'
import AddPerson from './AddPerson'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/addPerson" component={AddPerson}/>
        </Switch>
      </div>
    )
  }
}
