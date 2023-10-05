import React from 'react'

import styles from './DashLoading.module.css'

function DashLoading() {
   return (
      <div className={styles.loadingContainer}>
         <div className={styles.loading}></div>
         <div className={styles.loadingText}>loading</div>
      </div>
   )
}

export default DashLoading
