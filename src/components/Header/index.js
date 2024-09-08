import './index.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = props => {
  const {cartItems} = props
  const cartItemsCount = cartItems.length

  return (
    <div className="nav-header">
      <h1 className="logo-heading">UNI Resto Cafe</h1>
      <div className="order-cart-div">
        <p className="my-orders-text">My Orders</p>
        <AiOutlineShoppingCart className="cart-icon" />
        <div className="cart-count-badge">
          <p className="cart-count">{cartItemsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
