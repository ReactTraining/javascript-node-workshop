import z from 'zod'
// import { fakeFetch } from './utils'

const API = 'http://localhost:3333'

// // const personSchema = z.object({
// //   name: z.string(),
// //   height: z.string().transform((val) => Number(val)),
// // })

// // type Person = z.infer<typeof personSchema>

// const user = ?????

// const schema = z.object({
//   name: z.string(),
// })

// const results = schema.safeParse(user)
// if (results.success) {
//   const data = results.data
//   console.log(data)
// } else {
//   console.log(results.error)
// }

const userSchema = z.object({
  name: z.string(),
  height: z.string(),
})

type UserType = z.infer<typeof userSchema>

function getPerson(id: number) {
  return fetch(`${API}/people/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const results = userSchema.safeParse(data)
      if (results.success) {
        return results.data
      } else {
        throw new Error('invalid data')
      }
    })
}

getPerson(1)
  .then((person) => {
    console.log(person.height)
  })
  .catch((error) => {
    console.log(error)
  })
