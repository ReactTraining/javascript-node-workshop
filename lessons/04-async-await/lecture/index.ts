// import { User, createAccount, addAccountUser } from './users'

// // const API = 'http://localhost:3333'
const API = 'http://swapi.info/api'

// /****************************************
//   Part 1
// *****************************************/

async function getVehicle(url: string) {
  const response = await fetch(url)
  const data = (await response.json()) as Record<string, any>
  return data
}

async function getPersonVehicles(id: number) {
  const response = await fetch(`${API}/people/${id}`) // 6s
  const data = (await response.json()) as Record<string, any>
  return data.vehicles as string[]
}

async function main() {
  const vehicles = await getPersonVehicles(1)
  const promises = vehicles.map((url) => getVehicle(url))
  const arrayOfResults = await Promise.all(promises)
  console.log(arrayOfResults)
}

main()

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
