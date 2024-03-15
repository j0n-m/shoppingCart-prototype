import PropTypes from 'prop-types';
import Card from "./Card";
import Loading from './Loading';
import { Fragment } from 'react';

export default function Shop({ loading, shopData, updateCart, cart }) {
  // console.log('Shop.jsx', loading, shopData)
  let categories = [];
  let categorizedItems = {};


  function errorOccured() {
    console.error('Error occured while loading shop component');
    return (
      <p>Error Occured</p>
    )
  }
  shopData.forEach((o) => {
    for (const [prop, value] of Object.entries(o)) {
      let currentCategory = (o[prop].category);
      if (!categories.includes(currentCategory)) {
        categories.push(currentCategory);
        categorizedItems[currentCategory] = [];
      }
      categorizedItems[currentCategory].push(value);
    }
  })
  function formatString(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  const parseD = () => {
    return categories.map((category, index) =>
      <Fragment key={index}>
        <h2>{formatString(category)}</h2>
        <div className="card-container">
          {categorizedItems[category].map((el) =>
            <Card
              key={el.id + 1}
              updateCart={updateCart}
              id={el.id}
              imageSrc={el.image}
              title={el.title}
              price={el.price}
              cart={cart}
            ></Card>)}
        </div>
      </Fragment>
    )

  }
  // function parseData() {
  //   return (
  //     <>
  //       {/* Category Heading */}
  //       {categories.map((category, index) =>
  //         <><h2 key={index}>{formatString(category)}</h2>
  //           <div className="card-container">
  //             {categorizedItems[category].map((el) => <Card
  //               updateCart={updateCart}
  //               key={el.id}
  //               id={el.id}
  //               imageSrc={el.image}
  //               title={el.title}
  //               price={el.price}
  //               cart={cart}
  //             ></Card>)} </div>
  //         </>)}
  //     </>

  //   )
  // }

  return (
    <>
      {loading ? <Loading></Loading> : !shopData.length ? errorOccured() :
        parseD()}
    </>

  )
}
Shop.propTypes = {
  shopData: PropTypes.array,
  loading: PropTypes.bool,
  updateCart: PropTypes.func,
  cart: PropTypes.array,
}
