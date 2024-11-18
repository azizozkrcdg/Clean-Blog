import express from "express";

const app = express();

// middlewares
app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
