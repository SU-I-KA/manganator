require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 8000

//middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, 'client/build')))
}

//routes

app.use('/api', require('./routes/dashboard'))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
