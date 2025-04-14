import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NoPage from "./components/NoPage";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Post from "./pages/Post";
import CurrentPost from "./pages/CurrentPost";
import Profile from "./pages/Profile";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="post" element={<Post />} />
          <Route path="current-post" element={<CurrentPost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forum" element={<Forum />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);