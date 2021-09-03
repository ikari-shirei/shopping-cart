import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Routes from './Routes'
import uniqid from 'uniqid'
import {
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  bag1,
  bag2,
  hoodie1,
  hoodie2,
  sunglass1,
  sunglass2,
} from './importImg'

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
        name: 'Dress 1',
        brand: 'Dress Factory',
        price: '2.00',
        img: dress1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Dress 2',
        brand: 'Dress Factory',
        price: '3.00',
        img: dress2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '2',
        uniqid: uniqid(),
      },
      {
        name: 'Dress 3',
        brand: 'Dress Company',
        price: '3.00',
        img: dress3,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '3',
        uniqid: uniqid(),
      },
      {
        name: 'Dress 4',
        brand: 'Dress Factory',
        price: '3.00',
        img: dress4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '4',
        uniqid: uniqid(),
      },
      {
        name: 'Dress 5',
        brand: 'Dress Company',
        price: '3.00',
        img: dress5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '5',
        uniqid: uniqid(),
      },
      {
        name: 'Dress 6',
        brand: 'Dress Factory',
        price: '3.00',
        img: dress6,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '6',
        uniqid: uniqid(),
      },
    ],
  },
  {
    name: 'hoodies',
    id: uniqid(),
    items: [
      {
        name: 'Hoodie 1',
        brand: 'Hoodie Company',
        price: '4.00',
        img: hoodie1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Hoodie 2',
        brand: 'Hoodie Factory',
        price: '24.00',
        img: hoodie2,
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
  {
    name: 'bags',
    id: uniqid(),
    items: [
      {
        name: 'Blue Bag',
        brand: 'Blueos',
        price: '2.00',
        img: bag1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Red Bag',
        brand: 'Redos',
        price: '3.00',
        img: bag2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '2',
        uniqid: uniqid(),
      },
    ],
  },
  {
    name: 'sunglasses',
    id: uniqid(),
    items: [
      {
        name: 'Sunglasses 1',
        brand: 'Sunglasses Company',
        price: '2.00',
        img: sunglass1,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '1',
        uniqid: uniqid(),
      },
      {
        name: 'Sunglasses 2',
        brand: 'Sunglasses Factory',
        price: '3.00',
        img: sunglass2,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        id: '2',
        uniqid: uniqid(),
      },
    ],
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
  {
    name: 'Accesorries',
    id: uniqid(),
    subheaders: [
      {
        category: 'Bags',
        id: uniqid(),
      },
      {
        category: 'Sunglasses',
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
