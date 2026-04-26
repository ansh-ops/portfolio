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
import canary from "../../Assets/Projects/canary.jpeg";
import imageAuth from "../../Assets/Projects/imageauth.png";
import agentOs from "../../Assets/Projects/agentos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">projects</strong>
        </h1>
        <p className="section-copy">
          A few projects that best reflect my approach to data, ML, and
          product-minded engineering.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agentOs}
              isBlog={false}
              title="Agent OS"
              tags={["Multi-Agent Systems", "FastAPI", "Next.js", "Gemini"]}
              description="Built a production-style MVP for multi-agent AI workflows where a supervisor routes tasks across specialist and critic agents, tracks shared memory and execution traces, enforces permissions, and supports document and CSV ingestion through a full-stack dashboard."
              ghLink="https://github.com/ansh-ops/agent-os.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canary}
              isBlog={false}
              title="CanaryML - Kubernetes ML Deployment Platform"
              tags={["MLOps", "Kubernetes", "FastAPI", "Observability"]}
              description="Developed a Kubernetes-based ML inference system supporting canary rollout, automated rollback, and metrics-driven observability using Dockerized FastAPI services."
              ghLink="https://github.com/ansh-ops/ml-canary-platform.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatDB"
              tags={["LLM", "NL2SQL", "Databases", "Applied AI"]}
              description="Built a natural language interface using Gemini to convert user questions into executable SQL queries and make structured data easier to explore."
              ghLink="https://github.com/ansh-ops/DSCI551-final-project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decision}
              isBlog={false}
              title="Autonomous Decision Intelligence System"
              tags={["Agentic AI", "Analytics", "ML", "Explainability"]}
              description="Created a dataset-agnostic analytics system that automates EDA, feature engineering, model selection, evaluation, and explainability."
              ghLink="https://github.com/ansh-ops/decision-intelligence-system.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageAuth}
              isBlog={false}
              title="Image Authenticity Detector"
              tags={["Machine Learning", "Computer Vision", "PyTorch", "Streamlit"]}
              description="Built a PyTorch-based computer vision application to classify images as authentic or AI-generated, with checkpoint comparison, Streamlit-based testing, and external evaluation added to address real-world hard cases. Best internal checkpoint subset reached 0.957 accuracy and 0.9925 AUROC."
              ghLink="https://github.com/ansh-ops/image-authenticity-detector"
              demoLink="https://aiimageverify.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ETL Pipeline for Earthquake Forecasting"
              tags={["ETL", "Python", "Geospatial Data", "Forecasting"]}
              description="Built and maintained a Python ETL workflow to process geospatial datasets for earthquake magnitude prediction."
              primaryLink="https://drive.google.com/file/d/14oygW0yTHA6Ihobwmn5pausOszjSP5Ws/view?usp=sharing"
              primaryLabel="Report"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CNN-Based Land Cover Detection"
              tags={["Computer Vision", "TensorFlow", "CNN", "Remote Sensing"]}
              description="Built and deployed a TensorFlow CNN for classifying satellite imagery, with OpenCV preprocessing to improve real-time performance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LLM-Powered Course Recommender"
              tags={["LLM", "Recommendation", "FAISS", "Transformers"]}
              description="Built a resume-aware web app that recommends courses using FAISS and transformer embeddings, reaching 90%+ semantic match accuracy across 100+ test cases."
              ghLink="https://github.com/ansh-ops/LLM-Course-Recommender.git"
              demoLink="https://llm-course-recommender-anshs-projects-b955ed4b.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cyber Security Threat Intelligence Dashboard"
              tags={["Cybersecurity", "NLP", "Forecasting", "Streamlit"]}
              description="Built a Streamlit dashboard that clusters cyber threat reports, extracts keywords, and forecasts weekly incident trends to support proactive analysis."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
