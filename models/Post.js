import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    post_text: String,
    creator : String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("posts", PostSchema);

export default Post;