import "./css/forum.css";
import { Link } from "react-router-dom";
const Forum = () => {
  return (
    <div className="forum-container">
      <header>
        <h1>Forum</h1>
      </header>

      <main className="forum-content">
        <section className="forum-topics">
          <h2>Popular Discussions</h2>
          <div className="forum-post">What’s the Most Fascinating Plant You’ve Encountered?</div>
          <div className="forum-post">Small Ways to Help the Environment in Your Daily Life</div>
          <div className="forum-post">How Do You Find the Best Hiking Trails?</div>
        </section>
      </main>
    </div>
  );
};

export default Forum;