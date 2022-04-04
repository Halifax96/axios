var express = require("express");
const cors = require("cors");
const {stderr} = require("process");



var app= express();
app.use(express.json());
app.use(cors());



app.use("/users",require("./routes/users"));
app.use("/login",require("./routes/login"));
app.use("/note",require("./routes/note"));


app.listen(5000,function(req,res){
    console.log("Listen 5000\n");
});

