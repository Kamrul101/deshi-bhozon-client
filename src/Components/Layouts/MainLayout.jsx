import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Shared/Banner/Banner";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <Row>
          <Col lg={9} >
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <h1>New One</h1>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
