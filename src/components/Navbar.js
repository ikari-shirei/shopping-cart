import cart from '../assets/icons/cart.svg'
import '../styles/navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/shopping-cart/">
        <h1 className="navbar-header">Haman</h1>
      </Link>
      <ul className="navbar-list">
        <Link to="/shopping-cart/">
          <li className="navbar-home">Home</li>
        </Link>
        <Link to="/shopping-cart/categories">
          <li className="navbar-shop">Shop</li>
        </Link>
        <Link to="/shopping-cart/cart">
          <li>
            <img src={cart} alt="Cart" className="navbar-cart" />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
