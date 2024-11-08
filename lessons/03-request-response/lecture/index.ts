import z from 'zod'
import { fakeFetch } from './utils'

/****************************************
  Part 1: Request
*****************************************/

// function getPerson(id: number) {

//   fetch(`https://swapi.dev/api/people/${id}`).then(() => {
//     console.log('Promise is resolved')
//   })
// }

// getPerson(1)

/****************************************
  Part 2: Response
*****************************************/

// // Docs: "[fetch] resolves to the Response object representing the response to your request."
// // https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value

// function getPerson(id: number) {
//   fetch(`https://swapi.dev/api/people/${id}`).then((res) => {
//     console.log('What is in the response', res)
//   })
// }

// getPerson(1)

/****************************************
  Part 3: Custom Fetch
*****************************************/

// fakeFetch('fakesdfsfdsfds-api')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//   })

/****************************************
  Part 4: Typesafe Network Response
*****************************************/

const personSchema = z.object({
  name: z.string(),
  height: z.string().transform((val) => Number(val)),
})

type Person = z.infer<typeof personSchema>

function getPerson(id: number) {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const results = personSchema.safeParse(data)

      if (results.success) {
        const data = results.data
        return data
      } else {
        // alert developers that the other system changed their types
        throw 'bad data'
      }
    })
}

getPerson(1)
  .then((person) => {
    console.log(person, typeof person.height)
  })
  .catch((err) => {
    console.log(err)
  })
