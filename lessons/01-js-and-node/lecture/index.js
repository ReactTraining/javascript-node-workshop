// ES6 aka ES2015
// const and let (block scoped)

// var x = [5, 6, 7]
// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

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

// const addOne = (n1) => n1 + 1

// addOne(1) // 2

/**
 * Expressions and Expression Chaining
 */

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const users = [1, 2, 3]

// users.includes(5) // false
// 'brad'.includes('b') // true

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
    const [id, name] = item.split(',') // ['1', ' Brad Westfall']
    return id ? `{ "id": ${id}, "name": "${name.trim()}" }` : false
  })
  .filter(Boolean)
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
