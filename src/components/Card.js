import '../styles/card.scss'

const Card = ({ item }) => {
  return (
    <div className="item-card-container">
      <div className="item-card-image-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item-card-info">
        <div className="item-name-brand-container">
          <h2 className="item-name">{item.name}</h2>
          <h4 className="item-brand">{item.brand}</h4>
        </div>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  )
}

export default Card
