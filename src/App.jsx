import './App.css' //all global selectors
import MainShop from './components/MainShop'
import { useEffect, useState } from 'react';

function App() {
  const { loading, shopData } = useFetchShop();
  // console.log('app.jsx', shopData, loading)
  return (
    <MainShop loading={loading} shopData={shopData} />
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
        // result.push(...categoriesArr);
        // Promise.allSettled([fetch()])

        // categoriesArr.forEach(async (cat) => {
        //   const currentCategoryResponse = await fetch(`${allFromCategoriAPI}/${cat}`)
        //   if (!currentCategoryResponse.ok) {
        //     throw new Error(`Bad response - ${currentCategoryResponse.status}`)
        //   }
        //   const categoryValuesArr = await currentCategoryResponse.json();
        //   console.log(categoryValuesArr)
        //   result.push({
        //     category: cat,
        //     values: [...categoryValuesArr],
        //   })
        // })
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
