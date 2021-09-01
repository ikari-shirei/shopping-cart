import '../styles/search-bar.scss'
import searchIcon from '../assets/icons/search.svg'

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search an item"
      ></input>
    </div>
  )
}

export default SearchBar
