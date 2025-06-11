import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-area">
        <img className="logo-img" src="/logo.png" alt="Patagonio logo" />
        <span className="logo-text">Patagonio</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">User Profile</Link>
      </nav>
    </header>
  );
}
