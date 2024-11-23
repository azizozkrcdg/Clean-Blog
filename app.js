import express from "express";
import dotenv from "dotenv";
import conn from "./config/db.js";
import Post from "./models/Post.js"

dotenv.config();
const app = express();
conn();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes

app.get("/",async(req, res) => {
  const posts = await Post.find();
  res.render("index", {posts : posts});
});

app.get("/posts/:id", async(req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {post})
});


app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});


app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.status(301).redirect("/");
});

// listen port 
const port = 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
