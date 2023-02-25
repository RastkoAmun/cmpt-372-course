//packages
let express = require('express'); //must be installed
let app = express();
let path = require('path')
let serveIndex = require('serve-index') //must be installed

const port = process.env.PORT || 8080
let options = {
  dotfiles: 'ignore',
  extensions: ['htm', 'html', 'json']
}

let users = []

app.use('/', express.static('./pub_html', options))
app.use('/files', serveIndex('./pub_html/files', {'icons':true}));
app.use('/', (req, res, next) => {
  console.log(req.method, 'request: ', req.url, JSON.stringify(req.body))
  next()
})

//parsing body
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/users-api', (req, res) => {
  res.json(users)
})

app.post('/users-api', (req, res) => {
  users.push(req.body)
  res.json(users)
})

app.delete('/users-api/:id', (req, res) => {
  let pid = req.params.id
  users = users.filter((person) => {
    return person.pid != pid
  })
  res.json(users);
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})