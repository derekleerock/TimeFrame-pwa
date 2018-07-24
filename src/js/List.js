import React from 'react'
import AppBar from './AppBar'
import {Link} from 'react-router-dom'

export default class List extends React.Component {
  render() {
    return (
      <div>
        <AppBar/>
        <main>
          <Link to="/addPerson">
            Add New Person
          </Link>
        </main>
      </div>
    )
  }
}