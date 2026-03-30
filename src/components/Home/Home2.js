import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar-blue.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A little <span className="purple">about me</span>
            </h1>
            <p className="home-about-body">
              I enjoy building machine learning and analytics products that turn
              messy data into something decision-makers can actually use.
              <br />
              <br />
              My strongest tools are
              <i>
                <b className="purple">
                  {" "}Python, SQL, C++, and modern ML tooling
                </b>
              </i>
              , with hands-on work across
              <i>
                <b className="purple">
                  {" "}data science, ML systems, and applied AI
                </b>
              </i>
              .
              <br />
              <br />
              I&apos;m especially interested in projects where I can combine
              strong engineering habits with
              <i>
                <b className="purple">
                  {" "}experimentation, evaluation, and product thinking
                </b>
              </i>
              .
            </p>

            <div className="home-about-actions">
              <Button
                href="https://www.linkedin.com/in/ansh-krishna-a9a5631b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn /> LinkedIn
              </Button>
              <Button
                href="https://github.com/ansh-ops"
                target="_blank"
                rel="noreferrer"
                variant="outline-primary"
              >
                <AiFillGithub /> GitHub
              </Button>
              <Button href="/resume" variant="outline-primary">
                <CgFileDocument /> Resume
              </Button>
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false}>
              <img
                src={myImg}
                className="img-fluid avatar-image"
                alt="Ansh Krishna portrait"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Quick links</h1>
            <p>Everything a recruiter usually needs, in one place.</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ansh-ops"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ansh-krishna-a9a5631b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/resume"
                  className="icon-colour home-social-icons"
                  aria-label="Resume"
                >
                  <CgFileDocument />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
