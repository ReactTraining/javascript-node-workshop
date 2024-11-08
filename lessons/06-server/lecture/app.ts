import express from 'express'
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

// app.use is like a general "catch all" for any path
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
