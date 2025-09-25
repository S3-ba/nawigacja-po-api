import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
          <Link to="/menu">Menu</Link><br />
          <Link to="/duck">Duck</Link><br />
        </div>
    );
};