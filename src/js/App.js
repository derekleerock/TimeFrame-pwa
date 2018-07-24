import React from 'react'
import AppBar from './AppBar'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppBar/>
              <main>
                <button>Add New Person</button>
              </main>
            </div>
        )
    }
}
