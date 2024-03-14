import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <h1 className={`${styles.bannerTitle}`}>Shop the Greatest Deals</h1>
        <img src="/src/primaryBanner.webp" alt="" className={`${styles.banner} ${styles.primaryBanner}`} />
      </div>

      <video autoPlay muted loop>
        <source src={'/src/banner.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <p>Home.jsx</p> */}
      <img src="/src/banner2.webp" alt="banner" className={`${styles.banner}`} />
    </>

  )
}