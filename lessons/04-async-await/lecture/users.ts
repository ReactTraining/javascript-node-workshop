export type Account = {
  accountId: number
}

export type User = {
  name: string
}

export type DBUser = User & {
  userId: number
}

async function wait(ms) {
  await new Promise((res) => setTimeout(res, ms))
}

export async function createAccount(): Promise<Account> {
  await wait(1000)
  return { accountId: 1 }
}

export async function addAccountUser(accountId: number, user: User): Promise<DBUser> {
  await wait(1000)
  return { userId: 5, name: user.name }
}

export async function emailUser(user: DBUser) {
  await wait(1000)
}

export async function logNewUserStats(accountId: number) {
  await wait(1000)
}
