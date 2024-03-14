import styles from '../styles/card.module.css';
export default function Card({ id, imageSrc, title, price, rating }) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={imageSrc} alt="" />
      </div>
      <div className={`${styles.description}`}>
        <p className={`${styles.title}`}>{title}</p>
        <p className={`${styles.price}`}>${price}</p>
      </div>
      <button className={`${styles.addToCartBtn}`}>Add to Cart</button>

    </div>
  )
}

