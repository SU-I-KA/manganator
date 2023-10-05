const { readdirSync, readFileSync } = require('fs')
const path = require('path')

const getImages = (source) => {
   let images = readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() !== true)
      .map((dirent) => dirent.name).sort(function(a, b) {
		return parseInt(path.parse(a).name) - parseInt(path.parse(b).name);
	})

   return images?.map?.((img) => {
      const bitmap = readFileSync(`${source}/${img}`, { encoding: 'base64' })
      const imageUrl = `data:image/png;base64,${bitmap}`
      return imageUrl
   })
}

module.exports = getImages
