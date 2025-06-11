import Card from '../components/Card';
import './LandingPage.css';

const features = [
  { title: 'Create Events', description: 'Plan and manage events with ease.' },
  { title: 'Explore Meetups', description: 'Discover events that match your interests.' },
  { title: 'Connect', description: 'Meet like-minded people and grow your network.' }
];

const LandingPage = () => {
  return (
    <main className="landing-container">
      <section className="hero">
        <h1>Patagonio</h1>
        <p>Your platform for meetings and events.</p>
        <button>Join the Beta</button>
      </section>
      <section className="features">
        {features.map((f) => (
          <Card key={f.title} title={f.title} description={f.description} />
        ))}
      </section>
    </main>
  );
};

export default LandingPage;
