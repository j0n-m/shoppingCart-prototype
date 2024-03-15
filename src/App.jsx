import './App.css' //all global selectors
import MainShop from './components/MainShop'
import { useEffect, useState } from 'react';

function App() {
  const { loading, shopData } = useFetchShop();
  const [cart, setCart] = useState([]);
  // [{imageSrc, title, price, quantity, id}]

  const updateCart = ({ imageSrc, title, price, quantity, id }) => {
    const cartItem = {
      id,
      title,
      quantity,
      price,
      imageSrc,
    }
    const itemIndex = cart.findIndex((item) => item.id == id);
    if (itemIndex === -1) {
      let newCart = [...cart, cartItem]
      setCart([...newCart]);
      console.log("added new item to cart!", newCart)
    } else {
      const oldCart = [...cart];
      quantity == 0 ? oldCart.splice(itemIndex, 1) : oldCart[itemIndex] = Object.assign({}, { ...cartItem });

      setCart(oldCart);
      console.log("updated cart with: ", oldCart)
    }
  }
  return (
    <MainShop loading={loading} shopData={shopData} updateCart={updateCart} cart={cart} />
    // <Card imageSrc="" title="test" price={12}></Card>
  )
}
function useFetchShop() {
  const [loading, setLoading] = useState(true);
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      let result = [];
      const allCategoriesAPI = 'https://fakestoreapi.com/products/categories';
      // const allProductsAPI = 'https://fakestoreapi.com/products/';
      const allFromCategoriAPI = 'https://fakestoreapi.com/products/category';
      try {
        const categories = await fetch(allCategoriesAPI, { mode: 'cors' });
        const categoriesArr = await categories.json();
        console.log('Categories in dataFetch(): ', categoriesArr);
        for (const cat of categoriesArr) {
          const response = await fetch(`${allFromCategoriAPI}/${cat}`);
          if (!response.ok) {
            throw new Error(`Bad response to fetch products- ${response.status}`)
          }
          const products = await response.json();
          result.push({ ...products });
        }

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setShopData([...result]);
      }
    }
    dataFetch();
  }, [])

  return { loading, shopData };
}

export default App
