/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.SECRET) // from .env

// // Community standard
// // "lecture-1": "NODE_ENV=development node lessons/01-js-and-node/lecture",
// console.log(process.env.NODE_ENV)

/**
 * Scope
 */

// var is function scoped
// let is block scoped
// const is block scoped and you cant change its value

// var x = [5, 6, 7]
// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

//   console.log(i)
//   console.log(item)
// }
// scope()

/**
 * Object and Array Literals
 */

// const list = [1,2,3]

/**
 * Function Types
 */

// // Function declaration
// function foo() {

// }

// // Function Expression
// const add = function (n1, n2) {

//   return n1 + n2
// }

// // Arrow Function Expression (ES6 aka ES2015)
// const addOne = (n1) => n1 + 1

// addOne(4) // 5

/**
 * Expressions and Expression Chaining
 */

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const list = ['a', 'b', 'c']

// const hasA = list.includes('a')

// console.log(hasA)

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
    return id ? `{ "id": ${id}, "name": "${name}" }` : false
  })
  .filter((item) => item)
  .join(',\n')

json = `{ "users": [${json}] }`
console.log(json)

console.log(JSON.parse(json))
