// import { promises as fsPromises } from 'fs' // the esm version
// import path from 'path'

// const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

// function getVehicle(url: string) {
//   return fetch(url).then((response) => response.json())
// }

// function getPersonVehicles(id: number): Promise<string[]> {
//   return fetch(`${API}/people/${id}`)
//     .then((response) => response.json() as Record<string, any>) // an object with "string" keys and "any" type for value
//     .then((data) => data.vehicles)
// }

// getPersonVehicles(1)
//   .then((vehicles) => {
//     const promises = vehicles.map((url) => getVehicle(url))
//     return Promise.all(promises)
//   })
//   .then((allVehicles) => {
//     console.log(allVehicles)
//   })

// const someAsyncThing = () => {
//   return new Promise((resolve, reject) => {
//     resolve({ name: 'brad' })
//   })
// }

// const someAsyncThing2 = () => {
//   return Promise.resolve('good stuff')
// }

// someAsyncThing2()
//   .then((answer) => {
//     console.log(answer)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
