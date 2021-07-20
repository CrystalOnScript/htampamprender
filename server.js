const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// app.get('/', (req, res) => {
//     res.sendFile('./index.html')
// })

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.get('/hikes', (req, res) => res.sendFile(path.join(__dirname, './hikes.json')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})