import PropTypes from 'prop-types';
import Home from './Home';
import Shop from './Shop';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Content({ loading, shopData }) {
  const { name } = useParams();
  // const { loading, shopData } = useFetchShop();
  const urlParam = name ? name.toLowerCase() : name;
  // console.log('loaded content.jsx', shopData)
  //Load the fetch for shop here - common parent for all webpages (shop/cart/home)
  //params is either undefined or shop or cart
  return (
    <main>
      {urlParam == 'shop' ? <Shop loading={loading} shopData={shopData}></Shop> :
        urlParam == 'cart' ? <p>cart</p> : <Home></Home>}
    </main>
  );
}

// Content.propTypes = {
//   data: PropTypes.object,
// }