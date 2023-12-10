import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt={logo} width="250px" />
      </div>
      <nav className="Navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/grade-report">Grade Report</NavLink>
          </li>
          <li>
            <NavLink to="/missing-grade">Missing Grade</NavLink>
          </li>
          <li>
            <NavLink to="/instructors">Instructors</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
      <div className="btn">
        <NavLink to="/login">
          <button type="button" className="btn">
            LOGOUT
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
