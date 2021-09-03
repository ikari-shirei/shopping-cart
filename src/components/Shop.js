import '../styles/categories.scss'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { mainCategory } from '../index'
import '../styles/shop.scss'
import Card from './Card'

const Shop = ({ match }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [filter, setFilter] = useState([])

  // First letter uppercase
  const categoryName = capitalize(match.params.category)

  const category =
    categoryName === 'Dresses'
      ? mainCategory.find((item) => item.name === 'dresses').items
      : categoryName === 'Hoodies'
      ? mainCategory.find((item) => item.name === 'hoodies').items
      : categoryName === 'Shirts'
      ? mainCategory.find((item) => item.name === 'shirts').items
      : categoryName === 'Bags'
      ? mainCategory.find((item) => item.name === 'bags').items
      : categoryName === 'Sunglasses'
      ? mainCategory.find((item) => item.name === 'sunglasses').items
      : []

  const filterItems = (event) => {
    let value
    if (!event) {
      value = ''
    } else {
      value = event.target.value
    }
    const filteredItems = category.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })

    setFilter(filteredItems)
  }

  useEffect(filterItems, [])

  const targetArray = filter.length > 0 ? filter : category

  return (
    <div>
      <Navbar />
      <SearchBar id="search-bar" onChange={filterItems} />
      <div className="categories-header-container">
        <h2 className="categories-header">{categoryName}</h2>
      </div>
      <div className="cards-container">
        {targetArray.map((item) => {
          if (category === [] || !category) {
            return <h1>There is no item.</h1>
          } else {
            return (
              <Link
                to={`/categories/${match.params.category}/${item.id}`}
                key={item.id}
                prototype={item}
              >
                <Card item={item} key={item.id} />
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Shop
