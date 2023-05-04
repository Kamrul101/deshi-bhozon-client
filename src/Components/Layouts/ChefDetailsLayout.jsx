import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import ChefDetailsNav from "../Pages/ChefDetails/ChefDetailsNav/ChefDetailsNav";

const ChefDetailsLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Container className="mt-5">
        <Row>
          <Col lg={9} >
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <ChefDetailsNav></ChefDetailsNav>
          </Col>
        </Row>
      </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ChefDetailsLayout;
