import React from "react";
import { Card, Col } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, topic, img } = expert;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{topic}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Expert;
