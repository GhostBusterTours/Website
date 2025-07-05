import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent! (Demo only, not actually sent)');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{maxWidth: 500, margin: '2rem auto'}}>
        <div style={{marginBottom: '1rem'}}>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} required style={{width: '100%', padding: '0.5rem'}} />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label>Email</label><br />
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{width: '100%', padding: '0.5rem'}} />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label>Message</label><br />
          <textarea name="message" value={form.message} onChange={handleChange} required style={{width: '100%', padding: '0.5rem', minHeight: 100}} />
        </div>
        <button type="submit" style={{background: '#22223b', color: '#fff', padding: '0.7rem 2rem', border: 'none', borderRadius: 8}}>Send</button>
        <div style={{marginTop: '1rem', color: '#4a4e69'}}>{status}</div>
      </form>
    </div>
  );
}

export default Contact; 