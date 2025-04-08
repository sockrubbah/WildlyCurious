import "./css/post.css";
import { Link } from "react-router-dom";
const Post = () => {
  return (
    <div>
      <header>
        <h1>Add An Image And Description To Create Your Own Post!</h1>
      </header>

      <main className="post-container">
        <section className="left-side">
          <div className="image-box">
            <input type="file" id="upload-image" />
            <button className="confirm-image">Save Image</button>
          </div>
          <textarea id="post-description" placeholder="Description this, description that, etc." />
          <button className="confirm-text">Save Text</button>
        </section>

        <section className="right-side">
          <h2>Post Settings</h2>
          <div className="settings-box">
            <select id="privacy">
              <option disabled selected>Privacy</option>
              <option>Public</option>
              <option>Private</option>
            </select>

            <select id="category">
              <option disabled selected>Category</option>
              <option>Plants/Nature</option>
              <option>Animals</option>
              <option>Other</option>
            </select>

            <select id="comments">
              <option disabled selected>Comments</option>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>

            <button className="create-post">Create Post</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Post;