const { readdirSync, readFileSync } = require('fs')
const path = require('path')

const getPosters = (source) => {
   let images = readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() !== true)
      .map((dirent) => dirent.name)

   let obj = {}
   images.forEach((img) => {
      const filename = path.parse(img).name
      const bitmap = readFileSync(`${source}/${img}`, { encoding: 'base64' })
      const imageUrl = `data:image/png;base64,${bitmap}`

      obj[filename] = imageUrl
   })
   return obj
}

module.exports = getPosters
