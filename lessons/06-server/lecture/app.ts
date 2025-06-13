import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  next()
  res.send('<h1>Home One<h1>')
})

app.get('/users', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
