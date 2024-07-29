const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.sendFile('./views/signUP.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})