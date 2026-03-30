import React from "react";
import { Col, Row } from "react-bootstrap";

const experienceItems = [
  {
    title: "Data Science Intern",
    organization: "Data Security Council of India",
    location: "Noida, India",
    period: "Jan 2023 - Jul 2023",
    points: [
      "Built Python-based data processing and NLP pipelines for 100k+ cybersecurity records supporting national threat intelligence work.",
      "Standardized modular analytics workflows to improve data quality, reuse, and reliability across multiple analysis tasks.",
    ],
  },
  {
    title: "Software Engineering Intern",
    organization: "TalentServe",
    location: "Mumbai, India",
    period: "May 2022 - Jun 2022",
    points: [
      "Developed full-stack internal applications with React, REST APIs, and Python backends for interactive analytics dashboards.",
      "Improved user engagement by 35% and reduced feedback cycles by 25% through API and UI optimization.",
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
      "Data Management",
      "Data Mining",
      "Python Programming",
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
      "Applied Data Analysis",
      "Cyber Security",
      "Cloud Computing",
      "Data Structures and Algorithms",
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
        A recruiter-friendly snapshot of the internships, academic training,
        and USC coursework that shaped my work in machine learning, analytics,
        and software systems.
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
