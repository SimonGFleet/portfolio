import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-name" to="/">
        Simon Fleet
      </NavLink>
      <nav aria-label="Main navigation">
        <NavLink to="/">Projects</NavLink>
        <a href="https://github.com/SimonGFleet" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
