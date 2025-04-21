import React, { useState } from "react";
import axios from "axios";


const CreatePost = ({ fetchPosts }) => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        content: "",
        image: null,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("author", formData.author);
        data.append("content", formData.content);
        if (formData.image) data.append("image", formData.image);

        setLoading(true);
        try {
            await axios.post("https://wildlycuriousbackend.onrender.com/api/forum/", data);
            setSuccess(true);
            setErrorMsg("");
            setFormData({ title: "", author: "", content: "", image: null });
            fetchPosts();
        } catch (error) {
            setErrorMsg(error.response?.data?.error || "Something went wrong");
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post">
            <h2>Create a New Forum Post</h2>

            <label for="title">Title:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <label for="author">Author:</label>
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
            />

            <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="5"
                required
            />

            <label>Image (optional):</label>
            <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
            />

            <button type="submit" disabled={loading}>
                {loading ? "Posting..." : "Post"}
            </button>

            {success && <p className="success-msg">Post submitted successfully! 🌱</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>
    );
};

export default CreatePost;
