import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "RNAS — Randomized Neural Architecture Search",
      description: "RNAS is aimed at efficiently discovering high-performing architectures by embedding the unstructured space of neural architectures within a constrained manifold and sampling promising regions.",
      tech: ["PyTorch", "Neural Architecture Search"],
      repo: "https://github.com/Vishnu767/BTP-RNAS"
    },
    {
      title: "Debt Detective",
      description: "VS Code extension integrating external analysis tools to quantify technical debt across multiple dimensions and visualizing recommendations for developers.",
      tech: ["ReactJS", "NodeJS"],
      repo: "https://github.com/Ganesh-P03/SE_tool_team5"
    },
    {
      title: "Tirutsava Website — IIT Tirupati Fest",
      description: "Developed the Tirutsava fest website to showcase events, schedules and registration flows for the college fest.",
      tech: ["ReactJS", "NodeJS"]
    },
    {
      title: "ERP Project — MERN Stack",
      description: "Developed an ERP-style website as part of coursework to build full-stack features using the MERN stack.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">PROJECTS.DIR</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-title">{project.title}</div>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.repo && (
              <div style={{ marginTop: '8px' }}>
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#00ffff' }}
                >
                  Repository →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;