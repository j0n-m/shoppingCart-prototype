import Nav from './Nav';
import Content from './Content';
import Footer from './Footer'

export default function MainShop({ loading, shopData }) {
  const hD = [{ title: "Home", id: 0 }, { title: 'Shop', id: 1 }, { title: 'Cart', id: 2 }];
  return (
    <section className="home">
      <Nav data={hD}></Nav>
      <Content loading={loading} shopData={shopData}></Content>
      <Footer></Footer>
    </section>
  )
}