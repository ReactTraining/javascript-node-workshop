// import { fakeFetch } from './utils'

/****************************************
  Part One: Request
*****************************************/

function getPersonVehicles(id: number) {
  fetch(`https://swapi.dev/api/people/${id}`).then(() => {
    console.log('Promise is resolved')
  })
}

getPersonVehicles(1)

/****************************************
  Part Two: Response
*****************************************/

// Docs: "[fetch] resolves to the Response object representing the response to your request."
// https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value

// function getPersonVehicles(id: number) {
//   fetch(`https://swapi.dev/api/people/${id}`).then((stuff) => {
//     console.log('What is this', stuff)
//   })
// }

// getPersonVehicles(1)

/****************************************
  Custom Fetch
*****************************************/

// fakeFetch('fake-api')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//   })
