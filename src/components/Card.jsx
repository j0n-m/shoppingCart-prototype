import { useState } from 'react';
import styles from '../styles/card.module.css';
import PropTypes from 'prop-types';
import InputQuantity from './InputQuantity';
export default function Card({ id, imageSrc, title, price, updateCart, cart }) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const changeQuantity = (num) => {
    setCartQuantity(num);
    // [{imageSrc, title, price, quantity, id}]
    updateCart({ id, imageSrc, title, price, quantity: num });

    //find index inside cart state array to look for item id, if so overwrite the quantity,
    //setCart with cartQuantity
    //otherwise, push the item object to the cart state array with a new quantity property set
  }
  const itemIsInCart = () => {
    const index = cart.findIndex(item => item.id == id)
    return (index != -1);
  }
  const getQuantityFromCart = (id) => {
    const index = cart.findIndex(item => item.id == id)
    return cart[index].quantity;
  }
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={`${styles.description}`}>
        <p className={`${styles.title}`}>{title}</p>
        <p className={`${styles.price}`}>${price}</p>
      </div>
      {itemIsInCart() ? <InputQuantity value={getQuantityFromCart(id)} changeValue={changeQuantity}></InputQuantity> :
        cartQuantity === 0 ?
          <button className={`${styles.addToCartBtn}`} onClick={() => { changeQuantity(cartQuantity + 1) }}>Add to Cart</button> :
          <InputQuantity value={cartQuantity} changeValue={changeQuantity}></InputQuantity>}

    </div>
  )
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  updateCart: PropTypes.func,
  cart: PropTypes.array,
}
