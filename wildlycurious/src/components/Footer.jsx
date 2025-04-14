import "wildlycurious/src/pages/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer>
        <ul>
        <li><Link to="/contact">Click to contact us!</Link></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;