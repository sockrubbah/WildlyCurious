import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Browse">Browse</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Forum">Forum</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;