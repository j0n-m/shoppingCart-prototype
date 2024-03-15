import styles from '../styles/home.module.css';
import primaryBanner from '../assets/primaryBanner.webp'
import banner2 from '../assets/banner2.webp'
import bannerVideo from '../assets/banner.mp4';

export default function Home() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <h1 className={`${styles.bannerTitle}`}>Shop the Greatest Deals</h1>
        <img src={primaryBanner} alt="" className={`${styles.banner} ${styles.primaryBanner}`} />
      </div>

      <video autoPlay muted loop>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <p>Home.jsx</p> */}
      <img src={banner2} alt="banner" className={`${styles.banner}`} />
    </>

  )
}