import React, { useContext, useState } from 'react'
import axios from '../../axios/axios'
import { Link, useNavigate } from 'react-router-dom'

import { Context } from '../../context/Context'

import DashLoading from '../../components/DashLoading/DashLoading'

import styles from './Dashboard.module.css'

function Dashboard() {
   const { boards, setBoards, directory, setDirectory } = useContext(Context)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   let navigate = useNavigate()

   const onChange = (e) => setDirectory(String.raw`${e.target.value}`)

   const onSubmitForm = async (e) => {
      e.preventDefault()
      setLoading(true)
      try {
         const body = { directory }
         const response = await axios.post('/dashboard', body)
         // console.log(response)
         const { results, images } = response.data
         if (results) {
            setError(false)
            setBoards({
               titles: results,
               images: images,
            })
            setLoading(false)
            // console.log(results)
         } else {
            setError(true)
         }
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <div className={styles.container}>
         <div className={`${styles.row} ${styles.loginWrap}`}>
            <div className={styles.header}>
               <div className={styles.title}>Manganator</div>
               <h1>Type in a directory...</h1>
            </div>
            <form onSubmit={onSubmitForm}>
               <div className={styles.formGroup}>
                  <input
                     type='text'
                     autoComplete='on'
                     name='directory'
                     value={directory}
                     placeholder='type in a directory'
                     onChange={(e) => onChange(e)}
                     className={styles.formControl}
                  />
               </div>

               <button type='submit' className={styles.loginBtn}>
                  submit
               </button>
            </form>
         </div>

         {loading ? (
            <DashLoading />
         ) : boards?.titles?.length > 0 ? (
            <section className={styles.boards}>
               {boards?.titles?.map?.((board) => {
                  const imgUrl = boards?.images?.[board]
                     ? boards?.images?.[board]
                     : `https://placehold.co/400x600?text=${board}`
                  return (
                     <div className={styles.board} key={board}>
                        <div
                           className={styles.preview}
                           onClick={() => navigate(`/manga/${board}`)}
                        >
                           <img src={imgUrl} alt={board} title={board} />
                        </div>
                        <div className={styles.info}>
                           <h3>
                              <Link to={`/manga/${board}`} title={board}>
                                 {board.length > 22
                                    ? `${board
                                         .replace(/-/g, ' ')
                                         .substring(0, 17)}..`
                                    : board.replace(/-/g, ' ')}
                              </Link>
                           </h3>
                        </div>
                     </div>
                  )
               })}
            </section>
         ) : null}
         {error && <div className={styles.error}>{error}</div>}

         <p
            className={styles.copyright}
            style={{
               position: boards?.titles?.length > 0 ? 'relative' : 'fixed',
            }}
         >
            developed by basem agwa
         </p>
      </div>
   )
}

export default Dashboard
