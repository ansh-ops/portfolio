import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/homemain.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header hero-copy">
              <p className="hero-kicker">Portfolio</p>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Building practical data products{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                <strong className="main-name"> Ansh Krishna</strong>
              </h1>

              <p className="hero-summary">
                AI Engineer Intern at Leaniar with an M.S. in Applied Data
                Science from USC, focused on enterprise automation, agentic
                workflows, backend APIs, and production-ready AI systems.
              </p>

              <div className="hero-type">
                <Type />
              </div>

              <div className="hero-actions">
                <Button as={Link} to="/project" variant="primary">
                  View Projects
                </Button>
                <Button as={Link} to="/resume" variant="outline-primary">
                  View Resume
                </Button>
              </div>
            </Col>

            <Col md={5} className="hero-art">
              <img
                src={homeLogo}
                alt="Ansh Krishna portrait"
                className="img-fluid hero-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
