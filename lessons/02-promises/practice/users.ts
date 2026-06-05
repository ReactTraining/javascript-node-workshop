const data = require('./data.json')

type User = {
  id: number
  name: string
}

export function getUsers(): Promise<User[]> {
  return Promise.resolve(data).then((data) => data.users)
}
