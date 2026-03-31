// // import fs from 'fs'
// import path from 'path'
// // const fsPromises = require('fs').promises // the way the docs show
// import { promises as fsPromises } from 'fs' // the esm version

const API = 'http://swapi.dev/api'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`${API}/people/${id}`)
    .then((response) => response.json() as Record<string, any>)
    .then((data) => {
      return data.vehicles
    })
}

getPersonVehicles(1)
  .then((vehicles) => {
    const p = vehicles.map((url) => getVehicle(url))
    return Promise.all(p) // resolves to an array of the results
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })
