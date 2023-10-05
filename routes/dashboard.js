const router = require('express').Router()
const validInfo = require('../middleware/validInfo')
const getDirectories = require('../utils/getDirectories')
const getPosters = require('../utils/getPosters')
const getImages = require('../utils/getImages')

// get all boards
router.post('/dashboard', validInfo, async (req, res) => {
   const { directory } = req.body
   try {
      const directories = getDirectories(directory)
      //console.log(directories)
      const images = getPosters(directory)
      //console.log(images)

      res.status(200).json({
         status: 'success',
         results: directories,
         images,
      })
   } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
   }
})

//Get a board
router.get('/manga/:id', async (req, res) => {
   // const id = req.params.id
   const directory = req.header('directory')
   const chapter = req.header('chapter')
   let next, previous

   try {
      const chaptersNums = getDirectories(directory)
      const images = getImages(`${directory}/${chapter}`)

      if (chapter < chaptersNums.length) {
         next = true
      } else {
         next = false
      }

      if (chapter > 1) {
         previous = true
      } else {
         previous = false
      }

      res.status(200).json({
         status: 'success',
         next,
         previous,
         results: images,
      })
   } catch (err) {
      console.log(err)
   }
})

module.exports = router
