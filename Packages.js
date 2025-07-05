import React from 'react';

const samplePackages = [
  {
    _id: 1,
    title: 'Hunza Valley Adventure',
    description: '7 days tour to the breathtaking Hunza Valley with guided treks and local cuisine.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    _id: 2,
    title: 'Skardu & Deosai Plains',
    description: 'Experience the magical Skardu and the wild Deosai National Park in 5 days.',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    _id: 3,
    title: 'Lahore Heritage Tour',
    description: '2 days exploring the rich history, food, and culture of Lahore.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
  },
];

function Packages() {
  return (
    <div>
      <h1>Our Packages</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        {samplePackages.map(pkg => (
          <div key={pkg._id} style={{flex: '1 1 300px', border: '1px solid #eee', borderRadius: 8, padding: 16, background: '#fafafa'}}>
            <img src={pkg.image} alt={pkg.title} style={{width: '100%', borderRadius: 8, maxHeight: 200, objectFit: 'cover'}} />
            <h3>{pkg.title}</h3>
            <p>{pkg.description}</p>
            <p style={{fontWeight: 'bold', color: '#22223b'}}>PKR {pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages; 