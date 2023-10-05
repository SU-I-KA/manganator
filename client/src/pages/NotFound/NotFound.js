import React from 'react'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <Link to='/' className={styles.notfound}>
         <header className={styles.top__header}></header>

         {/* dust particel */}
         <div>
            <div className={styles.starsec}></div>
            <div className={styles.starthird}></div>
            <div className={styles.starfourth}></div>
            <div className={styles.starfifth}></div>
         </div>
         {/* <!--Dust particle end---> */}

         <div className={styles.lamp__wrap}>
            <div className={styles.lamp}>
               <div className={styles.cable}></div>
               <div className={styles.cover}></div>
               <div className={styles.in__cover}>
                  <div className={styles.bulb}></div>
               </div>
               <div className={styles.light}></div>
            </div>
         </div>
         {/* <!-- END Lamp --> */}
         <section className={styles.error}>
            {/* <!-- Content --> */}
            <div className={styles.error__content}>
               <div className={`${styles.error__message} ${styles.message}`}>
                  <h1 className={styles.message__title}>Page Not Found</h1>
                  <p className={styles.message__text}>
                     We're sorry, the page you were looking for isn't found
                     here. The link you followed may either be broken or no
                     longer exists. Please try again, or take a look at our.
                  </p>
               </div>
               <div className={`${styles.error__nav} ${styles.e__nav}`}>
                  <Link to='/' className={styles.e__nav__link}></Link>
               </div>
            </div>
            {/* <!-- END Content --> */}
         </section>
      </Link>
   )
}

export default NotFound
