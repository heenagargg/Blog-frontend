// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file for the contact page

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please feel free to reach out to us. We're here to help!</p>

        {submitted ? (
          <div className="submission-confirmation">
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
