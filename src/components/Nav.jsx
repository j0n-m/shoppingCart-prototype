import PropTypes from 'prop-types';
import styles from '../styles/nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav({ data }) {
  return (
    <nav>
      <ul>
        {data.map((link) =>
          link.title == "Cart" ?
            <li key={link.id} className={`${styles.cartListItem} ${styles.navItem}`}><Link to="/cart"><img src="/src/cart-icon.png" alt="cart" /></Link></li> : <li key={link.id} className={`${styles.navItem}`}><Link to={`/${link.title.toLowerCase()}`}>{link.title}</Link></li>
        )}
      </ul>
    </nav >
  );
}

Nav.propTypes = {
  data: PropTypes.array.isRequired,
}