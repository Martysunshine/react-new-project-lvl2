export default function EventCard({ title, date, description }) {
  return (
    <article className="event-card">
      <img
        src="https://source.unsplash.com/random/400x200?event"
        alt="Event visual"
        className="event-image"
      />
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{description}</p>
      </div>
    </article>
  );
}
