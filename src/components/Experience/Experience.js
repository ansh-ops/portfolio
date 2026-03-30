import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceEducation from "../About/ExperienceEducation";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <div className="experience-hero">
          <p className="hero-kicker">Background</p>
          <h1 className="project-heading">
            Building from <strong className="purple">experience</strong>,
            grounded in <strong className="purple">education</strong>
          </h1>
          <p className="section-copy experience-copy">
            I&apos;m currently pursuing my M.S. in Applied Data Science at USC
            and have internship experience across data science and software
            engineering. This section gives a quick timeline view for recruiters
            who want context before diving into projects.
          </p>
        </div>

        <ExperienceEducation />
      </Container>
    </Container>
  );
}

export default Experience;
