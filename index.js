const mongoose = require("mongoose");
const express = require("express");
const { type } = require("os");

const app = express()
app.use(express.static(__dirname + "/public"));

app.use(express.json())

app.set("view engine", "ejs")


app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

const articleSchema = new mongoose.Schema(
    {
        title: {type:String, required: true},
        readingLevel:{type:Number, required: true},
        link:{type:String, required: true},
        text: {type:String, required: true},

},

)

const article = mongoose.modell("Article", articleSchema, "Articles")



app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});


app.get("/", async (req, res) => {
  res.json("home.ejs");
});



app.post("/")













app.listen(3000, () => {
    console.log('Server running.')

})

