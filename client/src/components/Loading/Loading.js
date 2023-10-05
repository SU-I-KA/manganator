import React from 'react'

import styles from './Loading.module.css'

function Loading() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.loader}>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderText}></div>
         </div>
      </div>
   )
}

export default Loading
