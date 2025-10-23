import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">EDUCATION.SYS</h2>
      
      <div className="education-timeline">
        <div className="education-item">
          <h3>B.Tech, Computer Science & Engineering — Indian Institute of Technology, Tirupati</h3>
          <p>Nov 2020 — July 2024</p>
          <div className="education-gpa">GPA - 8.56 / 10.0</div>
          <div className="education-details">
            <strong>Relevant coursework:</strong> Database Systems, Software Engineering, Operating Systems, Machine Learning, Computer Networks, Cyber Security
          </div>
          <div className="education-details">
            <strong>Certifications:</strong> Cryptography and Network Security (NPTEL — Top 1%), Blockchain and its applications (NPTEL — Top 1%)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;