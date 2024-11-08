import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

/****************************************
  Part 1
*****************************************/

// // async function getVehicleOrig(url: string) {
// //   const data = await fetch(url).then((response) => response.json())
// //   return data
// // }

// // async function getVehicleOrig(url: string) {
// //   const resObject = await fetch(url)
// //   const data = await resObject.json()
// //   return data
// // }

// When you mark a fn as async, it means that function will ALWAYS return a promise
// and whatever you returned is the resolve of that promise
async function getVehicle(url: string) {
  const response = await fetch(url).then((response) => response.json())
  return response
}

async function getPersonVehicles(id: number): Promise<string[]> {
  // return fetch(`https://swapi.dev/api/people/${id}`)
  //   .then((response) => response.json() as Record<string, any>)
  //   .then((data) => data.vehicles)
  const data = await fetch(`https://swapi.dev/api/people/${id}`).then(
    (response) => response.json() as Record<string, any>
  )
  return data.vehicles
}

async function main() {
  const vehicles = await getPersonVehicles(1) // js has moved on to other things in the EL
  const p = await vehicles.map((url) => getVehicle(url))
  const allVehicles = await Promise.all(p) // js has moved on to other things in the EL
  console.log(allVehicles)
}

main()

/****************************************
  Part 2
*****************************************/

// function signup(user: User) {
//   return createAccount()
//     .then((account) => {
//       // here I have an account.accountId
//       const x = compute()
//       return addAccountUser(account.accountId, user)
//     })
//     .then((user) => {
//       // here I have a user.id
//       return Promise.all([emailUser(user), logNewUserStats(account.accountId)])

//     })
// }

async function signup(user: User) {
  const account = await createAccount()
  const dbUser = await addAccountUser(account.accountId, user)

  return Promise.allSettled([emailUser(dbUser), logNewUserStats(account.accountId)])
}

signup({ name: 'brad' })
  .then(() => {
    console.log('✅ User Added')
  })
  .catch((err) => {
    console.log(err)
  })
