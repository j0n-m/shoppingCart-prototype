import PropTypes from 'prop-types';
import styles from '../styles/cart.module.css'

export default function Cart({ cart }) {
  return (
    <>
      <div className={`${styles.cartContainer}`}>
        {cart.length ?
          cart.map((item) =>

            <div key={item.id} className={`${styles.cartCard}`}>
              <div className={`${styles.imageContainer}`}>
                <img src={item.imageSrc} alt="item" />
              </div>
              <div className={`${styles.cardDetails}`}>
                <p className={`${styles.cardTitle}`}>{item.title}</p>
                <div className={`${styles.cardDetailsInnerBottom}`}>
                  <p>Price <span className={styles.cardPrice}>${item.price}</span></p>
                  <p>Quantity: <span className={styles.cardQuantity}>{item.quantity}</span></p>
                </div>
              </div>
            </div>


          ) : <p>Nothing here :(</p>}
      </div>
      {cart.length ?
        <div className={`${styles.checkoutContainer}`}>
          <span style={{ marginBottom: "4px" }}>Subtotal: <span style={{ fontWeight: "bold", fontSize: "1.0rem" }}>${cart.flatMap((item) => item.quantity * item.price).reduce((acc, num) => num + acc)}</span></span>
          <p style={{ fontSize: ".85rem" }}>(Taxes not included)</p>
          <button onClick={() => { console.log('Open Payment Center') }}>Proceed to checkout</button>
        </div> : <span></span>
      }

    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array,
}

// [
//   {
//     "id": 11,
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     "quantity": 1,
//     "price": 109,
//     "imageSrc": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
// }]