import React from 'react';

function ContactPage() {
  return (
    <div className="page-content" style={{ padding: '50px 30px' }}>
      <h2>Contact Me</h2>
      <p>I am currently open to collaboration and speaking opportunities. Feel free to reach out!</p>
      
      <form style={{ maxWidth: '400px', display: 'grid', gap: '10px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '10px' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '10px' }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: '10px' }}></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#0056b3', color: 'white', border: 'none', cursor: 'pointer' }}>Send Message</button>
      </form>

      <p style={{ marginTop: '20px' }}>
        Email: **ramiyasarvesh@gmail.com**
      </p>
      <p>
        <a href="https://www.linkedin.com/in/sarvesh-r-149aba188/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
    </div>
  );
}

export default ContactPage;