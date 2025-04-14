import CreatePost from "../components/CreatePost";
import "./css/post.css";

const Post = () => {
  return (
    <div>
      <header>
        <h1>Add An Image And Description To Create Your Own Post!</h1>
      </header>

      <main className="post-container">
        <CreatePost />
      </main>
    </div>
  );
};

export default Post;