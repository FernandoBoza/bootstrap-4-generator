const fs = require('fs-extra')

fs.copy('./node_modules/bootstrap-4-generator/config/src/css', './css', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/js', './js', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/scss', './scss', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/.babelrc', './.babelrc', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/.gitignore', './.gitignore', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/.npmignore', './.npmignore', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/gulpfile.js', './gulpfile.js', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/index.html', './index.html', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/package.json', './package.json', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

fs.copy('./node_modules/bootstrap-4-generator/config/src/README.md', './README.md', err => {
  if (err) return console.error(err)
  console.log('success!')
}) 

