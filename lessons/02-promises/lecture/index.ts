import fs from 'fs'
// import path from 'path'
// import { promises as fsPromises } from 'fs' // the esm version

const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<any> {
  return fetch(`${API}/people/${id}`)
    .then((response) => response.json() as Record<string, any>)
    .then((data) => data.vehicles as string[])
    .then((vehicles) => {
      const promiseArray = vehicles.map((url) => getVehicle(url))
      return Promise.all(promiseArray)
    })
    .then((finalResults) => {
      console.log(finalResults)
    })
}

getPersonVehicles(1)
