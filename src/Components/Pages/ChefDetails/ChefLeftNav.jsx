import React from "react";
import { Card, Container } from "react-bootstrap";
import "./ChefLeftNav.css"

const ChefLeftNav = () => {
  return (
    <div>
        <h1 className="text-danger">We also Server</h1>
      <Container>
        <Card className="extra-section" style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" />
          <Card.Body className="text-center">
            <Card.Title>American</Card.Title>
          </Card.Body>
        </Card>
        <Card className="extra-section" style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          <Card.Body className="text-center">
            <Card.Title>Chinese</Card.Title>
          </Card.Body>
        </Card>
        <Card className="extra-section" style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1605013343009-c126c3dc2f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <Card.Body className="text-center">
            <Card.Title>American</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ChefLeftNav;
