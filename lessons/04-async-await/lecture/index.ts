import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// const myFn = async function () {
//   // here
// }
// const x = myFn()
// console.log(x)

// ---

// async function wait(ms) {
//   await new Promise((res) => setTimeout(res, ms))
// }

// async function somePromise(x) {
//   await wait(1000)
//   if (x === 4) {
//     // return Promise.reject('4 is no good')
//     throw '4 is no good'
//   }
//   return x
// }

// async function main() {
//   console.time()
//   const array = [
//     somePromise(1),
//     somePromise(2),
//     somePromise(3),
//     somePromise(4),
//     somePromise(5),
//     somePromise(6),
//   ]

//   console.timeEnd()
//   console.log(array)
//   const final = await Promise.allSettled(array)
//   console.log(final)
// }

// main()

/****************************************
  Part 1
*****************************************/

// async function getVehicle(url: string) {
//   return await fetch(url).then((res) => res.json())
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const data = (await fetch(`https://swapi.dev/api/people/${id}`).then((response) =>
//     response.json()
//   )) as Record<string, any>

//   return data.vehicles // we're returning a promise that resolves vehicles
// }

// async function main() {
//   const vehicles = await getPersonVehicles(1)
//   const allVehicles = await Promise.all(vehicles.map((url) => getVehicle(url)))
//   return allVehicles
// }

// main().then((finalResults) => {
//   console.log(finalResults)
// })

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

async function signup2(inputUser: User) {
  const account = await createAccount() // 1s
  const user = await addAccountUser(account.accountId, inputUser) // 1s

  // console.time('internal')
  return Promise.all([emailUser(user), logNewUserStats(account.accountId)]) // 1s
  // console.timeEnd('internal') // return
}

async function main() {
  console.time('external')
  await signup2({ name: 'brad' })
  console.log('success')
  console.timeEnd('external')
}

main()
