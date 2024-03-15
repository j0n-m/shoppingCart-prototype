import PropTypes from 'prop-types';
import styles from "../styles/inputQuantity.module.css"
import trashIcon from "../icons/trash-icon.png";
export default function InputQuantity({ value, changeValue }) {
  return (
    <div className="cartBtnContainer">
      <button className={styles.changeQuantityBtn} onClick={() => { changeValue(value - 1) }}>-</button>
      <input type="number" className={`${styles.inputBox}`} value={value} readOnly />
      {value < 20 ? <button className={styles.changeQuantityBtn} onClick={() => { changeValue(value + 1) }}>+</button> :
        <button className={styles.changeQuantityBtn} disabled>+</button>}

      <button className={`${styles.changeQuantityBtn} ${styles.trash}`} onClick={() => { changeValue(0) }}><img src={trashIcon} alt="trash"></img></button>
    </div>

  )
}
InputQuantity.propTypes = {
  value: PropTypes.number,
  changeValue: PropTypes.func,
}