import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-name" to="/">
        Simon Fleet
      </NavLink>

      <nav aria-label="Main navigation">

        <a href="mailto:simongfleet@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/SimonGFleet"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href={`${import.meta.env.BASE_URL}Simon_Fleet_CV.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
      </nav>
    </header>
  );
}