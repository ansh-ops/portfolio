import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const primaryLink = props.primaryLink || props.ghLink;
  const primaryLabel = props.primaryLabel || (props.isBlog ? "Blog" : "GitHub");

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="project-actions">
          {primaryLink && (
            <Button
              variant="primary"
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> &nbsp;
              {primaryLabel}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="outline-primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
