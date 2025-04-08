import { useState, useEffect } from "react";

const LoadForum = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="forum-grid">
            {posts.map((post) => (
                <div key={post._id} className="forum-card">
                    <img src={`/${post.img_name}`} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>By {post.author}</p>
                </div>
            ))}
        </div>
    );
};

export default ForumGrid;