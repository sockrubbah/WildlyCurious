import { useState, useEffect } from "react";
import axios from "axios";

export default function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch posts 
    axios.get("https://wildlycuriousbackend.onrender.com/api/forum/")
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://wildlycuriousbackend.onrender.com/api/forum/${id}`)
      .then(() => {
        // remove deleted post 
        setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="grid">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <a href={`/post/${post._id}`}>
            <div className="post-author">{post.author}</div>
            <img
              src={`/images/${post.img_name && (
                <img
                  src={`https://wildlycuriousbackend.onrender.com/${post.img_name}`}
                  alt={`Post by ${post.author}`}
                  width="200px"
                  height="200px"
                />
              )}`}
              alt={`Post by ${post.author}`}
              width="200px"
              height="200px"
            />
          </a>
          <button onClick={() => handleDelete(post._id)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
