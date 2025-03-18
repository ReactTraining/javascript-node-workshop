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
