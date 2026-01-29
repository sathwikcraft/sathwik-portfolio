function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Docker",
    "Kubernetes",
    "DSA"
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
