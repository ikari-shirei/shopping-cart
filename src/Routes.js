import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Categories from './components/Categories'
import Product from './components/Product'

// Recovered Routes.js
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:category" exact component={Shop} />
        <Route path="/categories/:category/:id" exact component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
