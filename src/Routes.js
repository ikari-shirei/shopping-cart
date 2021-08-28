import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Profile from './components/Profile'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
