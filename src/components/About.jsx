import aboutData from "../content/AboutContent";

function About() {
  return (
    <section id="about">
      <h2>{aboutData.title}</h2>
      <p>{aboutData.description}</p>

      <ul>
        {aboutData.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
