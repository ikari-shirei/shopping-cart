import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Routes from './Routes'
import uniqid from 'uniqid'
import redDress from './assets/images/red-dress.png'

/*  
I needed global variable, so I couldn't use state,
also in this case, I don't need to change data.
*/

export const mainCategory = [
  {
    name: 'dresses',

    id: uniqid(),
    items: [
      {
        name: 'Red Dress 1',
        brand: 'Brand',
        price: '2.00',
        img: redDress,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Red Dress 2',
        brand: 'Brand',
        price: '3.00',
        img: redDress,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '2',
        uniqid: uniqid(),
      },
    ],
  },
  {
    name: 'hoodies',

    id: uniqid(),
    items: [
      {
        name: 'Red Hoodie 1',
        brand: 'Brand',
        price: '4.00',
        img: redDress,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Red Hoodie 2',
        brand: 'Brand',
        price: '24.00',
        img: redDress,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '2',
        uniqid: uniqid(),
      },
    ],
  },
  {
    name: 'shirts',
    id: '1',
    items: [],
  },
]

// Seperate from shop items
export const listItems = [
  {
    name: 'Clothes',
    id: uniqid(),
    subheaders: [
      {
        category: 'Dresses',
        id: uniqid(),
      },
      {
        category: 'Hoodies',
        id: uniqid(),
      },
      {
        category: 'Shirts',
        id: uniqid(),
      },
    ],
  },
]

export let cartItems = []

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
