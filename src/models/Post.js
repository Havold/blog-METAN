import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  username: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
