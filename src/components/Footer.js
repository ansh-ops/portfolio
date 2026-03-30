import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Los Angeles, CA</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ansh Krishna</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ansh-ops"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ansh-krishna-a9a5631b5/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <Link
                to="/resume"
                style={{ color: "white" }}
                aria-label="Resume"
              >
                <CgFileDocument />
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
