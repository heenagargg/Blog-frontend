import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-about">
            <div className="footer-heading">
              <span>Travel</span>
              <span className="highlight">Log</span>
            </div>
            <p className="footer-description">
            Explore and share your travel adventures with TravelLog. Connect with fellow travelers, document your journeys, and inspire others with your stories and tips. Start exploring with us today!
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-links">
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-link-list">
              <li><a href="/">Home</a></li>
              <li><a >About</a></li>
              <li><a >Blogs</a></li>
              <li><a >Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-contact">
            <div className="footer-heading">Contact Us</div>
            <p className="footer-contact-info">
              Have questions or want to share your feedback? Get in touch at contact@travellog.com
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="footer-follow">
            <div className="footer-heading">Follow Us</div>
            <div className="footer-social-text">
              Stay updated by following us on socila media!
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <i className="fa-regular fa-copyright"></i> 2024 TravelLog
        </div>
        <div className="footer-developer">
          Made by Heena Garg
        </div>
      </div>
    </footer>
  );
}

export default Footer;
