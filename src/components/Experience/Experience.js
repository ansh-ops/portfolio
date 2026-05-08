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
            while building toward AI and LLM engineering work across backend
            systems, agentic workflows, and production-style ML applications.
            This section gives recruiters a quick timeline view before diving
            into projects.
          </p>
        </div>

        <ExperienceEducation />
      </Container>
    </Container>
  );
}

export default Experience;
