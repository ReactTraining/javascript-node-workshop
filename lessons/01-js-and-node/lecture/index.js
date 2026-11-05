/**
 * Globals
 */

// // https://nodejs.org/docs/latest/api/globals.html
// console.log(process.versions)
// console.log('process.cwd():', process.cwd())
// console.log('__dirname:', __dirname)
// console.log('__filename:', __filename)

/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.FOO) // from .env

// // Community standard
// // "lecture-1": "NODE_ENV=development node lessons/01-js-and-node/lecture",
// console.log(process.env.NODE_ENV)

/**
 * Scope
 */

// var - fn
// const - block (cannot) <-- 99.9%
// let - block (can be reassigned)

// const x = [5, 6, 7]
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

// const user = {
//   name: 'brad',
//   age: 89,
// }

/**
 * Function Types
 */

// // // Function Declaration
// function foo() {

// }

// // // Function Expression
// // const foo = function (a) {

// // }

// // Arrow Function (ES2015)
// const addOne = () => num1 + 1

// const answer = addOne(4)
// console.log(answer)

/**
 * Expressions and Expression Chaining
 */

// function getName() {
//   return 'brad'
// }

// const myName = getName().substring(0, 2).toUpperCase()
// console.log(myName)

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const list = [1, 2, 3]

// const total = list.reduce((totalSoFar, num) => {
//   return totalSoFar + num
// }, 0)

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

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
