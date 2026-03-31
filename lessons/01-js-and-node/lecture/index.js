// https://nodejs.org/docs/latest/api/globals.html
// console.log(process.versions)
// console.log('process.cwd():', process.cwd())
// console.log('__dirname:', __dirname)
// console.log('__filename:', __filename)

/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.SECRET) // from .env

/**
 * Scope
 */

// var x = [5, 6, 7]
// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]

//     console.log(item)
//   }
// }
// scope()

/**
 * Object and Array Literals
 */

// const user = {}
// const list = []

/**
 * Function Types
 */

// const addOne = (x) => x + 1

// addOne(6) // 7

// const someFn = () => ({ name: 'brad' })

/**
 * Expressions and Expression Chaining
 */

// const foo = 'brad'
// const x = foo.toUpperCase().substring(0, 4)

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const list = [1, 2, 3]

// const theNumber = list.find((item) => {
//   return item > 2
// })

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .map((item) => {
    const [id, name] = item.split(',')
    return id ? `{ "id": ${id}, "name": "${name.trim()}" }` : false
  })
  .filter(Boolean)
  .join(',\n')

/**
 * For loop + fetch (imaginary API)
 * Note: `fetch` is built-in in modern Node versions.
 */
// const userIds = [1, 2, 3]
//
// ;(async () => {
//   for (let i = 0; i < userIds.length; i++) {
//     const id = userIds[i]
//     const res = await fetch(`https://api.example.com/users/${id}`)
//     const user = await res.json()
//     console.log('user:', user)
//   }
// })()

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
