import "wildlycurious/src/pages/css/browse.css";
import LoadPosts from "wildlycurious/src/components/LoadPosts.jsx";

const Browse = () => {
  return (
    <div>
      <header>
        <h1>Browse Posts, Click Any To View</h1>
      </header>

      <main>
        <LoadPosts />
      </main>
    </div>
  );
};

export default Browse;