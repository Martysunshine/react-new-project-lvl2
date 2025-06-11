export default function UserProfile() {
  return (
    <section className="profile-container">
      <img
        src="https://via.placeholder.com/150"
        alt="User avatar"
        className="profile-avatar"
      />
      <h2 className="profile-username">Username</h2>
      <div className="joined-events">{/* Joined events will appear here */}</div>
      <div className="user-posts">{/* User posts will appear here */}</div>
    </section>
  );
}
