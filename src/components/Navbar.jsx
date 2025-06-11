import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Patagonio</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">User Profile</Link>
      </nav>
    </header>
  );
}
