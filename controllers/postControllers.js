import Post from "../models/Post.js";

const getAllPosts = async (req, res) => {
  const page = req.query.page || 1;
  const postPerPage = 3;

  const totalPost = await Post.find().countDocuments();
  const posts = await Post.find({})
    .sort('dateCreated')
    .skip((page - 1) * postPerPage)
    .limit(postPerPage);
  
  
  res.render("index.ejs", {
    posts : posts,
    current : page,
    pages : Math.ceil(totalPost / postPerPage)
  });
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
};

const createPost = async (req, res) => {
  await Post.create(req.body);
  res.status(301).redirect("/");
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.post_text = req.body.post_text;
    post.creator = req.body.creator;
    await post.save();

    res.redirect(`/posts/${req.params.id}`);
  } catch (error) {
    console.log("Post güncellenemedi!!!", error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log("Post silinemedi!!!", error);
  }
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
