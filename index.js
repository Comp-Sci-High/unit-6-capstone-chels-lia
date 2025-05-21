const mongoose = require("mongoose");
const express = require("express");
const { type } = require("os");

const app = express()
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs")

app.use(express.json());

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

}
)

const Article = mongoose.model("Article", articleSchema, "Articles")


app.post("/add/article", async (req, res) => {
  const newArticle = await new Article({
    title: req.body.title,
    readingLevel: req.body.readingLevel,
    link: req.body.link,
    text: req.body.text,  
}).save()
   res.json(newArticle);
 });


app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});


app.get("/", async (req, res) => {
  const articles = await Article.find()
  res.render("home.ejs", {articles});
});

app.get("/analyze", async (req, res) => {
res.render("analyze.ejs", )
})

app.patch("/update/:_id", async (req, res) => {
    const response = await Article.findOneAndUpdate({_id: req.params._id},   req.body, {new:true})
  
    res.json(response)
})


app.delete("/delete/:_id", async (req, res) => {
    const resp = await Article.findOneAndDelete({_id: req.params._id})
    res.json(resp)
})














async function startServer() {
   
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.8urlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

   
   

    app.listen(3000, () => {
        console.log(`Server running.`);
    });
}

startServer();