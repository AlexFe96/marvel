import React, { Component, Fragment } from 'react'
import './style/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from './component/ErrorComponents/PageNotFound'
import HeroesPage from './component/Heroes'
import HeroDetails from './component/HeroDetails'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="portal" />
        <Router>
          <Switch>
            <Route exact path="/" component={HeroesPage} />
            <Route path="/characters/:id" component={HeroDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App
