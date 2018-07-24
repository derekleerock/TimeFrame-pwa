import React from 'react'

export default class AddPerson extends React.Component {
  render() {
    return (
      <div>
        <header>Add A Person</header>
        <form>
          <label>Name</label>
          <input placeholder={"enter a name"}/>
        </form>
      </div>
    )
  }
}