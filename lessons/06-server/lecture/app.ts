import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('<h1>Express Home 1<h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.get('/users', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.get('/account', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.get('/', (req, res) => {
  res.send('<h1>Express Home 2<h1>')
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
