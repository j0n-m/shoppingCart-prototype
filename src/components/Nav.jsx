import PropTypes from 'prop-types';
import styles from '../styles/nav.module.css'
import cartIcon from '../assets/cart-icon.png'
import { Link } from 'react-router-dom';

export default function Nav({ data, cart }) {
  return (
    <nav>
      <ul>
        {data.map((link) =>
          link.title == "Cart" ?
            <li key={link.id} className={`${styles.cartListItem} ${styles.navItem}`}><Link to="/cart"><img src={cartIcon} alt="cart" />{cart.length ? <span className='cartItemsNum'>{cart.length}</span> : ''}</Link></li> : <li key={link.id} className={`${styles.navItem}`}><Link to={`/${link.title.toLowerCase()}`}>{link.title}</Link></li>
        )}
      </ul>
    </nav >
  );
}

Nav.propTypes = {
  data: PropTypes.array.isRequired,
  cart: PropTypes.array
}