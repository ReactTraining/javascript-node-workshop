import { getUsers } from './users'

function getHTMLNames() {
  return getUsers().then((users) => {
    return users.map((user) => user.name)
  })
  // .then((names) => {
  //   return names.map((n) => `<h1>${n}</h1>`).join('\n')
  // })
}

// function getHTMLNames1(): Promise<string> {
//   return getUsers().then((users) => users.map((u) => `<h1>${u.name}</h1>`).join('\n'))
// }

getHTMLNames().then((names) => {
  // console.log(names)
})
