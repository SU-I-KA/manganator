import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ContextProvider } from './context/Context'

import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import Manga from './pages/Manga/Manga'

const cache = {}

function importAll(r) {
   r.keys().forEach((key) => (cache[key] = r(key)))
}

// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))

// const images = Object.entries(cache).map((module) => module[1].default)

function App() {
   return (
      // 720px solo leveling
      <>
         <ContextProvider>
            <Router>
               <Routes>
                  <Route path='/manga/:id' element={<Manga />} />
                  <Route path='/' element={<Dashboard />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </Router>
         </ContextProvider>
      </>
      // <div
      //    style={{
      //       display: 'block',
      //       width: '96vw',
      //       paddingRight: 10,
      //       paddingLeft: 10,
      //       maxWidth: '1004px',
      //       margin: 'auto',
      //    }}
      // >
      //    {Object.entries(cache).map((module) => {
      //       const image = module[1].default
      //       const name = module[0].replace('./', '')
      //       return (
      //          <img
      //             style={{ width: '100%', margin: 'auto', display: 'block' }}
      //             src={image}
      //             key={name}
      //             alt={name}
      //          />
      //       )
      //    })}
      // </div>
   )
}

export default App
