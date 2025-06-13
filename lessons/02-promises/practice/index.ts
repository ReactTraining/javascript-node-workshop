import { getUsers } from './users'

// Task:
// Output HTML for just the names, similar to:
// <h1>Michael Jackson</h1>
// <h1>Ryan Florence</h1>
// <h1>Brad Westfall</h1>
// <h1>Chance Stickland</h1>

function getHTMLNames(): Promise<string> {
  return getUsers()
    .then((users) => users.map((user) => user.name))
    .then((names) => {
      return names.map((name) => `<h1>${name}</h1>`).join('\n')
    })
}

getHTMLNames().then((names) => {
  console.log(names)
})
