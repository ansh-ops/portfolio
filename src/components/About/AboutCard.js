import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I&apos;m <span className="purple">Ansh Krishna</span>, based in{" "}
            <span className="purple">Los Angeles, CA</span>.
            <br />
            I&apos;m currently pursuing a Master&apos;s in Applied Data Science at
            the University of Southern California.
            <br />
            My background is in Computer Science, and I enjoy building systems
            that sit at the intersection of data, software, and
            decision-making.
            <br />
            <br />
            Outside of coursework and projects, I like keeping a balanced pace
            and staying curious.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Following sports and current events
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about science and technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends
            </li>
          </ul>

          <p style={{ color: "rgb(68 126 182)" }}>
            "Build things that are useful, measurable, and worth revisiting."
          </p>
          <footer className="blockquote-footer">Ansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
