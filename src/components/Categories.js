import '../styles/categories.scss'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import uniqid from 'uniqid'
import { listItems } from '../index'

const Categories = () => {
  return (
    <div className="categories">
      <Navbar />
      <div className="categories-header-container">
        <h2 className="categories-header">Categories</h2>
      </div>
      <div className="categories-main">
        <div className="categories-content-container">
          {listItems.map((mainCat) => {
            return (
              <div key={mainCat.id}>
                <h3 className="categories-subheader">{mainCat.name}</h3>
                <ul className="categories-ul">
                  {mainCat.subheaders.map((items) => {
                    return (
                      <li key={items.id}>
                        <Link
                          to={`/categories/${items.category.toLowerCase()}`}
                        >
                          {items.category}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories
