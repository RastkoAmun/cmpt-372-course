const express = require('express')
const app = express()
const PORT = 8080

app.use('/', express.static('./'));

// app.get('/', (req, res) => {
//   res.send("Get request")
// })

// app.post('/', (req, res) => {
//   res.send("Post request")
// })

app.all('/secret', (req, res, next) => {
  res.send("Super secret location");
  next();
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})