import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main_head">
      <div className="img_box">
        <Link to="/">
          <img src="https://i.ibb.co/HhRWBzh/Learning.jpg" alt="site logo" />
        </Link>
      </div>
      <div className="login_box">
        <b>Total questions: {5}</b>
        <b><Link to={"/login"}>Login</Link></b>
      </div>
    </div>
  );
};

export default Navbar;
