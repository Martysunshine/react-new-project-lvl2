import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Patagonio</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}
