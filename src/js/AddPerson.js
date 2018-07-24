import React from 'react'

export default class AddPerson extends React.Component {
  render() {
    return (
      <div className="add-person-view">
        <header>Add A Person</header>
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