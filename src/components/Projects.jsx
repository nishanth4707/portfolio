function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and Node.js.",
      link: "https://github.com/nishanth7407/project1",
    },
    {
      title: "Project 2",
      description: "Responsive portfolio website using HTML, CSS, and JavaScript.",
      link: "https://github.com/nishanth7407/project2",
    },
    {
      title: "Project 3",
      description: "E-commerce platform with JWT authentication.",
      link: "https://github.com/nishanth7407/project3",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
