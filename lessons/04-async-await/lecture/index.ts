// import { User, createAccount, addAccountUser } from './users'

const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   const data = await fetch(url).then(res => res.json())
//   return data
// }

async function getVehicle(url: string) {
  const res = await fetch(url) // 2s <----
  const data = await res.json() // 0.000001
  return data
}

async function getPersonVehicles(id: number): Promise<string[]> {
  const response = await fetch(`${API}/people/${id}`)
  const data = (await response.json()) as Record<string, any>
  return data.vehicles
}

async function main2() {
  const vehicles = await getPersonVehicles(1)
  const p = vehicles.map((url) => getVehicle(url))
  const allVehicles = await Promise.all(p)
  console.log(allVehicles)
}

main2()

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
