import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   try {
//     const response = await fetch(url)
//     return await response.json()
//   } catch (error) {
//     console.error('Error fetching vehicle:', error)
//     throw error
//   }
// }

// async function getPersonVehicles(id: number) {
//   try {
//     const response = await fetch(`${API}/people/${id}`)
//     const data = (await response.json()) as Record<string, any> // 0.5

//     // A fn that is `async`: whatever it returns is the resolve value
//     return data.vehicles
//   } catch (error) {
//     console.error('Error fetching person vehicles:', error)
//     throw error
//   }
// }

// async function start() {
//   try {
//     const vehicles = await getPersonVehicles(1)
//     const promiseArray = vehicles.map((url) => getVehicle(url))
//     const x = await Promise.all(promiseArray)

//     console.log(x)
//   } catch (error) {
//     console.error('Error in start function:', error)
//   }
// }

// start()

/****************************************
  Part 2
*****************************************/

async function signup(user: User) {
  const account = await createAccount()
  const dbUser = await addAccountUser(account.accountId, user)
  await Promise.all([emailUser(dbUser), logNewUserStats(account.accountId)])
}

signup({ name: 'brad' }).then(() => {
  console.log('✅ User Added')
})

// Remember "top-level" await
