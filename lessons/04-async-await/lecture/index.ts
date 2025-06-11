// import { User, createAccount, addAccountUser } from './users'

const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`${API}/people/${id}`)
    .then((response) => response.json() as Record<string, any>)
    .then((data) => data.vehicles)
}

getPersonVehicles(1)
  .then((vehicles) => {
    const p = vehicles.map((url) => getVehicle(url))
    return Promise.all(p)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })

/****************************************
  Part 2
*****************************************/

// function signup(user: User) {
//   return createAccount()
//     .then((account) => {
//       return addAccountUser(account.accountId, user)
//     })
//     .then((user) => {
//       // emailUser(user)
//       // logNewUserStats(account.accountId)
//     })
// }

// signup({ name: 'brad' }).then(() => {
//   console.log('✅ User Added')
// })

// // Remember "top-level" await
