import '../styles/cart.scss'
import './Navbar'
import Navbar from './Navbar'
import Button from './Button'
import { cartItems } from '../index'
import { useState, useEffect } from 'react'
import remove from '../assets/icons/remove.svg'

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

  console.log(itemsState)
  console.log(itemsPrice)

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

  if (itemsState.length > 0) {
    return (
      <div className="cart">
        <Navbar />
        <div className="cart-header-container">
          <h3 className="cart-header">Cart</h3>
        </div>
        {itemsState.map((obj) => {
          return (
            <div className="cart-content-container" key={obj.id}>
              <div className="name-price-container">
                <h3 className="item-name">{obj.targetItem.name}</h3>
                <h3 className="item-price ">
                  ${obj.targetItem.price * obj.itemQuantity}
                </h3>
              </div>
              <div className="remove-quantity-container">
                <button
                  className="remove-item"
                  id={obj.targetItem.uniqid}
                  onClick={removeItem}
                >
                  <img src={remove} alt="Remove icon" />
                </button>
                <h3 className="item-quantity">{obj.itemQuantity}</h3>
              </div>
            </div>
          )
        })}
        <hr className="hr" />
        <h3 className="total">Total: ${itemsPrice}</h3>
        <Button className="shop-button" title="Checkout" />
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
