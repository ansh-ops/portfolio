import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/recommendation.webp";
import editor from "../../Assets/Projects/satellite.jpg";
import chatify from "../../Assets/Projects/chatdb.png";
import suicide from "../../Assets/Projects/cybersec.jpeg";
import bitsOfCode from "../../Assets/Projects/earthquake.jpg";
import decision from "../../Assets/Projects/decisionintelligence.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatDB"
              description="Built a natural language interface using Gemini LLM to convert user input into executable SQL queries, enabling intuitive access to structured data."
              ghLink="https://github.com/ansh-ops/DSCI551-final-project.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decision}
              isBlog={false}
              title="Autonomous Decision Intelligence System (Bring-Your-Own Data)"
              description="A dataset-agnostic, agentic analytics system that autonomously performs EDA, feature engineering, model selection, evaluation, and explainability"
              ghLink="https://github.com/ansh-ops/decision-intelligence-system.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ETL Pipeline for Earthquake Forecasting"
              description="Built and maintained an ETL pipeline using Python to process geospatial datasets for earthquake magnitude prediction."
              ghLink="https://drive.google.com/file/d/14oygW0yTHA6Ihobwmn5pausOszjSP5Ws/view?usp=sharing"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CNN-Based Land Cover Detection"
              description="Built and deployed a CNN in TensorFlow for classifying satellite images; optimized for real-time performance with OpenCV preprocessing"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LLM-Powered Course Recommender"
              description="Built a web app that reads resumes and recommends online courses based on the user’s background and goals. Developed a resume-based recommender system that achieved 90%+ semantic match accuracy across 100+ test cases. Built with Python, Streamlit, FAISS, and transformer models (SentenceTransformers)."
              ghLink="https://github.com/ansh-ops/LLM-Course-Recommender.git"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cyber Security Threat Intelligence Dashboard"
              description="Cyber Incident Forecasting Dashboard is a Streamlit app that clusters threat intelligence reports using NLP, UMAP, and HDBSCAN, then extracts keywords for better understanding. It applies Poisson regression to forecast weekly incident trends, helping analysts anticipate emerging cyber threats. The dark-themed interactive interface makes exploration intuitive and visually clear."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> 

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
