import "./css/forum.css";
import { Link } from "react-router-dom";
import ForumGrid from "../components/LoadForum";

const Forum = () => {
  return (
    <div className="forum-container">
      <header>
        <h1>Browse Forum Posts!</h1>
      </header>
      <div class="left-side">
        <ul class="forum-posts-list">
          <main className="forum-content">
            <section className="forum-topics">
              <h2>Popular Discussions</h2>
              <div className="forum-post">What’s the Most Fascinating Plant You’ve Encountered?</div>
              <div className="forum-post">Small Ways to Help the Environment in Your Daily Life</div>
              <div className="forum-post">How Do You Find the Best Hiking Trails?</div>
            </section>
          </main>
        </ul>
        <div class="filter-box">
          <label for="category">Filter by Category:</label>
          <select id="category">
            <option value="all">All</option>
            <option value="plants">Plants</option>
            <option value="animals">Animals</option>
            <option value="other">Other</option>
          </select>

          <label for="date">Filter by Date:</label>
          <select id="date">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="right-side">
        <ForumGrid />
      </div>
    </div >
  );
};

export default Forum;