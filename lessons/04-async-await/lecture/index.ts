import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   return await fetch(url).then((response) => response.json())
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const data = await fetch(`${API}/people/${id}`).then(
//     (response) => response.json() as Record<string, any>
//   )
//   return data.vehicles
// }

// async function main() {
//   const vehicles = await getPersonVehicles(1)
//   const promiseArray = vehicles.map((url) => getVehicle(url))
//   const allVehicles = await Promise.all(promiseArray)
//   console.log(allVehicles)
// }

// main()
// console.log('b')

/****************************************
  Part 2
*****************************************/

// function signup(user: User) {
//   return createAccount()
//     .then((account) => {
//       return addAccountUser(account.accountId, user)
//     })
//     .then((user) => {

//       emailUser(user)
//       logNewUserStats(account.accountId)

//     })
// }

// async function signup(userInput: User) {
//   const account = await createAccount()
//   const user = await addAccountUser(account.accountId, userInput)
//   Promise.all([emailUser(user), logNewUserStats(account.accountId)])
// }

// signup({ name: 'brad' }).then(() => {
//   console.log('✅ User Added')
// })

// // Remember "top-level" await

function sleep(ms: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

sleep(1000).then(() => {
  console.log('it has been one second')
})
