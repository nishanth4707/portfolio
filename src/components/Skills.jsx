function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git",
    "REST APIs",
    "JWT Authentication",
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
