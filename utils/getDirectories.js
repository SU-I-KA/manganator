const { readdirSync } = require('fs')

const getDirectories = (source) => {
   return readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
}

module.exports = getDirectories
