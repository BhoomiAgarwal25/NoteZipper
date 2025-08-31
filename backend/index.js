const express = require("express");
const app = express();
const notes= require('./data/notes');
const dotenv = require('dotenv')

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});
app.get("/api/:id",(req,res)=>{
  res.send(req.params.id);
})
app.get("/api",(req,res)=>{
  res.send(req.query.user);
})
app.get("/notes/:id",(req,res)=>{
  res.json(notes.find((n)=>n._id == req.params.id));
})
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log("Server running on port 4000"));



