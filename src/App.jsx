import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import UserProfile from './pages/UserProfile.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}
