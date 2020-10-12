import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import FirstSlide from './weekOne/FirstSlide'
import SecondSlide from './weekTwo/SecondSlide'

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/weekOne/FirstSlide">
            <FirstSlide />
        </Route>
        <Route path="/weekTwo/SecondSlide">
            <SecondSlide />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
