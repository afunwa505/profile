import "./index.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="navigation">
        <div className="name">Edeh Uchechukwu</div>
        <div className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/skill">Skills</Link></li>
            </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
