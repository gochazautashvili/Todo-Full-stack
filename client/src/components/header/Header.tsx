import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth">Form</NavLink>
          </li>
          <li>
            <NavLink to="/">Todo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
