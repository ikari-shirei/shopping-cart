import { Link } from 'react-router-dom'
import { useState } from 'react'
import Card from './Card'
import '../styles/product.scss'
import { mainCategory, cartItems } from '../index'
import Navbar from './Navbar'
import ProductCount from './ProductCount'
import Button from './Button'
import uniqid from 'uniqid'

const Product = ({ match }) => {
  const [itemQuantity, setItemQuantity] = useState(1)

  const decreaseOnClick = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1)
    }
  }
  const increaseOnClick = () => {
    if (itemQuantity < 20) {
      setItemQuantity(itemQuantity + 1)
    }
  }

  const targetObj = mainCategory.find((category) =>
    category.name === match.params.category ? category : null
  )

  console.log(targetObj)

  const targetItem = targetObj.items.find((item) =>
    item.id === match.params.id ? item : null
  )

  const newId =
    cartItems.length > 0 ? cartItems[cartItems.length - 1].id + 1 : 1

  const data = {
    targetItem: targetItem,
    itemQuantity: itemQuantity,
    id: newId,
  }

  const isData = cartItems.find((x) => x === data)

  const cartUpdate = () => {
    data.id = data.id + 1
    return !isData ? cartItems.push(data) : null
  }

  console.log(targetItem)
  console.log(match.params.id)

  return (
    <div className="product">
      <Navbar />
      <div className="product-content">
        <Card item={targetItem} key={targetItem.id} />
        <p className="product-description">{targetItem.description}</p>
      </div>
      <div className="product-quantity-container">
        <ProductCount
          quantity={itemQuantity}
          decreaseOnClick={decreaseOnClick}
          increaseOnClick={increaseOnClick}
        />
      </div>
      <div className="add-to-cart-button-container">
        <Button
          title="Add to Cart"
          className="add-to-cart-button"
          onClick={cartUpdate}
        />
      </div>
    </div>
  )
}

export default Product
