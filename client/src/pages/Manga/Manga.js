import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import axios from '../../axios/axios'
import { Context } from '../../context/Context'

import {useKeyPressEvent} from 'react-use';

import Loading from '../../components/Loading/Loading'

import styles from './Manga.module.css'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

function Manga() {
   const { directory } = useContext(Context)
   const { id } = useParams()
   const [images, setImages] = useState([])
   const [chapter, setChapter] = useState(1)
   const [loading, setLoading] = useState(null)
   const [nav, setNav] = useState({
      next: false,
      previous: false,
   })

   const getData = async () => {
      setLoading(true)
      setImages(null)
      setNav({
         next: false,
         previous: false,
      })
      try {
         const { data } = await axios.get(`/manga/${id}`, {
            headers: { directory: `${directory}/${id}`, chapter },
         })
         setImages(data.results)
         setNav({
            next: data.next,
            previous: data.previous,
         })
         setLoading(false)
      } catch (err) {
         console.error(err.message)
      }
   }
   
   useKeyPressEvent('ArrowRight', increment)
   useKeyPressEvent('ArrowLeft', decrement)
   
   function increment() {
	   if (nav.next === true && loading === false) setChapter(chapter + 1)
		return;
   }
   
   function decrement(){
	   if (nav.previous === true && loading === false) setChapter(chapter - 1)
		return;
   }
   
   
   /*
   const handleKeyPress = (event) => {
		if (event.key === "ArrowLeft" && nav.previous === true){
			setChapter(chapter - 1)
		} 
		if (event.key === "ArrowRight" && nav.next === true){
			setChapter(chapter + 1)
		}
	}

	
	useEffect(()=>{
		document.addEventListener('keydown', handleKeyPress);
		return () => document.removeEventListener('keydown', handleKeyPress)
	},[])
	*/

   useEffect(() => {
      getData()
      if (chapter > 0) {
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         })
      }
      // eslint-disable-next-line
   }, [chapter])

   const headStyle = {
      textTransform: 'capitalize',
      fontWeight: '600',
      fontSize: '20px',
      fontFamily: 'Lato',
   }

   const mangaTitle = id.replace(/-/g, ' ')

   return (
      <>
         <div className={styles.head}>
            <p
               style={headStyle}
               title={mangaTitle.length > 81 ? mangaTitle : null}
            >
               {mangaTitle.substring(0, 76)} - Chapter {chapter}
            </p>
            <div className={styles.topNavigator}>
               <button
                  onClick={() => setChapter(chapter - 1)}
                  disabled={!nav.previous}
               >
                  <FaArrowLeft />
               </button>
               <button
                  onClick={() => setChapter(chapter + 1)}
                  disabled={!nav.next}
               >
                  <FaArrowRight />
               </button>
            </div>
         </div>
         <div
            style={{
               display: 'block',
               width: '96vw',
               paddingRight: 10,
               paddingLeft: 10,
               maxWidth: '1004px',
               margin: 'auto',
            }}
         >
            {loading ? (
               <Loading />
            ) : (
               images?.map?.((image, index) => {
                  return (
                     <img
                        style={{
                           width: '100%',
                           margin: 'auto',
                           display: 'block',
                        }}
                        src={image}
                        key={image}
                        alt={`page-${index}`}
                     />
                  )
               })
            )}
         </div>
         {loading === false && (
            <div className={styles.navBtns}>
               <button
                  onClick={() => setChapter(chapter - 1)}
                  disabled={!nav.previous}
               >
                  previous
               </button>
               <button
                  onClick={() => setChapter(chapter + 1)}
                  disabled={!nav.next}
               >
                  next
               </button>
            </div>
         )}
         <ScrollToTop />
      </>
   )
}

export default Manga
