import "./css/forum.css";
import { useState, useEffect } from "react";
import ForumGrid from "../components/LoadForum";

const Forum = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://wildlycuriousbackend.onrender.com/api/forum/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    
    <div className="forum-container">
      <header>
        <h1>Browse Forum Posts!</h1>
      </header>

      <div className="left-side">
        <ul className="forum-posts-list">
          <main className="forum-content">
            <section className="forum-topics">
              <h2>Popular Discussions</h2>
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="forum-post"
                  onClick={() => setSelectedPost(post)}
                  style={{ cursor: "pointer" }}
                >
                  {post.title}
                </div>
              ))}
            </section>
          </main>
        </ul>

        <div className="filter-box">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category">
            <option value="all">All</option>
            <option value="plants">Plants</option>
            <option value="animals">Animals</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="date">Filter by Date:</label>
          <select id="date">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="right-side">
        <ForumGrid selectedPost={selectedPost} onPostClick={setSelectedPost} />
      </div>
    </div>
  );
};

export default Forum;
