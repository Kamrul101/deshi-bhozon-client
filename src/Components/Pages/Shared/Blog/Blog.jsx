import React from "react";
import { Card, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Differences between uncontrolled and controlled components:</Card.Title>
          <Card.Text>
          In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>How to validate React props using PropTypes</Card.Title>
          <Card.Text>
          In React, PropTypes is a typechecking library that is used to validate the props that are being passed to a component. It is a very important tool for ensuring that the correct data is being passed around your application, which can help to prevent bugs and improve the overall stability of your codebase.
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Difference between nodejs and express js.</Card.Title>
          <Card.Text>
          Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications
          </Card.Text>
          
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
          <Card.Text>
          Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Blog;
