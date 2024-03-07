const express = require("express")
const mongoose = require('mongoose');
const cors = require('cors');

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect('connect your mango db')
.then(function(){
    console.log("Database is connected.");
}).catch(function(){
    console.log("Failed to connect with database.");
})

//Create Model
const Fruit = mongoose.model("fruit",{
    name:String
},"fruit")


app.get("/fruitlist", function(req, res){
    Fruit.find().then(
        function(retdata){
            res.send(retdata);
        }
    ).catch(function(){
        console.log("Error in retrieving data.");
    })
})

app.post("/addfruit", function(req, res){
    var newfruit = req.body.newfruit
    const newFruit = new Fruit({
        name:newfruit
    });
    newFruit.save().then(()=>console.log("Saved Successfully"))
})

app.listen(5000, function(){
    console.log("Server Started...")
})