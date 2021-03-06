import '../styles/cart.scss'
import './Navbar'
import Navbar from './Navbar'
import Button from './Button'
import { cartItems } from '../index'
import { useState, useEffect } from 'react'
import remove from '../assets/icons/remove.svg'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = ({ title }) => {
  const [itemsState, setItemsState] = useState([])
  const [itemsPrice, setItemsPrice] = useState(0)

  const updateItemsState = () => {
    setItemsState(cartItems)
  }

  const updateItemsPrice = () => {
    const prices = itemsState.map((obj) => {
      return Number(obj.targetItem.price) * obj.itemQuantity
    })
    const totalPrices = prices.reduce((x, y) => {
      return x + y
    }, 0)

    setItemsPrice(totalPrices)
  }

  useEffect(updateItemsState, [])
  useEffect(updateItemsPrice, [itemsState])

  const removeItem = (event) => {
    const removedItem = itemsState.find((obj) => {
      return obj.targetItem.uniqid === event.target.parentNode.id
    })
    const result = cartItems.filter((obj) => {
      return obj !== removedItem
    })

    const indexOf = cartItems.indexOf(removedItem)
    cartItems.splice(indexOf)

    setItemsState(result)
  }

  toast.configure()

  const notify = () => {
    toast.success('Your order is confirmed.', {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  const handleCheckout = () => {
    notify()
    setItemsState([])

    return cartItems.splice(0, cartItems.length)
  }

  if (itemsState.length > 0) {
    return (
      <div className="cart">
        <Navbar />
        <div className="cart-header-container">
          <h3 className="cart-header">Cart</h3>
        </div>
        <div className="cart-main">
          {itemsState.map((obj) => {
            return (
              <div className="cart-content-container" key={obj.id}>
                <div className="name-price-container">
                  <h3 className="item-name">{obj.targetItem.name}</h3>
                  <h3 className="item-price-cart">
                    ${obj.targetItem.price * obj.itemQuantity}
                  </h3>
                </div>
                <div className="remove-quantity-container">
                  <button
                    className="remove-item"
                    id={obj.targetItem.uniqid + 1}
                    onClick={removeItem}
                  >
                    <img
                      src={remove}
                      alt="Remove icon"
                      id={obj.targetItem.uniqid}
                    />
                  </button>
                  <h3 className="item-quantity">{obj.itemQuantity}</h3>
                </div>
              </div>
            )
          })}
          <hr className="hr" />
          <h3 className="total">Total: ${itemsPrice}</h3>
          <Button
            className="shop-button cart-button"
            title="Checkout"
            onClick={handleCheckout}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart">
        <Navbar />
        <div className="cart-header-container">
          <h3 className="cart-header">Cart</h3>
        </div>
        <h3 className="empty-message">Cart is empty.</h3>
      </div>
    )
  }
}

export default Cart
