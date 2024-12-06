import Post from "../models/Post.js";

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.render("index", { posts: posts });
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
    console.log("Post silinemedi!!!", error)
  }
  
};

export { getAllPosts, getPost, createPost, updatePost, deletePost};
