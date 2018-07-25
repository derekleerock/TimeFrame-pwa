import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import PersonList from './PersonList'
import AddPerson from './AddPerson'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PersonList}/>
          <Route exact path="/addPerson" component={AddPerson}/>
        </Switch>
      </div>
    )
  }
}
