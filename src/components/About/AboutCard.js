import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ansh Krishna </span>
            from <span className="purple"> Los Angeles, CA</span>
            <br />
            I am currently pursuing Master's degree in Applied Data Science at University of Southern California.
            <br />
            I have a Bachelor's degree in Computer Science.
            <br />
            <br />
            Apart from being a Data Scientist, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Scientific facts
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with family and friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
