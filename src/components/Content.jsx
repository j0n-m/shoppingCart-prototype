import PropTypes from 'prop-types';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { useParams } from 'react-router-dom';

export default function Content({ loading, shopData, updateCart, cart }) {
  const { name } = useParams();
  // const { loading, shopData } = useFetchShop();
  const urlParam = name ? name.toLowerCase() : name;
  // console.log('loaded content.jsx', shopData)
  //Load the fetch for shop here - common parent for all webpages (shop/cart/home)
  //params is either undefined or shop or cart
  return (
    <main>
      {urlParam == 'shop' ? <Shop loading={loading} shopData={shopData} updateCart={updateCart} cart={cart}></Shop> :
        urlParam == 'cart' ? <Cart cart={cart}></Cart> : <Home></Home>}
    </main>
  );
}

Content.propTypes = {
  shopData: PropTypes.array,
  loading: PropTypes.bool,
  updateCart: PropTypes.func,
  cart: PropTypes.array,
}