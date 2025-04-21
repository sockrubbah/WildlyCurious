const ForumGrid = ({ selectedPost, onPostClick, posts }) => {
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
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-box" onClick={() => onPostClick(post)}>
            <h3>{post.title}</h3>
            <p>By {post.author}</p>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default ForumGrid;
