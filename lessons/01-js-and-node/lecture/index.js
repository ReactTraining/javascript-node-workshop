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

const parsedObject = JSON.parse(json)

console.log(parsedObject.users[0])
