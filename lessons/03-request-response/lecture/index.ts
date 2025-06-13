// import z from 'zod'

const API = 'http://localhost:3333'
// const API = 'http://swapi.dev/api'

/****************************************
 Part 1: Request
*****************************************/

const response = new Response('{ "name": "John" }', {
  status: 200,
  headers: {
    'Content-Type': 'application/json',
  },
})

response.json().then((data) => {
  console.log(data)
})

// function getPerson(id: number) {
//   fetch(`${API}/people/${id}`).then(() => {
//     console.log('Promise is resolved')
//   })
// }

// getPerson(1)

/****************************************
  Part 2: Response
*****************************************/

// Docs: "[fetch] resolves to the Response object representing the response to your request."
// https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value

// function getPerson(id: number) {
//   fetch(`${API}/people/${id}`).then((res) => {
//     console.log('What is in the response', res)
//   })
// }

// getPerson(1)

/****************************************
  Part 4: Typesafe Network Response
*****************************************/

// // const personSchema = z.object({
// //   name: z.string(),
// //   height: z.string().transform((val) => Number(val)),
// // })

// // type Person = z.infer<typeof personSchema>

// type Person = {
//   name: string
//   height: number
// }

// function getPerson(id: number) {
//   return fetch(`${API}/people/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       return data as Person
//     })
// }

// getPerson(1).then((person) => {
//   console.log(person)
// })
