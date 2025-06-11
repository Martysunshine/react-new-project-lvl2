import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/profile">User Profile</Link>

      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/profile">User Profile</a>

    </nav>
  );
}
