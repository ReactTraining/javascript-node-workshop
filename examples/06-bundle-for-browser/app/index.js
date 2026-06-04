import { sayHi } from './utils.js'

sayHi()

console.log('foo')

document.getElementById('button').addEventListener('click', () => {
  import('./other').then((module) => {
    module.other()
  })
})
