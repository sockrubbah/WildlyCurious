import { Link } from "react-router-dom";
import "./css/home.css";
const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome To Wildly Curious!</h1>
      </header>
<section className="about">
        <h2>About</h2>
        <p>Welcome to our community-driven platform, where nature lovers and curious minds come together to explore
            the wonders of the natural world. Whether you're passionate about plants, fascinated by animals, or
            intrigued by the wonders of rocks and other non-living entities, our blog allows you to share your
            knowledge, discoveries, and experiences with a like-minded community. Dive into a rich collection of
            posts on various topics, from the beauty of nature to in-depth discussions on the ecosystems that shape
            our world. Join our forum to connect with fellow enthusiasts, exchange ideas, and engage in
            thought-provoking conversations. This is the place where nature meets knowledge and curiosity meets
            creativity!</p>
    </section>
      <main>
        <div className="categories">
          <img src="https://picsum.photos/500/300" alt="Category Image" />
          <h1>Pick A Category!</h1>
          <nav className="category-bar">
            <button><Link to="/browse">Plant</Link></button>
            <button><Link to="#">Animal</Link></button>
            <button><Link to="#">Other</Link></button>
          </nav>
        </div>
      </main>

      <section className="right-side">
        <div className="trending">
          <h3>Trending Posts</h3>
          <div className="post-box">FernFury's Post</div>
          <div className="post-box">Post 2</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
