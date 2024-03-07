const express = require("express")
const mongoose = require('mongoose');

const app =express()
mongoose.connect('connect your mongo db')
.then(function(){
    console.log("Database is connected.");
}).catch(function(){
    console.log("Failed to connect with database.");
})

//Create Model
const car = mongoose.model("luxury",{
    name:String,
    price:Number
},"luxury")

app.get("/car", function(req, res){
    car.find().then(
        function(retdata){
            console.log(retdata);
            res.send("Successfully Retrieved Data."+retdata);
        }
    ).catch(function(){
        console.log("Error in retrieving data.");
    })
})

app.listen(3000, function(){
    console.log("Server Started...")
})