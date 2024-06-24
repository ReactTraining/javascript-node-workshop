/**
 * Globals
 */

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
// }
// scope()

/**
 * Object and Array Literals
 */

// const person = {
//   name: 'brad',
//   age: 54,
//   occupation: 'pilot',
// }

// const { name, ...x } = person

// console.log(x)

/**
 * Function Types
 */

/**
 * Expressions and Expression Chaining
 */

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const myArray = [1, 2, 3]

// const total = myArray.map((i) => i + 17).reduce((soFar, nextItem) => soFar + nextItem, 0)

// console.log(total)

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .filter(Boolean)
  .map((item) => {
    const [id, name] = item.split(',')
    return `{ "id": ${id}, "name": "${name.trim()}" }`
  })
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
