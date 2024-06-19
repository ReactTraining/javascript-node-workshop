export function fakeFetch(path: string) {
  const responseData = { hello: 'world' }
  const res = new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
  return Promise.resolve(res)
}

// Note that Response.json() is not the same thing as response.json()
// The one we're showing here is the static method to do all the same
// stuff as we did above:

// https://developer.mozilla.org/en-US/docs/Web/API/Response/json_static

// export function fakeFetch(path: string) {
//   return Promise.resolve(Response.json({ hello: 'world' }))
// }
