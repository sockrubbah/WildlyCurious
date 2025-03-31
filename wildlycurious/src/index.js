import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage"
import Home from './pages/Home';
import Browse from './pages/Browse';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Forum from './pages/Forum';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="post" element={<Post />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forum" element={<Forum />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);