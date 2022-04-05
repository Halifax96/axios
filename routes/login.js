const express = require('express')
const router = express.Router()

var data = require('./data.js')
var users = data.datos

router.post('/', function (req, res) {
  let usuario = req.body.user
  let contra = req.body.password

  let i = 0
  let flag = false
  while (i < users.length && flag == false) {
    console.log(users[i].client + ' ' + users[i].password)
    if (users[i].client == usuario && users[i].password == contra) {
      flag = true
    }
    i++
  }

  // const foundUser = users.find(element => {
  //   return element.client === usuario && element.password === contra
  // })

  //   console.log(foundUser)

  //Una vez encontrado
  if (flag) {
    console.log('SUCCESS IDENTIFICATION')
    return res.send('IT IS ALL RIGHT') //200 IT IS OK
  } else {
    console.log('USER NO IDENTIFIED (ACCESS DENIED)')
    return res.status(400).send('NO IDENTIFIED') //400 IT IS WRONGLY
  }
})

module.exports = router
