import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'

function ScrollToTop() {
   const [visible, setVisible] = useState(false)
   const [showBottomBtn, setShowBottomBtn] = useState(true)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      if (scrolled > 300) {
         setVisible(true)
      } else if (scrolled <= 300) {
         setVisible(false)
      }
      if (scrollHeight - scrolled < clientHeight + 300) {
         setShowBottomBtn(false)
      } else {
         setShowBottomBtn(true)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   const scrollToBottom = () => {
      window.scrollTo({
         top: document.documentElement.scrollHeight,
         behavior: 'smooth',
      })
   }

   useEffect(() => {
      window.addEventListener('scroll', toggleVisible)
      return () => window.removeEventListener('scroll', toggleVisible)
   }, [])

   const styleUp = {
      position: 'fixed',
      width: '32px',
      left: '95%',
      bottom: '78px',
      height: '32px',
      fontSize: '2rem',
      zIndex: '1',
      cursor: 'pointer',
      color: 'green',
      display: visible ? 'inline' : 'none',
   }

   const styleDwn = {
      position: 'fixed',
      width: '32px',
      left: '95%',
      bottom: '40px',
      height: '32px',
      fontSize: '2rem',
      zIndex: '1',
      cursor: 'pointer',
      color: 'green',
      display: showBottomBtn ? 'inline' : 'none',
   }

   return (
      <>
         <div style={styleUp} onClick={scrollToTop}>
            <FaArrowCircleUp style={{}} />
         </div>
         <div style={styleDwn} onClick={scrollToBottom}>
            <FaArrowCircleDown style={{}} />
         </div>
      </>
   )
}

export default ScrollToTop
