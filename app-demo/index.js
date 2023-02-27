//Imported packages
let express = require('express'); //must be installed
let app = express();
let serveIndex = require('serve-index') //must be installed
const { Pool } = require('pg');

//Creaing a pool for database
let pool = new Pool({connectionString: 'postgres://postgres:elephant@EL1441@localhost/cmpt372'})

// Code for serving a static website
const port = process.env.PORT || 8080
let options = {
  dotfiles: 'ignore',
  extensions: ['htm', 'html', 'json']
}
app.use('/', express.static('./pub_html', options));
app.use('/files', serveIndex('./pub_html/files', {'icons': true}))

// -----------------------------------------------------
// ROUTING (REST API)
let users = [] //Array of all users

app.get('/users-api', async(req, res) => {
  await pool.query("SELECT * FROM people", 
    (err, result) => {
      if(err){
        console.log(err.message);
        res.end(err)
      }
      users = result.rows;
      res.json(users);
    })
})

app.get('/users-api/:id', async(req, res) => {
  const { id } = req.params;
  await pool.query(`SELECT * FROM people WHERE pid=${id}`,
    (err, result) => {
      if(err){
        console.log(err);
        res.end(err);
      }
      res.send(result.rows)
    })
})

// const onSubmitForm = async (e) => {
//   e.preventDefault();
//   try {
//     const body = {}
//   } catch (error) {
    
//   }
// }

app.post('/users-api', (req, res) => {
  let pid = req.body.pid
  let fname = req.body.fname
  let lname = req.body.lname

  try {
    console.log(req.body.pid)
  }catch (error) {
    console.log(err.message)
    res.json(users)
  }
})

// app.delete('/users-api/:id', (req, res) => {
//   let pid = req.params.id
//   users = users.filter((person) => {
//     return person.pid != pid
//   })
//   res.json(users);
// })


// app.use('/', (req, res, next) => {
//   console.log(req.method, 'request: ', req.url, JSON.stringify(req.body))
//   next()
// })

//parsing body
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
//template engine
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
app.listen(port, () => {
  console.log(`app running on port ${port}`)
})