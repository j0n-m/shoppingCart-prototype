import Nav from './Nav';
import Content from './Content';
import Footer from './Footer'
import PropTypes from 'prop-types';

export default function MainShop({ loading, shopData, updateCart, cart }) {
  const hD = [{ title: "Home", id: 0 }, { title: 'Shop', id: 1 }, { title: 'Cart', id: 2 }];
  return (
    <section className="home">
      <Nav data={hD} cart={cart}></Nav>
      <Content loading={loading} shopData={shopData} updateCart={updateCart} cart={cart}></Content>
      <Footer></Footer>
    </section>
  )
}

MainShop.propTypes = {
  loading: PropTypes.bool,
  shopData: PropTypes.array,
  updateCart: PropTypes.func,
  cart: PropTypes.array
}