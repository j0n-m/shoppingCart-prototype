import PropTypes from 'prop-types';
import Card from "./Card";

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
  function formatString(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  function parseData() {
    // for (const category of categories) {
    //   categories.map((cat, index) => <h2 key={index}>{formatString(cat)}</h2>)
    //   categorizedItems[category].map((el) => <Card key={el.id} props={el}></Card>)
    // }
    return (
      <>
        {/* Category Heading */}
        {categories.map((category, index) => <><h2 key={index}>{formatString(category)}</h2>
          <div className="card-container">
            {categorizedItems[category].map((el) => <Card
              updateCart={updateCart}
              key={el.id}
              id={el.id}
              imageSrc={el.image}
              title={el.title}
              price={el.price}
              cart={cart}
            ></Card>)} </div>
        </>)}
      </>

    )
  }
  // 
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
  // console.log(categories)
  // console.log(categorizedItems)

  return (
    <>
      {loading ? <p>Loading...</p> : !shopData.length ? errorOccured() :
        parseData()}
    </>

  )
}
Shop.propTypes = {
  shopData: PropTypes.array,
  loading: PropTypes.bool,
  updateCart: PropTypes.func,
  cart: PropTypes.array,
}
