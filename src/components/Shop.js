import '../styles/categories.scss'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { mainCategory } from '../index'
import '../styles/shop.scss'
import Card from './Card'

const Shop = ({ match }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // First letter uppercase
  const categoryName = capitalize(match.params.category)

  const category =
    categoryName === 'Dresses'
      ? mainCategory.find((item) => item.name === 'dresses').items
      : categoryName === 'Hoodies'
      ? mainCategory.find((item) => item.name === 'hoodies').items
      : categoryName === 'shirts'
      ? mainCategory.find((item) => item.name === 'shirts').items
      : []

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="categories-header-container">
        <h2 className="categories-header">{categoryName}</h2>
      </div>
      {category.map((item) => {
        if (category === [] || !category) {
          return <h1>There is no item</h1>
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
  )
}

export default Shop
