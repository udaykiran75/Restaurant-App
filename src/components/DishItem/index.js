import './index.css'
import {BsCircleFill} from 'react-icons/bs'

const DishItem = props => {
  const {dishDetails, cartItems, addItemToCart, removeItemFromCart} = props
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseQuantity = () => addItemToCart(dishDetails)
  const onDecreaseQuantity = () => removeItemFromCart(dishDetails)

  const getQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem === undefined ? 0 : cartItem.quantity
  }

  const renderControllerButton = () => (
    <div className="controller-container">
      <button className="button" type="button" onClick={onDecreaseQuantity}>
        -
      </button>
      <p className="quantity">{getQuantity()}</p>
      <button className="button" type="button" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="dish-item-container">
      <div className={dishType === 1 ? 'non-veg-border' : 'veg-border'}>
        <BsCircleFill
          className={dishType === 1 ? 'non-veg-round' : 'veg-round'}
        />
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-currency-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && <p className="available-text">Not available</p>}
        {addonCat.length !== 0 && (
          <p className="custom-text">Customizations available</p>
        )}
      </div>

      <div className="calories-image-con">
        <p className="dish-calories">{dishCalories} calories</p>
        <img className="dish-image" src={dishImage} alt={dishName} />
      </div>
    </li>
  )
}

export default DishItem
