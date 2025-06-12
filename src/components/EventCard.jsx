import { Link } from 'react-router-dom';

export default function EventCard({ title, date, description, image }) {
  return (
    <article className="event-card">
      <img
        src={image}
        alt={title}
        className="event-image"
      />
      <div className="event-details">
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{description}</p>
        <Link to="/profile" className="learn-more-btn">
          Learn More
        </Link>
      </div>
    </article>
  );
}
