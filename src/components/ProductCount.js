import '../styles/product-count.scss'
import increase from '../assets/icons/increase.svg'
import decrease from '../assets/icons/decrease.svg'

const ProductCount = ({ quantity, increaseOnClick, decreaseOnClick }) => {
  return (
    <div className="product-count">
      <button onClick={decreaseOnClick}>
        <img src={decrease} alt="increase" />
      </button>
      <div className="product-quantity">{quantity}</div>
      <button onClick={increaseOnClick}>
        <img src={increase} alt="increase" />
      </button>
    </div>
  )
}

export default ProductCount
