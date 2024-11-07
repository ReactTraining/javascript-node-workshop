// const products = [
//   { id: 1, name: 'foo' },
//   { id: 2, name: 'foofds' },
//   { id: 3, name: 'foofdsfds' },
// ]

// const ids = [1, 3]

// const cart = ids.reduce((collection, id) => {
//   const found = products.find((item) => item.id === id)
//   collection.push(found)
//   return collection
// }, [])

// console.log(cart)

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n') // string to array
  .filter(Boolean)
  .map((item) => {
    const [x, y] = item.split(',') // item: '1, M' -> [1, ' M']
    return `{ "id": ${x}, "name": "${y.trim()}" }`
  })
  .join(',\n') // array to string

json = `{ "users": [${json}] }` // well formed json

const dataset = JSON.parse(json)
console.log(dataset.users[2])
