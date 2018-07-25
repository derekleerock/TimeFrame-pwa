import React from 'react'
import AppBar from './AppBar'
import {Link} from 'react-router-dom'

export default class PersonList extends React.Component {
  render() {
    return (
      <div className="container-view">
        <AppBar/>
        <main>
          <Link to="/addPerson" className="primary">
            Add New Person
          </Link>
        </main>
      </div>
    )
  }
}
