import fs from 'fs'
import path from 'path'
import { promises as fsPromises } from 'fs' // the esm version

// const dataPath = path.join(__dirname, `datDDa.csv`)

// // Let's make this asynchronous

// function getCSV(path: string) {
//   return fsPromises
//     .readFile(dataPath, 'utf8')
//     .then((data) => {
//       // validation

//       return data
//     })
//     .catch((error) => {
//       console.log('error', error)
//     })
// }

// getCSV(dataPath).then((data) => {
//   console.log('>>>>>', data)
// })

const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`${API}/people/${id}`)
    .then((response) => response.json() as Record<string, any>)
    .then((data) => data.vehicles)
}

getPersonVehicles(1)
  .then((vehicles) => {
    const promiseArray = vehicles.map((url) => getVehicle(url))
    return Promise.all(promiseArray)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })
