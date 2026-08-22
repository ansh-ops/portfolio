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
            I hold an M.S. in Applied Data Science from USC and currently build
            AI-powered enterprise software at Leaniar across backend systems,
            document automation, and production workflows. This section gives
            recruiters a quick timeline view before diving into projects.
          </p>
        </div>

        <ExperienceEducation />
      </Container>
    </Container>
  );
}

export default Experience;
