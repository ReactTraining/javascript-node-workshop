// import { User, createAccount, addAccountUser } from './users'

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   return await fetch(url).then((response) => response.json())
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const data = (await fetch(`https://swapi.dev/api/people/${id}`).then((response) =>
//     response.json()
//   )) as any

//   return data.vehicles as string[]
// }

// async function main() {
//   const vehicles = await getPersonVehicles(1)
//   const p = vehicles.map((url) => getVehicle(url))
//   const data = await Promise.all(p)
//   console.log(data)
// }

// main()

/****************************************
  Part 2
*****************************************/

function signup(user: User) {
  return createAccount()
    .then((account) => {
      return addAccountUser(account.accountId, user)
    })
    .then((user) => {
      // emailUser(user)
      // logNewUserStats(account.accountId)
    })
}

signup({ name: 'brad' }).then(() => {
  console.log('✅ User Added')
})
