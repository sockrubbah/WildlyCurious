import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import NoPage from "./components/NoPage";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import React from "react";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="post" element={<Post />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forum" element={<Forum />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
