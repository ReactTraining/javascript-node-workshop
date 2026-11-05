import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   const results = await fetch(url).then((response) => response.json())
//   return results
// }

// async function getPersonVehicles(id: number) {
//   const response = await fetch(`${API}/people/${id}`)
//   const data = (await response.json()) as Record<string, any>
//   return data.vehicles
// }

// async function main() {
//   const vehicles = await getPersonVehicles(1)

//   const promises = vehicles.map((url) => getVehicle(url))
//   const allVehicles = await Promise.all(promises)
//   console.log(allVehicles)
// }

// main()

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

async function signup(formUser: User) {
  const account = await createAccount() // 2
  const user = await addAccountUser(account.accountId, formUser) // 2

  await Promise.all([emailUser(user), logNewUserStats(account.accountId)]) // 2
}

signup({ name: 'brad' }).then(() => {
  console.log('✅ User Added')
})

// // Remember "top-level" await
