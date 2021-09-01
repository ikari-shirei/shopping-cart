import Navbar from './Navbar'
import '../styles/home.scss'
import Button from './Button'
import { Link } from 'react-router-dom'

const Home = () => {
  const handleButton = () => {
    console.log('clicked')
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home-content-container">
        <div className="home-content">
          <h3 className="home-content-header">Find yourself</h3>
          <Link to="/categories">
            <Button
              title="Shop Now"
              className="shop-button"
              onClick={handleButton}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home