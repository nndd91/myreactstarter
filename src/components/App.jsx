import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
