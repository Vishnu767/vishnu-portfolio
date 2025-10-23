import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer — Bank of New York (BNY)",
      company: "Chennai, Tamil Nadu — July 2024 – Present",
      achievements: [
        "Delivered optimized REST APIs with Java Spring Boot for large entitlement datasets, replacing a legacy reporting system and enabling modern, user-friendly PDF/Excel outputs.",
        "Evaluated multiple approaches (Java Streams, Reactive Java, Pagination) for handling large datasets and implemented a high-performing, efficient solution.",
        "Integrated an AI-powered RAG SQL query agent that reduced client data retrieval time by 85%, from 5–7 minutes to under 30 seconds.",
        "Led the end-to-end development of a data migration solution to transfer data from legacy systems to latest systems, identifying and resolving schema and constraint issues to ensure reliable and accurate data transfer."
      ]
    },
    {
      title: "Software Engineer Intern — MAQ Software",
      company: "Hyderabad, Telangana — May 2023 – July 2023",
      achievements: [
        "Developed E2E automated tests with Playwright, verifying UI interactions and data flows, achieving 90% reduction in manual testing effort."
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