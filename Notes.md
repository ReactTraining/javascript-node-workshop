```ts
const urls = [
  {
    name: '/',
    code: 200,
  },
  {
    name: '/foo',
    code: 404,
  },
] as const

type NameType = (typeof urls)[number]['name']

function getCode(name: string) {}

getCode('/')
```

- Zod
