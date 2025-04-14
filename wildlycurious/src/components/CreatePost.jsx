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
    const [prevSrc, setPrevSrc] = useState("");

    const validate = () => {
        if (formData.title.trim().length < 3) return "Title must be at least 3 characters.";
        if (formData.author.trim().length < 3) return "Author must be at least 3 characters.";
        if (formData.content.trim().length < 10) return "Content must be at least 10 characters.";
        return null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validate();
        if (validationError) {
            setErrorMsg(validationError);
            setSuccess(false);
            return;
        }

        const data = new FormData();
        data.append("title", formData.title);
        data.append("author", formData.author);
        data.append("content", formData.content);
        if (formData.image) data.append("image", formData.image);

        setLoading(true);
        try {
            const res = await axios.post("https://wildlycuriousbackend.onrender.com/api/forum/", data);
            setSuccess(true);
            setErrorMsg("");
            setFormData({ title: "", author: "", content: "", image: null });
            setPrevSrc("");
            fetchPosts();
        } catch (error) {
            setErrorMsg(error.response?.data?.error || "Something went wrong");
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post">
            <h2>Create a New Forum Post</h2>

            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                disabled={loading}
            />

            <label>Author:</label>
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                disabled={loading}
            />

            <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="5"
                required
                disabled={loading}
            />

            <label>Image (optional):</label>
            <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                disabled={loading}
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
