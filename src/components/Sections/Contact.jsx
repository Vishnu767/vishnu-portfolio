import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">CONTACT.ME</h2>
      
      <p className="contact-description">
        Interested in collaborating or hiring? You can reach me at the email below — I typically respond within 48 hours.
      </p>
      
      <div className="contact-email">
        <a href="mailto:vishnuvardhanpuppala2003@gmail.com">
          <FaEnvelope className="contact-icon" />
          <span>vishnuvardhanpuppala2003@gmail.com</span>
        </a>
      </div>

      <div className="contact-social">
        <a 
          href="https://linkedin.com/in/vishnu767" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/vishnu767" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="social-icon" />
          <span>GitHub</span>
        </a>
      </div>

      <div className="contact-footer">
        © 2025 Vishnu Vardhan Puppala
      </div>
    </section>
  );
};

export default Contact;