const fs = require('fs-extra')

fs.copy('./css/', '../css', err => {
  if (err) return console.error(err)

  console.log('success!')
})