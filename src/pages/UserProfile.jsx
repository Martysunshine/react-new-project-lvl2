import Navbar from '../components/Navbar.jsx';
import React from 'react';

export default function UserProfile() {
  return (
    <>
      <Navbar />
      <section className="profile">
        <h2>User Profile</h2>
        <p>Welcome to your profile page.</p>
      </section>
    </>
  );
}
