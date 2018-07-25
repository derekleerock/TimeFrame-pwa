import React from 'react'
import {Link} from 'react-router-dom'
import close from '../img/close_light.svg'

export default class AddPerson extends React.Component {
  render() {
    return (
      <div className="add-person-view">
        <header>
          <Link to="/" className="close">
            <img src={close}/>
          </Link>
          <span>Add A Person</span>
        </header>
        <main>
          <form>
            <label>Name</label>
            <input placeholder={"enter a name"}/>
          </form>
        </main>
      </div>
    )
  }
}
