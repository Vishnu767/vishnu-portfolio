import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer — Bank of New York (BNY)",
      company: "Chennai, Tamil Nadu — July 2024 – Present",
      achievements: [
        "Developed and deployed REST APIs using Java Spring Boot to replace a legacy reporting system, enabling modern PDF/Excel reports for over 3000 clients and improving reliability and maintainability.",
        "Worked with large datasets (100K+ records) that had varied configurations across different attribute types, using caching and pagination to make report generation faster.",
        "Built an internal SQL query based AI assistant using a RAG setup to automate client query handling, reducing average resolution time from 6 minutes to under 30 seconds.",
        "Designed and implemented a data migration framework ensuring 100% data accuracy and zero data loss across environments.",
        "Partnered with senior engineers, product owners, and QA teams to define technical requirements, review design proposals, and present end-to-end solutions."
      ]
    },
    {
      title: "Software Engineer Intern — MAQ Software",
      company: "Hyderabad, Telangana — May 2023 – July 2023",
      achievements: [
        "Automated end-to-end UI testing using Playwright (JavaScript) and command-line workflows to validate user flows and data integrity, cutting manual QA effort by 90%"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">EXPERIENCE.JSON</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-title">{exp.title}</div>
          <div className="experience-company">{exp.company}</div>
          <ul>
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;