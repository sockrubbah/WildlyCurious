import { useState, useEffect } from "react";

const ForumGrid = ({ selectedPost, onPostClick }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://wildlycuriousbackend.onrender.com/api/forum/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  if (selectedPost) {
    return (
      <div className="post-box">
        <h3 className="post-title">{selectedPost.title}</h3>
        <p className="post-author">By {selectedPost.author}</p>
        <p className="post-text">{selectedPost.content}</p>
        <button onClick={() => onPostClick(null)}>Back to all posts</button>
      </div>
    );
  }

  return (
    <div className="forum-grid">
      {posts.map((post) => (
        <div key={post._id} className="post-box" onClick={() => onPostClick(post)}>
          <h3>{post.title}</h3>
          <p>By {post.author}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ForumGrid;
