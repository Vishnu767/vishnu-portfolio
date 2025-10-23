import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Query Languages",
      skills: ["C++", "C", "Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["Spring Boot", "ExpressJS", "ReactJS", "NextJS", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Core Competencies",
      skills: ["REST APIs", "Microservices", "System Design", "DSA"]
    },
    {
      title: "Databases & AI Tools",
      skills: ["DB2", "MongoDB", "GitHub Copilot", "M365 Copilot"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">SKILLS.HTML</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;