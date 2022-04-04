const express = require("express");
const router = express.Router();

var data=require("./data");
var users = data.datos;

router.get("/",function(req, res){
    return res.json(users);
});

module.exports = router;