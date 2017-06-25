const fs = require('fs-extra')

fs.copy('./config/src/css', './css', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/js', './js', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/scss', './scss', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/.babelrc', './.babelrc', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/.gitignore', './.gitignore', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/gulpfile.js', './gulpfile.js', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/index.html', './index.html', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/package.json', './package.json', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./config/src/README.md', './README.md', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

