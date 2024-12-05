import express from "express";
import dotenv from "dotenv";
import conn from "./config/db.js";
import * as postControllers from "./controllers/postControllers.js";
import * as pageControllers from "./controllers/pageControllers.js";
import methodOverride from "method-override";

dotenv.config();
const app = express();
conn();

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// routes
app.get("/", postControllers.getAllPosts);
app.get("/posts/:id", postControllers.getPost);
app.put('/posts/:id', postControllers.updatePost);
app.post("/posts", postControllers.createPost);


app.get("/about", pageControllers.getAboutPage);
app.get("/add_post", pageControllers.getAddPage);
app.get("/posts/edit/:id", pageControllers.getEditPage);


// listen port 
const port = 3000;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
