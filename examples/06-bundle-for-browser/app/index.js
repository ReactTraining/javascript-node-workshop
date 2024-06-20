import { sayHi } from './utils.js'

sayHi()

document.getElementById('button').addEventListener('click', () => {
  import('./other').then((module) => {
    module.other()
  })
})
