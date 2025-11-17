import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   const data = await fetch(url).then((response) => response.json())
//   return data
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const response = await fetch(`${API}/people/${id}`)
//   const data = (await response.json()) as Record<string, any>
//   return data.vehicles
// }

// async function main2() {
//   const vehicles = await getPersonVehicles(1)

//   const promises = vehicles.map((url) => getVehicle(url))
//   const allVehicles = await Promise.all(promises)
//   console.log(allVehicles)
// }

// main2()

/****************************************
  Part 2
*****************************************/

async function signup(user: User) {
  const account = await createAccount()
  const dbUser = await addAccountUser(account.accountId, user)

  const [r1, r2] = await Promise.all([emailUser(dbUser), logNewUserStats(account.accountId)])
}

signup({ name: 'brad' }).then(() => {
  console.log('✅ User Added')
})
