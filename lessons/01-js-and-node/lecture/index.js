/**
 * Globals
 */

// // https://nodejs.org/docs/latest/api/globals.html
// console.log(process.versions)
// console.log('process.cwd():', process.cwd())
// console.log('__dirname:', __dirname)
// console.log('__filename:', __filename)

/**
 * Scope
 */

// var x = [5, 6, 7]
// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

//   // console.log(i)
//   // console.log(item)
// }
// scope()

/**
 * Function Types
 */

// Function Declaration
// function add(n1, n2) {
//   this
// }

// // Function Expression
// const add = function (n1, n2) {
//   this
// }

// const add = (n1, n2) => n1 + n2

// const addOne = (n1) => n1 + 1

/**
 * Expressions and Expression Chaining
 */

// function getPerson() {
//   return { name: 'brad', age: 90 }
// }

// const result = getPerson().name.substring(0, 2)

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const list = [1, 2, 3]

// const total = list.reduce((currentTotal, n) => currentTotal + n, 0)

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, 'data.csv')
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .map((item) => {
    const [id, name] = item.split(',') // ['1', ' Michael Jackson']
    return name ? `{ "id": ${id}, "name": "${name.trim()}" }` : false
  })
  .filter(Boolean)
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
