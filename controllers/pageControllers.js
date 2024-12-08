import Post from "../models/Post.js";

const getAboutPage = (req, res) => {
  res.render("about");
};

const getAddPage = (req, res) => {
  res.render("add_post");
};

const getEditPage = async (req, res) => {
  const post = await Post.findById({ _id: req.params.id });
  res.render("edit", { post });
};

export { getAboutPage, getAddPage, getEditPage };
