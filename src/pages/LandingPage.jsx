import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import EventCard from '../components/EventCard.jsx';
import AboutSection from '../components/AboutSection.jsx';

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="events">
        <EventCard
          title="Coffee & Networking"
          date="June 14, 2025"
          description="Meet likeminded people in Prague over coffee."
        />
        <EventCard
          title="Hiking in the Alps"
          date="July 3, 2025"
          description="Join us for an unforgettable mountain adventure."
        />
      </section>
      <AboutSection />
    </>
  );
}
