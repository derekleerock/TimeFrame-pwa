import React from 'react'
import {Link} from 'react-router-dom'
import close from '../img/close_light.svg'
import {createPerson} from './PersonRepo'

export default class AddPerson extends React.Component {
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleAddPersonClick() {
    createPerson({name: this.state.name})
  }

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
            <input name='personName' placeholder={"enter a name"} onChange={this.handleNameChange.bind(this)}/>
            <button onClick={this.handleAddPersonClick.bind(this)}>Add Person</button>
          </form>
        </main>
      </div>
    )
  }
}
