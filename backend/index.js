const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000

app.use(cors())

let users = []
let movies = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res) => {
  users.push(req.query)
  console.log("User sign up")
  console.log(users)
  res.send(req.query.name)
})


app.get('/login', (req, res) => {
  let found_user = false;

  for (let i = 0; i < users.length; i++) {

    if (users[i].email === req.query.email) {

      found_user = true;

      if (users[i].password === req.query.password) {
        return res.send({ login: true, id: users[i].name });
      } else {
        return res.send({ login: false, alert: 'Password is incorrect' });
      }
    }
  }

  if (!found_user) {
    return res.send({ login: false, alert: 'User does not exist' });
  }
});

// app.get('/movies', (req, res) => {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === req.query.userid) {
//       movies.push(req.query)
//       console.log(movies)
//       console.log("user add the movies")
//       res.send(movies)
//     }
//   }
//   console.log(req.query)
// })

app.get('/movies', (req, res) => {
  let userFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].name === req.query.userid) {
      movies.push(req.query)
      console.log(movies)
      console.log("user added the movies")
      userFound = true
      break;  // stop the loop once user is found
    }
  }

  console.log(req.query)

  if (userFound) {
    res.send(movies)  // send response only once
  } else {
    res.status(404).send({ message: "User not found" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
