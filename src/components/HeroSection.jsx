export default function HeroSection() {
  return (
    <section className="hero">
      <img
        src="/hero.jpg"
        alt="Community"
        className="hero-image"
      />
      <h1>Meet. Share. Grow.</h1>
      <p>Patagonio helps you connect with inspiring people and events.</p>
      <button>
        Join Patagonio <span role="img" aria-label="rocket">🚀</span>
      </button>
    </section>
  );
}
