import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import EventCard from '../components/EventCard.jsx';
import WhyPatagonio from '../components/WhyPatagonio.jsx';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
            <section className="events">
        <EventCard
          image="/event1.jpg"
          title="Coffee & Networking"
          date="June 14, 2025"
          description="Meet likeminded people in Prague over coffee."
        />
        <EventCard
          image="/event2.jpg"
          title="Hiking in the Alps"
          date="July 3, 2025"
          description="Join us for an unforgettable mountain adventure."
        />
      </section>
      <WhyPatagonio />
      <div className="user-actions">
        <Link to="/about" className="secondary-btn">
          About Us
        </Link>
        <button className="secondary-btn" disabled>
          Contact & Feedback (coming soon)
        </button>
      </div>
    </>
  );
}
