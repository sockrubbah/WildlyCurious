import React from "react";
import "./css/currentpost.css";

const CurrentPost = ({ post }) => {
  if (!post) {
    return (
      <div className="post-box">
        <h2>Select a post to view details</h2>
      </div>
    );
  }

  return (
    <div className="post-box">
      <div className="post-title">{post.title}</div>

      <div className="post-author">
        Posted by: <strong>{post.author || "Unknown"}</strong>
      </div>

      <div className="post-image">
        <img
          src={post.imageUrl || "images/default.jpg"}
          alt="Post visual"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </div>

      <div className="post-description">
        <p>
          <strong>Description: </strong>
          {post.description}
        </p>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>

        {(post.comments || []).map((comment, index) => (
          <div className="comment" key={index}>
            <strong>{comment.author}:</strong> {comment.text}
          </div>
        ))}

        <div className="add-comment">
          <input type="text" placeholder="Add a comment..." />
          <button>Add Comment</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentPost;