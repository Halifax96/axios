const express = require('express')
const router = express.Router()

const data = require('./data')
const notas = data.datos

router.get('/showall', (req, res) => {
  res.send(notas)
})

router.get('/:user', function (req, res) {
  let respuesta
  let usuario = req.params.user
  for (let i = 0; i < notas.length; i++) {
    if (notas[i].client == usuario) {
      respuesta = notas[i]
    }
  }
  return res.json(respuesta)
})

router.post('/:user', function (req, res) {
  const nota = req.body.nota
  const user = req.params.user
  let usernotas
  for (let i = 0; i < notas.length; i++) {
    if (notas[i].client === user) {
      usernotas = notas[i].notas
      nota.id = notas[i].notas.length + 1
      notas[i].notas.push(nota)
    }
  }
  res.send(usernotas)
})

router.put('/:user', function (req, res) {
  let updatedNotas = req.body.notas
  let user = req.params.user
  for (let i = 0; i < notas.length; i++) {
    if (notas[i].client === user) {
      notas[i].notas = updatedNotas
    }
  }
  res.send(notas)
})

/*
router.put("/", function(req, res){    
    let idNotaMod = req.body.id;
    let contenido = req.body.nota;

    let i = 0;
    let flag = false;
    while(i<notas.length){
        if(notas[i].id==idNotaMod){
            notas[i].nota = contenido;
            flag = true;
        }
        i++;
    }

    if(flag){
        res.send("NOTA IS CHANGED");
    }else{
        res.status(400).send("ERROR CHANGING NOTE");
    }
});*/

router.delete('/:user/:id', function (req, res) {
  const idEliminar = req.params.id
  const user = req.params.user
  let flag = false
  //   notas = notas.filter(ele => {
  //     ele.id != idEliminar
  //     flag = true
  //   })

  for (let i = 0; i < notas.length; i++) {
    if (notas[i].client === user) {
      flag = true
      notas[i].notas = notas[i].notas.filter(
        element => element.id === idEliminar
      )
    }
  }

  //Se envían los datos
  if (flag) {
    res.send('NOTE DELETED RIGHTLY')
  } else {
    res.status(400).send('ERROR DELETING NOTE')
  }
})

module.exports = router
