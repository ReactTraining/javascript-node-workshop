import z from 'zod'

/****************************************
  Part 4: Typesafe Network Response
*****************************************/

const personSchema = z.object({
  name: z.string(),
  height: z.string().transform((val) => Number(val)),
})

type Person = z.infer<typeof personSchema>

function getPerson(id: number) {
  return fetch(`${API}/people/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const parsedResults = personSchema.safeParse(data)
      if (parsedResults.success) {
        return parsedResults.data
      } else {
        return Promise.reject(parsedResults.error)
      }
    })
}

getPerson(1).then((data) => {
  other(data)
})

function other(person: Person) {}
