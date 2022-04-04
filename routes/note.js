const express = require("express");
const router = express.Router();

var data = require("./data");
var notes = data.datos;

router.get("/:user", function(req, res)  { 
    let respuesta;
    let usuario=req.params.user;
    for(let i=0; i<notes.length; i++){
        if(notes[i].client==usuario){
            respuesta=notes[i];
        }
    }
    console.log(respuesta);
    return res.json(respuesta); 
});

router.post("/", function(req, res) {  
    var nota = req.body.nota;
    console.log(nota);
    notes.push(nota);
    res.send(notes);
});

router.put("/:user/:nota", function(req, res) {  
    let nota = req.params.nota;
    let user=req.params.user;

    for(let i=0;i<notes.length; i++){
        console.log(notes[i].client);
        if(notes[i].client===user){
            notes[i].desc=nota;
        }

    }
    res.send(notes);
});

/*
router.put("/", function(req, res){    
    let idNotaMod = req.body.id;
    let contenido = req.body.nota;

    let i = 0;
    let flag = false;
    while(i<notes.length){
        if(notes[i].id==idNotaMod){
            notes[i].nota = contenido;
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


router.delete("/:id", function(req, res) {   
    let idEliminar = req.params.id;
    let flag = false;
    notes = notes.filter((ele) => {
        ele.id != idEliminar;
        flag = true;
    })
    //Se envían los datos
    if(flag){
        res.send("NOTE DELETED RIGHTLY");
    }else{
        res.status(400).send("ERROR DELETING NOTE");
    }
});

module.exports = router;