import "./css/forum.css";
import { useState, useEffect } from "react";
import ForumGrid from "../components/LoadForum";

const Forum = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [forumPosts, setForumPosts] = useState([]); // /api/forum/
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState({ title: "", content: "", _id: "" });

  useEffect(() => {
    fetch("https://wildlycuriousbackend.onrender.com/api/forum/")
      .then((res) => res.json())
      .then((data) => setForumPosts(data));
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    fetch(`https://wildlycuriousbackend.onrender.com/api/forum/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setForumPosts((prev) => prev.filter((post) => post._id !== id));
        }
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const handleEditSubmit = () => {
    fetch(`https://wildlycuriousbackend.onrender.com/api/forum/${editContent._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editContent.title,
        content: editContent.content,
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        // update state with edited post
        setForumPosts((prev) =>
          prev.map((post) =>
            post._id === updatedPost._id ? updatedPost : post
          )
        );
        setIsEditing(false);
      })
      .catch((err) => console.error("Edit error:", err));
  };

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
              {forumPosts.map((post) => (
                <div key={post._id} className="forum-post" style={{ cursor: "pointer" }}>
                  <div
                    onClick={(e) => {
                      if (e.target.tagName !== "BUTTON") setSelectedPost(post);
                    }}
                  >
                    {post.title}
                  </div>
                  <div className="forum-post-actions">
                    <button
                      onClick={() => {
                        const confirmed = window.confirm("Do you want to edit this post?");
                        if (confirmed) {
                          setEditContent({ title: post.title, content: post.content, _id: post._id });
                          setIsEditing(true);
                        }
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                  </div>
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
        <ForumGrid
          selectedPost={selectedPost}
          onPostClick={setSelectedPost}
        />
      </div>

      {/* modal for editing */}
      {isEditing && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Edit Post</h3>
            <input
              type="text"
              value={editContent.title}
              onChange={(e) =>
                setEditContent({ ...editContent, title: e.target.value })
              }
            />

            <textarea
              value={editContent.content}
              onChange={(e) =>
                setEditContent({ ...editContent, content: e.target.value })
              }
              rows="6"
              placeholder="Edit content..."
            />
            <div className="edit-buttons">
              <button onClick={handleEditSubmit}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
