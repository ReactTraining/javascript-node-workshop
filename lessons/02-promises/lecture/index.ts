// import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
import { promises as fsPromises } from 'fs' // the esm version

// const dataPath = path.join(__dirname, `data.csv`)

// function getCSVFile(dataPath: string) {
//   return fsPromises
//     .readFile(dataPath, 'utf8')
//     .then((data) => {
//       // do whatever
//     })
//     .catch(() => {

//     })
// }

// getCSVFile(dataPath)
//   .then((x) => {
//     console.log(x)
//   })
//   .catch((error) => {
//     console.log('ERROR')
//     console.log(error)
//   })

///////////

const API = 'https://swapi.info/api/'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number) {
  return fetch(`${API}/people/${id}`)
    .then((response) => {
      return response.json() as Record<string, any>
    })
    .then((data) => {
      return data.vehicles as string[]
    })
}

getPersonVehicles(1).then((vehicles) => {
  const arrayOfPromises = vehicles.map((url) => {
    return getVehicle(url)
  })

  Promise.all(arrayOfPromises).then((arrayOfResults) => {
    console.log(arrayOfResults)
  })
})
