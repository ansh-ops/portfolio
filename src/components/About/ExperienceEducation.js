import React from "react";
import { Col, Row } from "react-bootstrap";

const experienceItems = [
  {
    title: "Software Engineer, Data Systems (Contract)",
    organization: "Eurus Lifecare",
    location: "Ahmedabad, India",
    period: "Jan 2024 - Jun 2024",
    points: [
      "Developed FastAPI and PostgreSQL services powering inventory and operational workflows, creating structured data foundations for automation and analytics across 500+ records.",
      "Implemented alerting and monitoring pipelines that reduced manual tracking effort and improved operational visibility through automated status analysis.",
      "Worked with business stakeholders to identify repetitive decision workflows and convert them into scalable API-backed systems for future AI-driven automation.",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "Data Security Council of India",
    location: "Noida, India",
    period: "Jan 2023 - Jul 2023",
    points: [
      "Engineered Python NLP pipelines on 100K+ cybersecurity records, extracting signals from messy text data for threat intelligence workflows.",
      "Standardized reusable preprocessing and validation components across 3+ analysis tasks, improving consistency for downstream insight generation.",
      "Shared technical findings with analysts and domain stakeholders, translating model outputs into clearer intelligence summaries.",
    ],
  },
  {
    title: "Software Engineering Intern",
    organization: "TalentServe",
    location: "Mumbai, India",
    period: "May 2022 - Jun 2022",
    points: [
      "Worked with designers and engineers to deploy React, REST API, and Python dashboard features across 3 departments, increasing engagement by 35%.",
      "Identified API and UI improvements that reduced stakeholder feedback cycles by 25% during pilot testing.",
    ],
  },
];

const educationItems = [
  {
    title: "University of Southern California",
    subtitle: "M.S. in Applied Data Science",
    location: "Los Angeles, CA",
    period: "Aug 2024 - May 2026",
    note: "STEM-OPT eligible",
    coursework: [
      "Machine Learning",
      "Information Retrieval",
      "Data Mining",
      "Data Management",
      "Python Programming",
      "Statistics",
    ],
  },
  {
    title: "Pandit Deendayal Petroleum University",
    subtitle: "B.Tech. in Computer Science",
    location: "Gandhinagar, Gujarat",
    period: "Aug 2019 - May 2023",
    coursework: [
      "Artificial Intelligence",
      "Pattern Recognition",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Applied Data Analysis",
    ],
  },
];

function TimelineCard({ item, education = false }) {
  return (
    <article className="timeline-card">
      <div className="timeline-dot" />
      <div className="timeline-card-inner">
        <span className="timeline-period">{item.period}</span>
        <h3>{item.title}</h3>
        <p className="timeline-subtitle">
          {education ? item.subtitle : item.organization}
        </p>
        <p className="timeline-location">{item.location}</p>
        {item.note && <p className="timeline-note">{item.note}</p>}
        {education ? (
          <div className="coursework-list">
            {item.coursework.map((course) => (
              <span key={course} className="course-chip">
                {course}
              </span>
            ))}
          </div>
        ) : (
          <ul className="timeline-points">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function ExperienceEducation() {
  return (
    <section className="timeline-section">
      <h1 className="project-heading">
        Experience & <strong className="purple">education</strong>
      </h1>
      <p className="section-copy">
        A recruiter-friendly snapshot of the engineering, data, and AI work
        that shaped my current focus on LLM systems, backend APIs, and
        production-style machine learning workflows.
      </p>

      <Row className="timeline-grid">
        <Col lg={6} className="timeline-column">
          <div className="timeline-column-header">
            <h2>Experience</h2>
            <p>Hands-on work across data science and software engineering.</p>
          </div>
          <div className="timeline-track">
            {experienceItems.map((item) => (
              <TimelineCard key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>
        </Col>

        <Col lg={6} className="timeline-column">
          <div className="timeline-column-header">
            <h2>Education</h2>
            <p>Academic foundations, with USC coursework highlighted.</p>
          </div>
          <div className="timeline-track">
            {educationItems.map((item) => (
              <TimelineCard
                key={`${item.title}-${item.period}`}
                item={item}
                education
              />
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ExperienceEducation;
