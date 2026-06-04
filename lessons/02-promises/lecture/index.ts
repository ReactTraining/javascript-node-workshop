// import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
import { promises as fsPromises } from 'fs' // the esm version

const dataPath = path.join(__dirname, `data.csv`)

function getCSVFile(dataPath: string) {
  return fsPromises.readFile(dataPath, 'utf8').then((data) => {
    console.log(data)
    return 123
  })
}

getCSVFile(dataPath)
  .then((x) => {
    console.log(x)
  })
  .catch((error) => {
    console.log('ERROR')
    console.log(error)
  })
