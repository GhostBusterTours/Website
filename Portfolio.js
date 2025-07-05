import React from 'react';

const samplePortfolio = [
  {
    _id: 1,
    title: 'Fairy Meadows Trek',
    description: 'Guided group trek to Fairy Meadows, Nanga Parbat base camp.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    _id: 2,
    title: 'Islamabad City Tour',
    description: 'A day tour of Islamabad’s landmarks and hidden gems.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
  },
  {
    _id: 3,
    title: 'Swat Valley Family Trip',
    description: 'Family-friendly trip to Swat Valley with cultural activities.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
  },
];

function Portfolio() {
  return (
    <div>
      <h1>Our Portfolio</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        {samplePortfolio.map(item => (
          <div key={item._id} style={{flex: '1 1 300px', border: '1px solid #eee', borderRadius: 8, padding: 16, background: '#fafafa'}}>
            <img src={item.image} alt={item.title} style={{width: '100%', borderRadius: 8, maxHeight: 200, objectFit: 'cover'}} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio; 