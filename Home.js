import React from 'react';

function Home() {
  return (
    <div>
      <section style={{textAlign: 'center', padding: '3rem 0'}}>
        <h1 style={{fontSize: '2.5rem', color: '#22223b'}}>Welcome to Ghost Buster Travelers & Tours</h1>
        <p style={{fontSize: '1.2rem', margin: '1.5rem 0', color: '#4a4e69'}}>
          Discover the beauty of Pakistan with our exclusive travel packages, expert guides, and unforgettable experiences.
        </p>
        <a href="/packages" style={{background: '#22223b', color: '#fff', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>View Packages</a>
      </section>
      <section style={{marginTop: '3rem'}}>
        <h2>Why Choose Us?</h2>
        <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
          <li>Experienced local guides</li>
          <li>Customizable tour packages</li>
          <li>24/7 customer support</li>
          <li>Best price guarantee</li>
        </ul>
      </section>
    </div>
  );
}

export default Home; 