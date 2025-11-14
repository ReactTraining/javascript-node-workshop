import z from 'zod'
// // import fs from 'fs'
// import path from 'path'
// // const fsPromises = require('fs').promises // the way the docs show
// import { promises as fsPromises } from 'fs' // the esm version

// function getCSVFile(path: string) {
//   return fsPromises.readFile(path, 'utf8')
// }

// const dataPath = path.join(__dirname, `data.csv`)

// getCSVFile(dataPath)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     //
//   })

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// const userSchema = z.object({
//   userId: z.number(),
//   id: z.number().min(1, { message: 'Must be at least one ' }),
//   title: z.string(),
//   completed: z.boolean(),
// })

// export type UserType = z.infer<typeof userSchema>

// function getUser(id: number) {
//   return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then((response) => response.json())
//     .then((untrustedUser) => {
//       const trustedUser = userSchema.parse(untrustedUser)
//       return trustedUser
//     })
// }

// getUser(1)
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(() => {})

// Change the lesson to start
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
    const promises = vehicles.map((url) => getVehicle(url))
    return Promise.all(promises)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })
