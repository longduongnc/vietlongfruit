import { NavLink } from "react-router-dom";
import "./header.css";

const pages = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about" },
  { name: "Certificate", path: "/certificate" },
  { name: "Tracking", path: "/tracking" },
];

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img src="/Images/Logo-01.svg" alt="Vietlongfruit Logo" />
      </NavLink>
      <nav>
        <ul className="nav-list">
          {pages.map(({ name, path }) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344l3.85 3.85-1.397 1.397-3.85-3.85A6.5 6.5 0 1111.742 10.344zm-5.242.656a5 5 0 100-10 5 5 0 000 10z"/>
        </svg>
      </div>
    </header>
  );
}
