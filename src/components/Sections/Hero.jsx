import { useState, useEffect } from 'react';
import './Hero.css';
import resumePdf from '../../assets/PUPPALA_VISHNU_VARDHAN_RESUME.pdf';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm Vishnu Vardhan Puppala";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="section hero">
      <h1>
        {displayedText}
        {!isTypingComplete && <span className="typing-cursor" />}
      </h1>
      <p>Software Developer with 1+ years of experience at BNY, skilled in Java, Spring Boot, and building scalable client-facing applications</p>
      <p>Chennai, Tamil Nadu • Interested to work in roles focusing on full-stack engineering</p>
      <p style={{ marginTop: '12px' }}>
        {/* Add relative path to the resume, so that it works after deployment as well */}
        <a
          href={resumePdf}
          download="VISHNU_VARDHAN_PUPPALA.pdf"
          className="download-button"
        >
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Hero;