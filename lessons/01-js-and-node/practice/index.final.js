const data = require('./data.json')
// console.log(data)

// Task:
// Output `Ryan's id is 2`

const ryan = data.users.find((user) => user.name.includes('Ryan'))
const firstName = ryan.name.split(' ')[0]
console.log(`${firstName}'s id is ${ryan.id}`)
