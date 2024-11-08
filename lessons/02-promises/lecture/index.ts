// import fs from 'fs'
// const fsPromises = require('fs').promises // the way the docs show
import { promises as fsPromises } from 'fs' // the esm version
// import fetch from 'node-fetch'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json() as Record<string, any>)
    .then((data) => {
      return data.vehicles
    })
}

getPersonVehicles(1)
  .then((vehicles) => {
    const promises = vehicles.map((url) => getVehicle(url))
    return Promise.all(promises)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })
